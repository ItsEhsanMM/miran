import Divider from "@/components/Divider";
import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from "@/components/ui/table";
import { Metadata } from "next";
import React from "react";
import { productsDetail } from "@/consts/products";
import Image from "next/image";

type Product = {
   id: number;
   name: string;
   alt: string;
   category: string;
   type: string;
   packageSize: string;
   specifications: Record<string, string | undefined>;
   features: string[];
   applications: string[];
   description: (string | Record<string, string | string[]>)[]; // adjust if needed
   imageUrl: string;
};

interface PageProps {
   params: Promise<{
      product: string;
   }>;
}

export async function generateStaticParams() {
   return productsDetail.map((product) => ({
      product: product.id.toString(),
   }));
}

export async function generateMetadata({
   params,
}: PageProps): Promise<Metadata> {
   const product = (await params).product;
   console.log(product);
   const productId = parseInt(product);

   try {
      const response = await fetch(
         `${process.env.NEXT_PUBLIC_URL_PREFIX}/products/${productId}`
      );
      const data = await response.json();

      if (data?.product) {
         return {
            title: data.product.name,
            description:
               typeof data.product.description?.[0] === "string"
                  ? data.product.description[0]
                  : "Product details and specifications",
         };
      }
   } catch (error) {
      console.error("Metadata fetch error:", error);
   }

   return {
      title: "Product Not Found",
      description:
         "The product you're looking for doesn't exist or failed to load.",
   };
}

const Page = async ({ params }: PageProps) => {
   const product = (await params).product;
   const productId = parseInt(product);

   let productData: Product | null = null;
   let error: string | null = null;

   try {
      const response = await fetch(
         `${process.env.NEXT_PUBLIC_URL_PREFIX}/products/${productId}`
      );

      if (!response.ok) throw new Error("Failed to fetch product");

      const data = await response.json();
      if (data.error) throw new Error(data.error);

      productData = data.product;
   } catch (err) {
      console.error("Error fetching product:", err);
      error = "Failed to load product";
   }

   if (error || !productData) {
      return (
         <div className="my-24 w-full text-center">
            <h1>{error || "Product Not Found!"}</h1>
         </div>
      );
   }

   return (
      <section className="px-6 pb-10 mt-20 flex flex-col space-y-4">
         <div className="flex flex-col items-center text-center space-y-5">
            <h1>{productData.name}</h1>
            {productData.imageUrl && (
               <Image
                  src={productData.imageUrl}
                  width={1024}
                  height={1080}
                  alt={productData.alt}
                  className="w-full mt-4 rounded-lg overflow-hidden"
               />
            )}
            <Divider />
         </div>
         <div>
            <p>
               A premium hydraulic oil engineered for industrial and mobile
               hydraulic systems, ensuring superior performance, durability, and
               wear protection.
            </p>
         </div>
         <Table className="rounded-lg border-gray-700 border">
            <TableHeader>
               <TableRow className="border-gray-700">
                  <TableHead>Specification</TableHead>
                  <TableHead>Details</TableHead>
               </TableRow>
            </TableHeader>
            <TableBody>
               {Object.entries(productData.specifications).map(
                  ([key, value], i) => (
                     <TableRow
                        className="border-gray-700"
                        key={i}
                     >
                        <TableCell>{key}</TableCell>
                        <TableCell>{value}</TableCell>
                     </TableRow>
                  )
               )}
            </TableBody>
         </Table>
      </section>
   );
};

export default Page;
