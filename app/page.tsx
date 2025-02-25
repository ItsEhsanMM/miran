import Nav from "./_components/Nav";
import Home from "./_components/Home";
import Products from "./_components/Products";
import Footer from "./_components/Footer";
import About from "./_components/About";

export default function Page() {
   return (
      <main className="flex flex-col space-y-10">
         <Nav />
         <Home />
         <Products />
         <About />
         <Footer />
      </main>
   );
}
