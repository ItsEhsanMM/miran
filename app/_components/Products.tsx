"use client";

import Image from "next/image";
import { EffectCoverflow, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";

interface ProductProps {
   id: number;
   imageUrl: string;
   alt: string;
}

interface ProductsProps {
   products: ProductProps[];
}

const Products = ({ products }: ProductsProps) => {
   return (
      <section
         id="products"
         className="w-full text-center"
      >
         <h2 className="text-3xl font-bold mb-6">Products</h2>
         <Swiper
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            centeredSlides={true}
            navigation={true}
            effect="coverflow"
            coverflowEffect={{
               rotate: 0,
               stretch: 0,
               depth: 100,
               modifier: 2.5,
               slideShadows: true,
            }}
            modules={[Navigation, EffectCoverflow]}
            className="size-full"
         >
            {products.map((product) => (
               <SwiperSlide
                  key={product.id}
                  className="flex justify-center"
               >
                  <Link href={`/${product.id}`}>
                     <Card className="border-none flex flex-col items-center justify-center">
                        <CardHeader>
                           <Image
                              width={512}
                              height={512}
                              src={product.imageUrl}
                              alt={product.alt}
                              loading="lazy"
                              className="w-[80rem] max-h-96 object-cover rounded-xl shadow-lg"
                           />
                        </CardHeader>
                        <CardContent className="flex items-center justify-center rounded-lg border-none text-xl font-bold">
                           <p className="size-full flex items-center justify-center">
                              {product.alt}
                           </p>
                        </CardContent>
                     </Card>
                  </Link>
               </SwiperSlide>
            ))}
         </Swiper>
      </section>
   );
};

export default Products;
