import Link from "next/link";

export default function Custom404() {
   return (
      <div
         className="flex flex-col items-center justify-center min-h-screen"
         style={{ backgroundColor: "#121212", color: "#fff" }}
      >
         <div className="text-center">
            <h1 className="text-9xl font-bold text-[#e7c87f]">404</h1>
            <p className="text-2xl mt-4">Oops! Page not found.</p>
            <p className="text-lg mt-2">
               The page you are looking for might have been removed or is
               temporarily unavailable.
            </p>
            <Link
               className="mt-6 inline-block px-6 py-3 bg-[#e7c87f] text-[#121212] rounded-lg hover:bg-[#d4b36a] transition-colors duration-300"
               href="/"
            >
               Go Back Home
            </Link>
         </div>
      </div>
   );
}
