const About = () => {
   return (
      <section
         id="about"
         className="w-full py-8 px-4 sm:px-8 flex flex-col bg-[#181818] text-white text-center"
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

         <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.7653717852686!2d51.340544699999995!3d35.707391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8dfe0742eaf5b3%3A0xf4e5c1d9d07233bd!2z2KfYs9iq2KfZhiDYqtmH2LHYp9mG2Iwg2KrZh9ix2KfZhtiMINio2YTZiNin2LEg2LnYqNin2LMg2Kfaqdio2LHbjA!5e0!3m2!1sfa!2s!4v1740474918306!5m2!1sfa!2s"
            className="w-full mt-6"
            allowFullScreen
            height="300"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
         ></iframe>
      </section>
   );
};
export default About;
