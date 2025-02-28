import { NextResponse } from 'next/server';
import { S3Client, ListObjectsV2Command, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { productsDetail } from '@/consts/products';

const s3Client = new S3Client({
  region: 'default', 
  endpoint: process.env.LIARA_ENDPOINT, 
  credentials: {
    accessKeyId: process.env.LIARA_ACCESS_KEY!,
    secretAccessKey: process.env.LIARA_SECRET_KEY!,
  },
  forcePathStyle: true,
});

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
    const listCommand = new ListObjectsV2Command({
      Bucket: process.env.LIARA_BUCKET_NAME!,
      Prefix: 'products/',
    });
    const listResponse = await s3Client.send(listCommand);

    const fileKeys = listResponse.Contents?.map((file) => file.Key) || [];

    const productsWithImages = await Promise.all(
      productsDetail.map(async (product) => {
        const fileKey = `products/${product.id}.jpeg`;
        if (fileKeys.includes(fileKey)) {
          const getCommand = new GetObjectCommand({
            Bucket: process.env.LIARA_BUCKET_NAME!,
            Key: fileKey,
          });
          const imageUrl = await getSignedUrl(s3Client, getCommand, { expiresIn: 3600 }); 
          return {
            ...product,
            imageUrl,
          };
        } else {
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