import Navbar from "./components/Navbar";
import ProductInfo from "./components/ProductInfo";
import ShoeShowcase from "./components/ShoeShowcase";
import Sidebar from "./components/Sidebar";
import { navLinks, product } from "@/data/product";

export default function Home() {
  return (
    <div className="flex h-dvh flex-1 overflow-hidden">
      <Sidebar />
      <main className="hero-bg relative flex min-w-0 flex-1 flex-col overflow-hidden">
        <Navbar links={navLinks} />
        <div className="relative flex min-h-0 flex-1 flex-col lg:block">
          <div className="relative order-1 min-h-0 flex-1 lg:absolute lg:inset-0">
            <ShoeShowcase product={product} />
          </div>
          <div className="relative z-10 order-2 px-6 pb-6 pt-2 sm:px-10 sm:pb-8 lg:absolute lg:left-[52px] lg:top-[8%] lg:p-0">
            <ProductInfo product={product} />
          </div>
        </div>
      </main>
    </div>
  );
}
