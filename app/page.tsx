"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Virtual } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Menu, Phone, X } from "lucide-react";
import "swiper/css/navigation";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const images = [
   "/assets/10w40.jpeg",
   "/assets/15w40.jpeg",
   "/assets/20w50.jpeg",
   "/assets/cd50.jpeg",
   "/assets/cd60.jpeg",
   "/assets/ch-4.jpeg",
   "/assets/hidraulic.jpeg",
];

export default function Home() {
   const [menuOpen, setMenuOpen] = useState(false);

   return (
      <main className="flex flex-col space-y-10">
         {/* Navigation Bar */}
         <nav className="w-full bg-[#181818] py-4 px-6 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
            <h1 className="text-xl playwrite-it-moderna text-foreground font-bold">
               Miran Oil
            </h1>
            <div className="hidden md:flex space-x-6">
               <Link
                  href="#home"
                  className="text-white hover:text-[#e7c87f]"
               >
                  Home
               </Link>
               <Link
                  href="#products"
                  className="text-white hover:text-[#e7c87f]"
               >
                  Products
               </Link>
               <Link
                  href="#contact"
                  className="text-white hover:text-[#e7c87f]"
               >
                  Contact
               </Link>
            </div>
            <button
               className="md:hidden"
               onClick={() => setMenuOpen(!menuOpen)}
            >
               {menuOpen ? (
                  <X className="w-6 h-6 text-white" />
               ) : (
                  <Menu className="w-6 h-6 text-white" />
               )}
            </button>
            <AnimatePresence>
               {menuOpen && (
                  <motion.div
                     initial={{ opacity: 0, y: -20 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: -20 }}
                     transition={{ duration: 0.3 }}
                     className="absolute top-14 right-6 bg-[#181818] shadow-lg rounded-lg p-4 flex flex-col space-y-4 md:hidden"
                  >
                     <Link
                        href="#hero"
                        className="text-white hover:text-[#e7c87f]"
                        onClick={() => setMenuOpen(false)}
                     >
                        Home
                     </Link>
                     <Link
                        href="#products"
                        className="text-white hover:text-[#e7c87f]"
                        onClick={() => setMenuOpen(false)}
                     >
                        Products
                     </Link>
                     <Link
                        href="#contact"
                        className="text-white hover:text-[#e7c87f]"
                        onClick={() => setMenuOpen(false)}
                     >
                        Contact
                     </Link>
                  </motion.div>
               )}
            </AnimatePresence>
         </nav>
         <section
            id="home"
            className="flex items-center justify-center min-h-[70dvh] p-4"
         >
            <motion.div
               id="home"
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.5 }}
               className="w-full h-[80vh] mt-16 px-4 sm:px-8"
            >
               <Card className="w-full bg-[url('/assets/ck-4.jpeg')] border-none h-full rounded-3xl shadow-[0_10px_30px_rgba(231,200,127,0.3)] bg-cover bg-center relative overflow-hidden flex items-center justify-center p-4 sm:p-8">
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-lg rounded-3xl flex flex-col items-center justify-center text-center p-8 space-y-6">
                     <h1 className="text-[clamp(0.5rem,10vw,4rem)] font-extrabold text-[#e7c87f] drop-shadow-lg">
                        Explore Your Dream
                     </h1>
                     <p className="text-lg text-center text-gray-300 max-w-3xl">
                        Unlock superior engine performance with our high-quality
                        motor oil. Designed for maximum protection, reduced
                        friction, and improved efficiency, our oil ensures your
                        vehicle runs at its best in all conditions.
                     </p>
                     <Button
                        size="lg"
                        className="bg-foreground text-black font-bold hover:bg-[#d6b66f] transition-transform transform hover:scale-105"
                     >
                        <Link href="#products">View Product</Link>
                     </Button>
                  </div>
               </Card>
            </motion.div>
         </section>
         {/* Products Section */}
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
               modules={[Navigation, EffectCoverflow, Virtual]}
               className="size-full"
            >
               {images.map((src, index) => (
                  <SwiperSlide
                     key={index}
                     className="flex justify-center"
                  >
                     <Image
                        width={512}
                        height={512}
                        src={src}
                        alt={`Product ${index + 1}`}
                        loading="lazy"
                        className="w-[80rem] max-h-96  object-cover rounded-xl shadow-lg"
                     />
                  </SwiperSlide>
               ))}
            </Swiper>
         </section>

         {/* Footer Section */}
         <footer
            id="contact"
            className="w-full bg-[#181818] py-6 mt-16 text-center"
         >
            <div className="max-w-4xl mx-auto text-white space-y-4">
               <h2 className="text-2xl font-bold">Contact Us</h2>
               <div className="flex items-center justify-center space-x-3 text-lg font-medium">
                  <Phone className="w-6 h-6 text-[#e7c87f]" />
                  <a
                     href="tel:+971504982699"
                     className="text-white hover:text-[#e7c87f]"
                  >
                     +971504982699
                  </a>
               </div>
               <p className="text-gray-400 text-sm">
                  &copy; {new Date().getFullYear()} All rights reserved.
               </p>
            </div>
         </footer>
      </main>
   );
}
