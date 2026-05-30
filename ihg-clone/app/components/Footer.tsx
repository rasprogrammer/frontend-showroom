// No lucide social icons needed

const brandLogos = [
  "SIX SENSES", "REGENT", "INTERCONTINENTAL", "KIMPTON", "INDIGO",
  "Noted", "voco", "Ruby", "HUALUXE", "CROWNE PLAZA", "EVEN",
  "Holiday Inn", "avid", "ATWELL SUITES", "Staybridge Suites", "IHG®"
];

const footerLinks = {
  "IHG": ["About IHG", "Investor Relations", "IHG Careers", "Global Code of Conduct", "Modern Slavery Act"],
  "Hotels": ["Hotel Brands", "Special Offers", "Find a Hotel", "Airport Hotels", "Pet-Friendly Hotels"],
  "IHG One Rewards": ["Join IHG One Rewards", "IHG One Rewards Benefits", "Reward Nights", "Points Transfer", "IHG One Rewards Credit Card"],
  "Help": ["Customer Support", "Book With Confidence", "Privacy Policy", "Cookie Policy", "Terms & Conditions"]
};

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Brand logos bar */}
      <div className="border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center gap-4 justify-center">
            {/* IHG main logo */}
            <div className="flex items-center gap-1 mr-4">
              <span className="text-[#C8102E] font-bold text-lg">IHG</span>
              <div className="text-[6px] text-gray-500 uppercase leading-tight">Hotels &<br/>Resorts</div>
            </div>
            {brandLogos.map((brand, i) => (
              <span key={i} className="text-gray-500 text-[10px] font-semibold hover:text-gray-800 cursor-pointer whitespace-nowrap">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Social + Company links */}
      <div className="border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {/* Social */}
            <div>
              <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-4">Social Media</h4>
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 bg-gray-200 hover:bg-[#C8102E] hover:text-white text-gray-600 rounded flex items-center justify-center text-xs font-bold">𝕏</a>
                <a href="#" className="w-8 h-8 bg-gray-200 hover:bg-[#C8102E] hover:text-white text-gray-600 rounded flex items-center justify-center text-xs font-bold">f</a>
                <a href="#" className="w-8 h-8 bg-gray-200 hover:bg-[#C8102E] hover:text-white text-gray-600 rounded flex items-center justify-center text-xs font-bold">in</a>
                <a href="#" className="w-8 h-8 bg-gray-200 hover:bg-[#C8102E] hover:text-white text-gray-600 rounded flex items-center justify-center text-xs font-bold">▶</a>
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-4">{heading}</h4>
                <ul className="space-y-2">
                  {links.map(link => (
                    <li key={link}>
                      <a href="#" className="text-xs text-gray-600 hover:text-[#C8102E] hover:underline">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <span className="text-[#C8102E] font-bold text-lg">IHG</span>
                <div className="text-[7px] text-gray-500 uppercase leading-tight">Hotels &<br/>Resorts</div>
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-700 uppercase tracking-widest">BEST PRICE</p>
                <p className="text-[8px] text-gray-500">ALWAYS ON IHG.COM</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-500">Download the App:</span>
              <button className="bg-black text-white text-[10px] px-3 py-1.5 rounded flex items-center gap-1">
                <span>🍎</span> App Store
              </button>
              <button className="bg-black text-white text-[10px] px-3 py-1.5 rounded flex items-center gap-1">
                <span>▶</span> Google Play
              </button>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-[10px] text-gray-400 text-center">
              © 2024 InterContinental Hotels Group. All rights reserved. IHG Hotels & Resorts is a trading name of the InterContinental Hotels Group of companies.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
