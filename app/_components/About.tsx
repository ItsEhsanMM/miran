import { MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";

const About = () => {
   return (
      <section
         id="about"
         className="w-full py-16 px-4 sm:px-8 bg-[#181818] text-white text-center"
      >
         <h2 className="text-3xl sm:text-4xl font-bold text-[#e7c87f] mb-6">
            About Us
         </h2>
         <p className="text-gray-300 max-w-2xl mx-auto mb-4">
            We are dedicated to providing high-quality motor oil that ensures
            the best performance for your engine. With years of expertise in
            lubricant technology, we guarantee premium protection and
            efficiency.
         </p>
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            <div className="flex items-center space-x-3">
               <MapPin className="w-6 h-6 text-[#e7c87f]" />
               <p className="text-gray-300">
                  Tehran, Iran, Tarasht, Akbari St, No. 19, Unit 2
               </p>
            </div>
            <div className="flex items-center space-x-3">
               <Phone className="w-6 h-6 text-[#e7c87f]" />
               <Link
                  href="tel:02166012941"
                  className="text-gray-300 hover:text-[#e7c87f]"
               >
                  021 - 66012941
               </Link>
            </div>
            <div className="flex items-center space-x-3">
               <Phone className="w-6 h-6 text-[#e7c87f]" />
               <Link
                  href="tel:+971504982699"
                  className="text-gray-300 hover:text-[#e7c87f]"
               >
                  +971504982699
               </Link>
            </div>
            <div className="flex items-center space-x-3">
               <MessageCircle className="w-6 h-6 text-[#e7c87f]" />
               <Link
                  href="https://wa.me/971504982699"
                  className="text-gray-300 hover:text-[#e7c87f]"
               >
                  Message us on WhatsApp
               </Link>
            </div>
         </div>
      </section>
   );
};
export default About;
