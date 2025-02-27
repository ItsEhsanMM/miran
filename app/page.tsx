import Home from "./_components/Home";
import Products from "./_components/Products";
import About from "./_components/About";

export default async function Page() {
   return (
      <main className="flex flex-col space-y-10">
         <Home />
         <Products />
         <About />
      </main>
   );
}
