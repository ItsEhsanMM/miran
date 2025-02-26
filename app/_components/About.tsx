const About = () => {
   return (
      <section
         id="about"
         className="w-full py-8 px-4 sm:px-8 flex flex-col bg-[#181818] text-white text-center"
      >
         <div className="flex flex-col w-full">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#e7c87f] mb-6">
               About Us
            </h2>
            <p className="text-gray-300 text-lg text-justify px-4 mx-auto mb-4">
               At Miran, we are committed to producing and delivering
               high-quality motor oils that meet international standards. We
               believe that superior engine performance, extended component
               lifespan, and reduced maintenance costs are only achievable with
               advanced and well-engineered lubricants. Utilizing cutting-edge
               formulations, premium raw materials, and the latest technologies,
               Miran products are designed to deliver optimal and consistent
               performance, even under the most demanding conditions. With a
               strong focus on research and development (R&D), we continuously
               innovate and enhance our motor oil formulations to meet the
               diverse needs of our customers. Our mission is to be your first
               choice in the world of lubricants by prioritizing transparency,
               quality, and innovation.
            </p>
         </div>
         <div className="flex flex-col">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#e7c87f] mb-6">
               Why Choose Miran?
            </h2>
            <ol className="flex text-lg flex-col text-start space-y-5 list-disc marker:font-bold px-6">
               <li className="pl-4 leading-8 -indent-3">
                  Guaranteed Quality: Manufactured to international standards
                  with rigorous quality control testing
               </li>
               <li className="pl-4 leading-8 -indent-3">
                  Advanced Formulations: Enhanced with specialized additives to
                  reduce wear, improve performance, and extend engine life
               </li>
               <li className="pl-4 leading-8 -indent-3">
                  Durability in Harsh Conditions: Suitable for high
                  temperatures, urban traffic, and long-distance driving
               </li>
               <li className="pl-4 leading-8 -indent-3">
                  Customer Commitment: Providing expert consultation, technical
                  support, and guaranteed product authenticity At Miran, we
                  don’t just offer a product—we build lasting trust with our
                  customers.
               </li>
            </ol>
         </div>
      </section>
   );
};
export default About;
