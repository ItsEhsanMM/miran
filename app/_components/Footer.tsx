const Footer = () => {
   return (
      <footer
         id="contact"
         className="w-full bg-[#181818] py-6 mt-16 text-center"
      >
         <div className="max-w-4xl mx-auto text-white space-y-4">
            <p className="text-gray-400 text-sm">
               &copy; {new Date().getFullYear()} All rights reserved.
            </p>
         </div>
      </footer>
   );
};
export default Footer;
