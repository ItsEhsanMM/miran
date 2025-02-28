// app/api/products/route.ts
import { NextResponse } from 'next/server';
import { S3Client, ListObjectsV2Command, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { productsDetail } from '@/consts/products';

// Initialize the S3 client with Liara's custom endpoint
const s3Client = new S3Client({
  region: 'default', // Liara doesn't use regions, but the SDK requires this field
  endpoint: process.env.LIARA_ENDPOINT, // Use your custom Liara endpoint
  credentials: {
    accessKeyId: process.env.LIARA_ACCESS_KEY!,
    secretAccessKey: process.env.LIARA_SECRET_KEY!,
  },
  forcePathStyle: true, // Required for S3-compatible services like Liara
});

// Define the type for the response
type ApiResponse = {
  products: {
    id: number;
    name: string;
    alt: string;
    category: string;
    type: string;
    packageSize: string;
    specifications: Record<string, string>;
    features: string[];
    applications: string[];
    description: (string | Record<string, string | string[]>)[];
    imageUrl: string;
  }[];
  error?: string;
};

export async function GET() {
  try {
    // List all files in the "products/" folder of the bucket
    const listCommand = new ListObjectsV2Command({
      Bucket: process.env.LIARA_BUCKET_NAME!,
      Prefix: 'products/', // Only list files in the "products/" folder
    });
    const listResponse = await s3Client.send(listCommand);

    // Extract file keys (e.g., "products/1.jpg", "products/2.jpg")
    const fileKeys = listResponse.Contents?.map((file) => file.Key) || [];

    // Match files with productsDetail
    const productsWithImages = await Promise.all(
      productsDetail.map(async (product) => {
        const fileKey = `products/${product.id}.jpeg`; // Assuming files are named like "products/1.jpg", "products/2.jpg", etc.
        if (fileKeys.includes(fileKey)) {
          // Generate a signed URL for the image
          const getCommand = new GetObjectCommand({
            Bucket: process.env.LIARA_BUCKET_NAME!,
            Key: fileKey,
          });
          const imageUrl = await getSignedUrl(s3Client, getCommand, { expiresIn: 3600 }); // URL expires in 1 hour
          return {
            ...product,
            imageUrl,
          };
        } else {
          // If no image is found, return the product without an image URL
          return {
            ...product,
            imageUrl: '',
          };
        }
      })
    );

    const response = [...productsWithImages];
    return NextResponse.json(response);
  } catch (error) {
    console.error('Error fetching products:', error);
    const response: ApiResponse = { error: 'Failed to fetch products', products: [] };
    return NextResponse.json(response, { status: 500 });
  }
}