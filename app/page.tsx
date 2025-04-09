import About from "./_components/About";
import Home from "./_components/Home";
import Products from "./_components/Products";

export default async function Page() {
   const products = await fetch(
      `${process.env.NEXT_PUBLIC_URL_PREFIX}/products`
   ).then((res) => res.json());

   return (
      <main className="flex flex-col space-y-10">
         <Home />
         <Products products={products} />
         <About />
      </main>
   );
}
