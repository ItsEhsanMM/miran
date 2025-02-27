import Home from "./_components/Home";
import Products from "./_components/Products";
import About from "./_components/About";
import FAQ from "./_components/FAQ";

export default async function Page() {
   return (
      <main className="flex flex-col space-y-10">
         <Home />
         <Products />
         <About />
         <FAQ />
      </main>
   );
}
