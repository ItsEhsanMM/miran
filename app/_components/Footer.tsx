import { MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
   return (
      <footer
         id="contact"
         className="w-full bg-[#181818] text-center flex flex-col space-y-10 px-4"
      >
         <div className="flex items-center justify-center">
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
         <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.7653717852686!2d51.340544699999995!3d35.707391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8dfe0742eaf5b3%3A0xf4e5c1d9d07233bd!2z2KfYs9iq2KfZhiDYqtmH2LHYp9mG2Iwg2KrZh9ix2KfZhtiMINio2YTZiNin2LEg2LnYqNin2LMg2Kfaqdio2LHbjA!5e0!3m2!1sfa!2s!4v1740474918306!5m2!1sfa!2s"
            className="w-full mt-6"
            allowFullScreen
            height="300"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
         ></iframe>
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            <Link
               href={"geo:35.707526, 51.340588"}
               target="_blank"
               rel="noopener noreferrer"
               className="flex space-x-3"
            >
               <MapPin className="w-6 h-6 text-[#e7c87f]" />
               <p className="text-gray-300 hover:text-[#e7c87f]">
                  Unit 2, No. 19, Akbari Street, Tarasht, Tehran, Iran
               </p>
            </Link>
            <div className="flex items-start space-x-3">
               <MdOutlineEmail className="w-6 h-6 text-[#e7c87f]" />
               <Link
                  href="mailto:info@miranoil.com"
                  className="text-gray-300 hover:text-[#e7c87f]"
               >
                  info@miranoil.com
               </Link>
            </div>
            <div className="flex items-start space-x-3">
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
               <FaWhatsapp className="w-6 h-6 text-[#e7c87f]" />
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
