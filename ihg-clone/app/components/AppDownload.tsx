export default function AppDownload() {
  return (
    <section className="bg-[#1a2744] py-12 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Phone mockup */}
          <div className="flex-shrink-0">
            <div className="relative w-32 h-56 bg-gray-900 rounded-2xl border-4 border-gray-700 shadow-2xl flex items-center justify-center">
              <div className="w-20 h-40 bg-gradient-to-b from-blue-900 to-blue-700 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-white text-xl font-bold">IHG</div>
                  <div className="text-blue-300 text-[8px]">Hotels &amp; Resorts</div>
                </div>
              </div>
              {/* Notch */}
              <div className="absolute top-2 w-12 h-1.5 bg-gray-700 rounded-full" />
            </div>
          </div>

          {/* Diamond Elite card */}
          <div className="flex-shrink-0 hidden md:block">
            <div className="w-44 h-28 rounded-lg shadow-2xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #1a2744 0%, #2a3a5c 50%, #3a4a6c 100%)", border: "1px solid rgba(255,255,255,0.2)" }}
            >
              <div className="text-center">
                <div className="text-xs text-gray-300 uppercase tracking-widest">IHG One Rewards</div>
                <div className="text-white text-sm font-bold mt-1">Diamond Elite</div>
                <div className="text-[10px] text-gray-400 mt-1">Member Benefits</div>
              </div>
            </div>
          </div>

          {/* QR code placeholder */}
          <div className="hidden md:block">
            <div className="w-24 h-24 bg-white flex items-center justify-center">
              <div className="w-20 h-20 bg-black/80 grid grid-cols-8 gap-px p-1">
                {Array.from({length: 64}, (_, i) => (
                  <div key={i} className={`${Math.random() > 0.5 ? "bg-black" : "bg-white"} rounded-px`} />
                ))}
              </div>
            </div>
            <p className="text-white/60 text-xs mt-1 text-center">Scan to download</p>
          </div>

          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-3">Download easier travel</h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-5 max-w-md">
              With an award winning app, book direct at 1000+ global destinations and tap your way to so much more.
            </p>
            <button className="border-2 border-white text-white px-8 py-2.5 text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-gray-900 transition-colors">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
