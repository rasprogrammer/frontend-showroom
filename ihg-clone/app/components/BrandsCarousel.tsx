"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const brandSlides = [
  {
    name: "Garner™ Hotels",
    tagline: "BY IHG",
    desc: "Garner™ Hotels provide a relaxed welcome, refreshing moments across the guest experience and a flexible, purposeful design that inspires IHG teams are defined to support our guests, wherever their stay.",
    bg: "linear-gradient(135deg, #2d5016 0%, #4a7a28 40%, #6aaa3a 80%, #8cc850 100%)",
    accentColor: "#8cc850"
  },
  {
    name: "Holiday Inn Express®",
    tagline: "BY IHG",
    desc: "Smart stays for smart travellers. Clean, comfortable rooms and everything you need, nothing you don't. The perfect base for your journey.",
    bg: "linear-gradient(135deg, #1a3a6b 0%, #2856a0 50%, #3a6ec8 100%)",
    accentColor: "#3a6ec8"
  },
  {
    name: "Kimpton® Hotels",
    tagline: "BY IHG",
    desc: "Where boutique design meets heartfelt service. Every Kimpton hotel has its own unique character and soul, making every stay extraordinary.",
    bg: "linear-gradient(135deg, #4a1a2a 0%, #7a2840 50%, #a83858 100%)",
    accentColor: "#a83858"
  }
];

export default function BrandsCarousel() {
  const [active, setActive] = useState(0);
  const slide = brandSlides[active];

  return (
    <section className="bg-gray-50 py-14 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          A world of choice for every way you travel
        </h2>

        <div className="relative rounded-sm overflow-hidden shadow-lg">
          {/* Main slide */}
          <div
            className="h-80 md:h-96 flex items-end relative transition-all duration-500"
            style={{ background: slide.bg }}
          >
            {/* Decorative hotel silhouette */}
            <div className="absolute inset-0 opacity-15">
              <div className="absolute bottom-0 left-1/4 w-64 h-48 border-4 border-white rounded-t-sm" />
              <div className="absolute bottom-0 left-1/4 w-16 h-20 border-4 border-white" style={{marginLeft: '96px'}} />
            </div>

            {/* Brand name overlay */}
            <div className="absolute top-8 left-8">
              <p className="text-white/80 text-xs font-bold tracking-widest uppercase">{slide.tagline}</p>
              <h3 className="text-white text-3xl md:text-4xl font-bold mt-1">{slide.name}</h3>
            </div>

            {/* Previous/Next */}
            <button
              onClick={() => setActive((active - 1 + brandSlides.length) % brandSlides.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => setActive((active + 1) % brandSlides.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
            >
              <ChevronRight size={20} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {brandSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === active ? "bg-white w-6" : "bg-white/50"}`}
                />
              ))}
            </div>
          </div>

          {/* Description bar */}
          <div className="bg-white p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-gray-800 mb-1">{slide.name}</p>
              <p className="text-sm text-gray-600 leading-relaxed max-w-2xl">{slide.desc}</p>
            </div>
            <button className="bg-[#C8102E] text-white px-8 py-2.5 text-sm font-bold uppercase tracking-wider hover:bg-red-800 whitespace-nowrap">
              EXPLORE &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
