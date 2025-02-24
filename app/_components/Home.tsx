"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";

const Home = () => {
   return (
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
   );
};
export default Home;
