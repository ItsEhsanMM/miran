"use client";

import { motion } from "framer-motion";

const Home = () => {
   return (
      <section
         id="home"
         className="flex flex-col  items-center justify-center text-center pt-8 space-y-6"
      >
         <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full px-4 sm:px-8"
         >
            {/* Wrapper to ensure backdrop blur works */}
            <div className="relative w-full rounded-3xl overflow-hidden">
               {/* Background Image */}
               <div className="absolute inset-0 bg-[url('/assets/ck-4.jpeg')] bg-cover bg-center" />
               {/* Overlay with Blur */}
               <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
               {/* Content */}
               <div className="relative flex flex-col items-center justify-center text-center p-8 space-y-6">
                  <h1 className="text-[clamp(0.5rem,8vw,4rem)] font-medium drop-shadow-lg">
                     Welcome
                  </h1>
                  <h2 className="text-5xl font-bold text-foreground">
                     Miran Oil
                  </h2>
               </div>
            </div>
         </motion.div>
         <p className="text-lg text-center text-gray-300 max-w-3xl">
            Unlock superior engine performance with our high-quality motor oil.
            Designed for maximum protection, reduced friction, and improved
            efficiency, our oil ensures your vehicle runs at its best in all
            conditions.
         </p>
      </section>
   );
};

export default Home;
