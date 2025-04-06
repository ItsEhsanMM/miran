import Link from "next/link";
import TeamMembers from "../_components/TeamMembers";

export const dynamic = "force-dynamic";

const page = async () => {
   const teamData = await fetch(`${process.env.URL_PREFIX}/team`, {}).then(
      (res) => res.json()
   );

   return (
      <div className="mt-20 flex flex-col space-y-8 px-8 mb-4">
         <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#e7c87f] mb-6">
               About Us – Miran
            </h2>
            <p className="text-gray-300 text-lg text-justify px-4 mx-auto mb-4">
               Miran is more than just a name — it’s the continuation of a
               legacy. Decades ago, in a small but determined workshop, our
               father believed that engine durability starts with oil that’s
               crafted with care and precision. Today, we carry this legacy
               forward—blending tradition with advanced technology, modern
               engineering, and a skilled team — to make Miran one of the
               leading names in high-performance lubricants for automotive and
               industrial use.
            </p>
         </div>

         <div className="flex flex-col space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#e7c87f] mb-6">
               Why Choose Miran?
            </h2>
            <ol className="flex text-lg flex-col text-start space-y-5 list-disc marker:font-bold px-6">
               <li className="pl-4 leading-8 -indent-3">
                  Cutting-edge technology in lubricant production
               </li>
               <li className="pl-4 leading-8 -indent-3">
                  Multi-stage, rigorous quality control processes{" "}
               </li>
               <li className="pl-4 leading-8 -indent-3">
                  Innovative additives for reduced friction and wear{" "}
               </li>
               <li className="pl-4 leading-8 -indent-3">
                  Proprietary formulations with exceptional thermal stability{" "}
               </li>
               <li className="pl-4 leading-8 -indent-3">
                  Fully compliant with global standards{" "}
               </li>
               <li className="pl-4 leading-8 -indent-3">
                  Proven success in international markets{" "}
               </li>
            </ol>
         </div>
         <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#e7c87f] mb-6">
               The Power of Thermal Stability
            </h2>
            <p className="text-gray-300 text-lg text-justify px-4 mx-auto mb-4">
               In extreme heat, heavy traffic, or high-load conditions, ordinary
               oils break down. But Miran’s proprietary formulations are
               engineered for high thermal stability, ensuring consistent
               performance and protection — no matter how tough the conditions.
               This key advantage extends engine life and ensures peace of mind
               for professionals and everyday drivers alike.{" "}
            </p>
         </div>

         <p className="text-gray-300 text-xl text-justify px-4 mx-auto mb-4">
            Miran — Engineered for Excellence.
         </p>
         <p className="w-full text-center">
            Explore our full range of products on the{" "}
            <Link
               className="underline hover:text-white text-foreground"
               href={"/#products"}
            >
               Products Page
            </Link>
         </p>

         <TeamMembers values={teamData.teamMembers} />
      </div>
   );
};
export default page;
