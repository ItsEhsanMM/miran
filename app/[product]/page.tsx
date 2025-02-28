import Divider from "@/components/Divider";
import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from "@/components/ui/table";
import { productsDetail } from "@/consts/products";
import Image from "next/image";
import React from "react";

// Page component
const Page = async (props: { params: Promise<{ product: string }> }) => {
   const params = await props.params;
   const productId = parseInt(params.product); // Convert the product ID to a number
   const product = productsDetail.find((p) => p.id === productId); // Find the product by ID

   if (!product) {
      return (
         <div className="my-24 w-full text-center">
            <h1>Product Not Found!</h1>
         </div>
      );
   }

   return (
      <section className="px-6 pb-10 mt-20 flex flex-col space-y-4">
         <div className="flex flex-col items-center text-center space-y-5">
            <h1>{product.name}</h1>
            <Image
               src={product.src}
               width={1024}
               height={1080}
               alt={product.alt}
               className="w-full mt-4 rounded-lg overflow-hidden"
            />
            <Divider />
         </div>
         <div>
            <p>
               A premium hydraulic oil engineered for industrial and mobile
               hidraulic systems, ensuring superior performance, durability and
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
               {Object.entries(product.specifications).map(
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
