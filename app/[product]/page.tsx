import Divider from "@/components/Divider";
import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import React from "react";

// Define the type for the product
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
   description: (string | Record<string, string | string[]>)[];
   imageUrl: string;
};

const Page = async (props: { params: { product: string } }) => {
   const { product } = await props.params;
   const productId = parseInt(product);

   let productData: Product | null = null;
   let error: string | null = null;

   try {
      const response = await fetch(
         `http://localhost:3000/api/products/${productId}`
      );

      if (!response.ok) {
         throw new Error("Failed to fetch product");
      }

      const data = await response.json();
      if (data.error) {
         throw new Error(data.error);
      }

      productData = data.product;
   } catch (err) {
      console.error("Error fetching product:", err);
      error = "Failed to load product";
   }

   // Handle errors or missing product
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
