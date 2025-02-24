import { Phone } from "lucide-react";

const Footer = () => {
   return (
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
   );
};
export default Footer;
