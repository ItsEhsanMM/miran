"use client";

import { motion } from "framer-motion";

const Home = () => {
   return (
      <section className="flex flex-col items-center justify-center space-y-6">
         <motion.section
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full px-4 h-screen sm:px-8 relative"
         >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
            <div
               id="home"
               className="flex flex-col bg-cover bg-center bg-[url(/assets/background.png)] h-full  items-center justify-center w-full text-center pt-8 "
            >
               <div className="relative w-full overflow-hidden">
                  <div className="absolute inset-0 " />
                  <div className="relative flex flex-col items-center justify-center text-center p-8 space-y-6">
                     <h1 className="text-[clamp(0.5rem,10vw,2rem)] font-medium drop-shadow-lg">
                        With Miran, Your Engine Is Always Ready to Perform.
                     </h1>
                     <h2 className="text-[clamp(0.5rem,15vw,4rem)] font-bold text-foreground">
                        Miran Oil
                     </h2>
                  </div>
               </div>
            </div>
         </motion.section>
         <p className="text-lg text-justify px-4 text-gray-300 max-w-3xl">
            Unlock superior engine performance with our{" "}
            <span className="font-extrabold">high-quality motor oil</span>.
            Designed for maximum protection, reduced friction, and improved
            efficiency, our
            <span className="font-extrabold"> oil</span> ensures your vehicle
            runs at its best in all conditions.
         </p>
      </section>
   );
};

export default Home;
