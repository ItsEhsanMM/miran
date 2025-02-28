import Divider from "@/components/Divider";
import About from "../_components/About";
import TeamImage from "../_components/Team-Image";

const Page = () => {
   return (
      <>
         <div className="mt-20 flex flex-col px-4 space-y-4">
            <About />
            <Divider />
            <div className="text-center space-y-8">
               <h1>Team Members</h1>
               <TeamImage
                  alt="Abbas Hayali"
                  role="Founder"
                  src="/assets/abbas-hayali.png"
               />
            </div>
         </div>
         <Divider />
      </>
   );
};
export default Page;
