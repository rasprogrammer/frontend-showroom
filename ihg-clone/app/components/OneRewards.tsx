import { Check } from "lucide-react";

const benefits = [
  "EARN POINTS TO USE FOR REWARD NIGHTS",
  "NO BLACKOUT DATES",
  "ACCESS TO MEMBER RATES & OFFERS",
  "FREE WI-FI",
  "LATE CHECKOUT",
  "PLUS EVEN MORE PERKS WHEN YOU BECOME AN ELITE MEMBER"
];

export default function OneRewards() {
  return (
    <section className="bg-white py-0 border-b border-gray-200">
      <div className="flex flex-col md:flex-row">
        {/* Left: Surfer image */}
        <div className="md:w-1/3 h-64 md:h-auto relative overflow-hidden"
          style={{
            background: "linear-gradient(160deg, #1a6b8a 0%, #0d4a6b 40%, #082d4a 100%)"
          }}
        >
          {/* Surfer silhouette effect */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <div className="text-white text-9xl">🏄</div>
          </div>
          {/* IHG One Rewards logo */}
          <div className="absolute bottom-8 left-8">
            <div className="flex items-center gap-2">
              <div className="text-white text-2xl font-bold">IHG</div>
              <div className="border-l border-white/60 pl-2">
                <div className="text-white/80 text-[8px] uppercase tracking-widest">ONE</div>
                <div className="text-white text-sm font-bold">REWARDS</div>
              </div>
            </div>
          </div>
          {/* Wave overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-16"
            style={{ background: "linear-gradient(to top, rgba(0,51,102,0.5), transparent)" }}
          />
        </div>

        {/* Right: Benefits */}
        <div className="md:w-2/3 bg-[#003366] p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-2">
            IT&apos;S BETTER TO BE A
          </h2>
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-8">
            MEMBER
          </h2>

          <ul className="space-y-3 mb-8">
            {benefits.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check size={16} className="text-white mt-0.5 flex-shrink-0" strokeWidth={3} />
                <span className="text-white/90 text-xs font-bold tracking-wider">{b}</span>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 flex-wrap">
            <button className="bg-[#C8102E] text-white px-8 py-3 text-sm font-bold uppercase tracking-wider hover:bg-red-800 transition-colors">
              JOIN FOR FREE
            </button>
            <span className="text-white/70 text-sm">
              Already a member?{" "}
              <a href="#" className="text-white underline hover:no-underline">Sign in</a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
