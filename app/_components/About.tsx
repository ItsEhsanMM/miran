import TeamMembers from "./TeamMembers";

const About = () => {
   return (
      <section
         id="about"
         className="w-full py-8 px-4 sm:px-8 flex space-y-4 flex-col bg-[#181818] text-white text-center"
      >
         <div className="flex flex-col w-full">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#e7c87f] mb-6">
               About Us – Miran Lubricants
            </h2>
            <p className="text-gray-300 text-lg text-justify px-4 mx-auto mb-4">
               With years of experience in manufacturing and developing advanced
               lubricants, Miran is recognized as one of the leading producers
               of high-performance engine and industrial oils. By utilizing
               cutting-edge technology, premium raw materials, and stringent
               quality control processes, we ensure that our products deliver
               the highest levels of performance and durability for modern
               engines and industrial equipment. With a strong presence in
               international markets and products that meet global standards,
               Miran has become a trusted and reputable name in the lubricant
               industry. We place great emphasis on innovation and research &
               development (R&D) to continuously enhance and optimize our
               formulations for superior efficiency and reliability.
            </p>
         </div>
         <div className="flex flex-col">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#e7c87f] mb-6">
               Why Choose Miran?
            </h2>
            <ol className="flex text-lg flex-col text-start space-y-5 list-disc marker:font-bold px-6">
               <li className="pl-4 leading-8 -indent-3">
                  Years of expertise in manufacturing high-performance
                  lubricants
               </li>
               <li className="pl-4 leading-8 -indent-3">
                  Developed according to the latest global standards
               </li>
               <li className="pl-4 leading-8 -indent-3">
                  Innovative formulations with advanced additives for enhanced
                  efficiency, reduced wear, and maximum engine protection
               </li>
               <li className="pl-4 leading-8 -indent-3">
                  Reliable performance in extreme conditions – suitable for high
                  temperatures, heavy loads, and extended operational hours
               </li>
               <li className="pl-4 leading-8 -indent-3">
                  A trusted supplier in international markets with a proven
                  track record of successful exports
               </li>
               <li className="pl-4 leading-8 -indent-3">
                  Commitment to quality, transparency, and expert technical
                  support
               </li>
            </ol>
         </div>
         <p className="text-gray-300 text-lg text-justify px-4 mx-auto mb-4">
            At Miran, quality is not just a promise—it is the foundation of
            everything we create. Our mission is to provide the best lubrication
            solutions for industries worldwide.
         </p>
         <p className="text-gray-300 text-lg text-justify px-4 mx-auto mb-4">
            Miran— Engineered for Excellence.
         </p>
         <TeamMembers />
      </section>
   );
};
export default About;
