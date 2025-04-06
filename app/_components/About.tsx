import { Button } from "@/components/ui/button";
import TeamMembers from "./TeamMembers";
import Link from "next/link";
import Divider from "@/components/Divider";

const About = async () => {
   return (
      <section
         id="about"
         className="w-full py-8 px-4 sm:px-8 flex space-y-4 flex-col bg-[#181818] text-white text-center"
      >
         <div className="flex flex-col w-full">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#e7c87f] mb-6">
               About Us – Miran
            </h2>
            <p className="text-gray-300 text-lg text-justify px-4 mx-auto mb-4">
               If you believe a great lubricant is the heartbeat of a healthy
               engine, then this story is for you. Miran is more than just a
               name, it’s...
            </p>
            <Button className="text-foreground text-lg underline hover:text-white">
               <Link
                  className="w-full"
                  href="about-us"
               >
                  Read More...
               </Link>
            </Button>
         </div>
         <Divider />
      </section>
   );
};
export default About;
