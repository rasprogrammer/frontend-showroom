import type { Product } from "@/data/product";
import AddToCartButton from "./AddToCartButton";

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
      <h1 className="text-[clamp(40px,min(12vw,8dvh),64px)] lg:text-[clamp(44px,min(7vw,12vh),120px)] font-black italic leading-none tracking-[-0.02em]">
        {product.name}
      </h1>
      <p className="mt-2 text-base font-light uppercase sm:text-xl tracking-[0.25em] lg:mt-[1.5vh] lg:text-[clamp(18px,3.4vh,34px)]">
        {product.model}
      </p>
      <p className="mt-2 text-3xl font-semibold sm:text-4xl lg:mt-[5vh] lg:text-[clamp(36px,7vh,72px)] lg:leading-none">
        {product.price}
      </p>
      <p className="mt-2 whitespace-pre-line text-sm sm:text-base font-light italic leading-relaxed tracking-[0.05em] lg:mt-[3vh] lg:text-[clamp(15px,2.6vh,26px)]">
        {product.description}
      </p>
      <div className="mt-3 w-full lg:mt-[3vh] lg:w-auto">
        <AddToCartButton />
      </div>
    </div>
  );
}
