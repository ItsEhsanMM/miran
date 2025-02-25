import { MapPin, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
   return (
      <footer
         id="contact"
         className="w-full bg-[#181818] text-center flex flex-col space-y-10 px-4"
      >
         <div className="flex items-center">
            <Image
               width={128}
               height={128}
               src={"/assets/icon.png"}
               alt="Miran Oil"
            />
            <p>
               <span className="font-extrabold">Miran Oil</span> provides
               premium, sustainable oil solutions tailored to meet your needs
               with unmatched <span className="font-extrabold">quality</span>{" "}
               and <span className="font-extrabold">reliability</span>.
            </p>
         </div>
         <h1>Contact Info</h1>
         <div className="grid grid-cols-1 sm:grid-cols-2 sm:place-items-center gap-6 mt-6">
            <Link
               href={"geo:35.707526, 51.340588"}
               target="_blank"
               rel="noopener noreferrer"
               className=" flex  space-x-3"
            >
               <MapPin className="w-6 h-6 text-[#e7c87f]" />
               <p className="text-gray-300 hover:text-[#e7c87f]">
                  Unit 2, No. 19, Akbari Street, Tarasht, Tehran, Iran
               </p>
            </Link>
            <div className="flex items-start w-full space-x-3">
               <Phone className="w-6 h-6 text-[#e7c87f]" />
               <Link
                  href="tel:02166012941"
                  className="text-gray-300 hover:text-[#e7c87f]"
               >
                  021 - 66012941
               </Link>
            </div>
            <div className="flex space-x-3">
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
         <div className="max-w-4xl mx-auto text-white space-y-4">
            <p className="text-gray-400 text-sm">
               &copy; {new Date().getFullYear()} All rights reserved.
            </p>
         </div>
      </footer>
   );
};
export default Footer;
