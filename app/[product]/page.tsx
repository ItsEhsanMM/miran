import Divider from "@/components/Divider";
import { productsDetail } from "@/consts/products";
import Image from "next/image";
import React from "react";

const page = ({ params }: { params: { product: string } }) => {
   const product = productsDetail.find(
      (p) => p.id === parseInt(params.product)
   );
   if (!product) {
      return (
         <div className="my-24 w-full text-center">
            <h1>Product Not Found!</h1>;
         </div>
      );
   }
   return (
      <section className="px-6 pb-10 mt-14 flex flex-col space-y-4">
         <div className="flex flex-col items-center text-center space-y-5">
            <Image
               src={product.src}
               width={1024}
               height={1080}
               alt={product.alt}
               className="w-full mt-4 rounded-lg overflow-hidden"
            />
            <h1>{product.name}</h1>
            <Divider />
         </div>
         <div className="flex flex-col px-2">
            <div className="flex items-center space-x-2">
               <h4>Category: </h4>
               <p>{product.category}</p>
            </div>
            <div className="flex items-center space-x-2">
               <h4>Type:</h4>
               <p>{product.type}</p>
            </div>
            <div className="flex items-center space-x-2">
               <h4>Package Size:</h4>
               <p>{product.packageSize}</p>
            </div>
         </div>
         <Divider />
         <div className="flex flex-col space-y-4">
            <h2>specifications:</h2>
            <ul className="flex flex-col justify-center space-y-4 pl-4">
               {Object.entries(product.specifications).map(
                  ([key, value], i) => (
                     <React.Fragment key={i}>
                        <li className="flex flex-col space-y-1 justify-center">
                           <h4>{key}:</h4>
                           <p className="ml-4">{value}</p>
                        </li>
                     </React.Fragment>
                  )
               )}
            </ul>
         </div>
         <Divider />
         <div className="flex flex-col space-y-4">
            <h2>Features:</h2>
            <ul className="flex flex-col list-disc space-y-3 justify-center pl-8">
               {product.features.map((item, i) => {
                  return (
                     <li
                        className="text-lg font-medium"
                        key={i}
                     >
                        {item}
                     </li>
                  );
               })}
            </ul>
         </div>
         <Divider />
         <div className="flex flex-col space-y-3">
            <h2>Applications:</h2>

            <ul className="flex flex-col list-disc space-y-2 justify-center pl-8">
               {product.applications.map((item, i) => {
                  return (
                     <li
                        className="text-lg font-medium"
                        key={i}
                     >
                        {item}
                     </li>
                  );
               })}
            </ul>
         </div>
         <Divider />
      </section>
   );
};
export default page;
