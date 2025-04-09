import { NextResponse } from 'next/server';
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { productsDetail } from '@/consts/products';

export async function generateStaticParams() {
  return productsDetail.map((product) => ({
     id: product.id.toString(),
  }));
}

const s3Client = new S3Client({
    region: 'default', 
    endpoint: process.env.LIARA_ENDPOINT, 
    credentials: {
      accessKeyId: process.env.LIARA_ACCESS_KEY!,
      secretAccessKey: process.env.LIARA_SECRET_KEY!,
    },
    forcePathStyle: true, 
  });
  
  export async function GET(
    _: Request,
     params : { params: Promise<{ id: string }> }
  ) {
    const { id } = await params.params
  
    if (!id) {
      return NextResponse.json({ error: 'Product ID is required' }, { status: 400 });
    }
  
    const product = productsDetail.find((p) => p.id === parseInt(id));
  
    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }
  
    const paramsS3 = {
      Bucket: process.env.LIARA_BUCKET_NAME!,
      Key: `products/${id}.jpeg`,
    };
  
    try {
      const command = new GetObjectCommand(paramsS3);
      const imageUrl = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
  
      const response = {
        product: {
          ...product,
          imageUrl,
        },
      };
      return NextResponse.json(response);
    } catch (error) {
      console.error('Error fetching image from Liara:', error);
      const response = { error: 'Failed to fetch image' };
      return NextResponse.json(response, { status: 500 });
    }
  }