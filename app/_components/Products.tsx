"use client";

import Image from "next/image";
import { EffectCoverflow, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const images = [
   {
      src: "/assets/10w40.jpeg",
      alt: "CI-4 10W40",
   },
   {
      src: "/assets/15w40.jpeg",
      alt: "15W40 | CI-4 PLUS",
   },
   {
      src: "/assets/20w50.jpeg",
      alt: "20W50 | CH-4",
   },
   {
      src: "/assets/cd50.jpeg",
      alt: "CD-50",
   },
   {
      src: "/assets/cd60.jpeg",
      alt: "CD-60",
   },
   {
      src: "/assets/ch-4.jpeg",
      alt: "CH-4 15W40",
   },
   {
      src: "/assets/hidraulic.jpeg",
      alt: "Hidraulic Oil | ISO VG 68HL",
   },
];

const Products = () => {
   return (
      <section
         id="products"
         className="w-full text-center "
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
            {images.map((src, index) => (
               <SwiperSlide
                  key={index}
                  className="flex justify-center"
               >
                  <Card className="border-none flex flex-col items-center justify-center">
                     <CardHeader>
                        <Image
                           width={512}
                           height={512}
                           src={src.src}
                           alt={`Product ${index + 1}`}
                           loading="lazy"
                           className="w-[80rem] max-h-96  object-cover rounded-xl shadow-lg"
                        />
                     </CardHeader>
                     <CardContent className="flex items-center justify-center rounded-lg border-none text-xl font-bold">
                        <p className="size-full flex items-center justify-center">
                           {src.alt}
                        </p>
                     </CardContent>
                  </Card>
               </SwiperSlide>
            ))}
         </Swiper>
      </section>
   );
};
export default Products;
