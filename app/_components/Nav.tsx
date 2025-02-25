"use client";
import { AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const Nav = () => {
   const [menuOpen, setMenuOpen] = useState(false);

   return (
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
               href="#about"
               className="text-white hover:text-[#e7c87f]"
            >
               About
            </Link>
            <Link
               href="#faq"
               className="text-white hover:text-[#e7c87f]"
            >
               FAQ
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
                     href="#about"
                     className="text-white hover:text-[#e7c87f]"
                     onClick={() => setMenuOpen(false)}
                  >
                     About
                  </Link>
                  <Link
                     href="#faq"
                     className="text-white hover:text-[#e7c87f]"
                     onClick={() => setMenuOpen(false)}
                  >
                     FAQ
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
   );
};
export default Nav;
