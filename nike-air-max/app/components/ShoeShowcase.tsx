import Image from "next/image";
import { existsSync } from "node:fs";
import { join } from "node:path";
import type { Product } from "@/data/product";

interface ShoeShowcaseProps {
  product: Product;
}

// Static class strings (Tailwind can't see dynamic ones). Base = mobile, lg: = 1494x960 desktop design.
const circles = [
  "left-[52%] top-[24%] lg:left-[66.5%] lg:top-[32%]", // top
  "left-[24%] top-[72%] lg:left-[48%] lg:top-[80.7%]", // bottom-left
  "left-[90%] top-[56%] lg:left-[91%] lg:top-[68.5%]", // right
];

export default function ShoeShowcase({ product }: ShoeShowcaseProps) {
  const hasImage = existsSync(join(process.cwd(), "public", product.image));

  return (
    <div className="absolute inset-0">
      {circles.map((pos) => (
        <span
          key={pos}
          aria-hidden="true"
          className={`absolute aspect-square w-[30%] lg:w-[18.5%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-gradient-to-br from-white/20 via-white/5 to-white/0 shadow-[inset_0_1px_1px_rgb(255_255_255/0.35),inset_0_-12px_24px_rgb(255_255_255/0.04),0_8px_32px_rgb(0_0_0/0.35)] backdrop-blur-md ${pos}`}
        />
      ))}
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-[86%] h-6 w-[60%] lg:left-[68.5%] lg:top-[88%] lg:h-8 lg:w-[40%] -translate-x-1/2 rounded-full bg-black/80 blur-2xl"
      />
      {hasImage ? (
        <Image
          src={product.image}
          alt="Nike Air Max 90 sneaker"
          width={1600}
          height={1200}
          priority
          className="absolute left-1/2 top-[52%] h-auto w-[min(92%,58dvh)] lg:left-[68.5%] lg:top-[60.4%] lg:w-[min(56%,86vh)] max-w-none -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_24px_30px_rgb(0_0_0/0.5)]"
        />
      ) : (
        <div className="absolute left-1/2 top-[55%] flex aspect-[4/3] w-[92%] lg:left-[68.5%] lg:top-[60.4%] lg:w-[56%] -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-dashed border-white/40 text-center text-sm text-white/60">
          Shoe image missing: add {product.image}
        </div>
      )}
    </div>
  );
}
