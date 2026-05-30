const offers = [
  {
    title: "Ready to roam?",
    desc: "Save up to 25%, with breakfast included! Plus, members save an extra 10% when booking on the app. Valid across India, South Asia, the Middle East & Africa.",
    bg: "linear-gradient(135deg, #1a6b8a 0%, #2196b8 50%, #58c8e8 100%)",
    tag: "Summer Deal"
  },
  {
    title: "One more night",
    desc: "Stay 3, pay 2 on Suites & Premium Rooms in the Middle East, Europe, India & Africa. Stay longer for more nights on us. Valid for stays until 30 September 2025.",
    bg: "linear-gradient(135deg, #2c3e50 0%, #34495e 50%, #4a6741 100%)",
    tag: "Limited Time"
  },
  {
    title: "Discover the best of India",
    desc: "Explore diverse experiences with trusted stays at 50+ IHG Hotels & Resorts. Choose your next destination and pick an offer that works best for you.",
    bg: "linear-gradient(135deg, #b8520a 0%, #e67e22 50%, #f39c12 100%)",
    tag: "Explore India"
  }
];

export default function OffersSection() {
  return (
    <section className="bg-white py-14 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Offers for every way you travel
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {offers.map((offer, i) => (
            <div key={i} className="group overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              {/* Image placeholder */}
              <div
                className="h-44 relative overflow-hidden"
                style={{ background: offer.bg }}
              >
                <div className="absolute top-3 left-3">
                  <span className="bg-white/20 text-white text-xs px-2 py-1 font-semibold backdrop-blur-sm">
                    {offer.tag}
                  </span>
                </div>
                {/* Decorative element */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <div className="w-32 h-32 rounded-full border-4 border-white" />
                </div>
              </div>
              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{offer.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{offer.desc}</p>
                <a href="#" className="text-[#C8102E] text-sm font-bold hover:underline">
                  Know More &gt;
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="border-2 border-[#C8102E] text-[#C8102E] px-10 py-3 text-sm font-bold uppercase tracking-wider hover:bg-[#C8102E] hover:text-white transition-colors">
            VIEW ALL OFFERS
          </button>
        </div>
      </div>
    </section>
  );
}
