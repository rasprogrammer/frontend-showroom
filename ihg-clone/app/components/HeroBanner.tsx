"use client";

export default function HeroBanner() {
  return (
    <section className="relative w-full h-[420px] md:h-[500px] overflow-hidden">
      {/* Background gradient simulating a beach/tropical scene */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #1a6b8a 0%, #2196b8 25%, #58c8e8 50%, #7fd8e8 65%, #a8e6d0 80%, #c8f0e8 100%)"
        }}
      />
      {/* Decorative waves / scene elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: "linear-gradient(to top, rgba(255,255,255,0.15), transparent)"
        }}
      />
      {/* Fake beach sand bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16"
        style={{
          background: "linear-gradient(to top, #e8d5a3, #f0e4b8, transparent)"
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 max-w-2xl">
        <p className="text-white text-xs font-bold uppercase tracking-widest mb-2 opacity-90">
          READY TO ROAM?
        </p>
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 leading-tight drop-shadow-lg">
          Ready to roam?
        </h1>
        <p className="text-white text-sm md:text-base mb-6 opacity-90 max-w-md leading-relaxed">
          Enjoy up to 20% off your stay, plus 10% extra on the app.
        </p>
        <div>
          <button className="bg-[#C8102E] text-white px-8 py-3 text-sm font-bold uppercase tracking-wider hover:bg-red-800 transition-colors shadow-lg">
            Know more
          </button>
        </div>
      </div>

      {/* Side navigation dots */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
        {[0, 1, 2, 3].map(i => (
          <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? "bg-[#C8102E]" : "bg-white/60"}`} />
        ))}
      </div>
    </section>
  );
}
