"use client";
import { useState } from "react";
import { Phone, Globe, ChevronDown, Menu, X, Search } from "lucide-react";

const brands = [
  "Six Senses", "Regent", "InterContinental", "Vignette Collection",
  "Kimpton", "Hotel Indigo", "voco", "EVEN Hotels", "Atwell Suites",
  "Hualuxe", "Crowne Plaza", "Holiday Inn", "Holiday Inn Express",
  "Holiday Inn Club Vacations", "avid hotels", "Staybridge Suites",
  "Candlewood Suites", "Garner"
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [brandsOpen, setBrandsOpen] = useState(false);

  return (
    <>
      {/* Top utility bar */}
      <div className="bg-white border-b border-gray-200 text-xs hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-8">
          <div className="flex items-center gap-4 text-gray-600">
            <a href="#" className="flex items-center gap-1 hover:text-red-700">
              <Phone size={11} />
              <span>000 800 882 9197</span>
            </a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-red-700">Chat with Us</a>
          </div>
          <div className="flex items-center gap-4 text-gray-600">
            <a href="#" className="flex items-center gap-1 hover:text-red-700">
              <Globe size={11} />
              <span>English</span>
              <ChevronDown size={10} />
            </a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-red-700">My stays</a>
            <a href="#" className="hover:text-red-700">Join for Free</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="bg-[#C8102E] text-white px-3 py-1 hover:bg-red-800 text-xs font-semibold">
              Sign In
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <div className="flex items-center">
              <a href="#" className="flex items-center gap-1">
                <div className="flex flex-col leading-none">
                  <span className="text-[#C8102E] font-bold text-2xl tracking-tight">IHG</span>
                  <span className="text-[7px] text-gray-500 tracking-widest uppercase">Hotels &amp; Resorts</span>
                </div>
              </a>
            </div>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-6">
              <a href="#" className="nav-link font-semibold">Destinations</a>
              <a href="#" className="nav-link font-semibold">Offers</a>
              <div
                className="relative group"
                onMouseEnter={() => setBrandsOpen(true)}
                onMouseLeave={() => setBrandsOpen(false)}
              >
                <button className="nav-link font-semibold flex items-center gap-1">
                  Meetings &amp; Events <ChevronDown size={12} />
                </button>
              </div>
              <div
                className="relative"
                onMouseEnter={() => setBrandsOpen(true)}
                onMouseLeave={() => setBrandsOpen(false)}
              >
                <button className="nav-link font-semibold flex items-center gap-1">
                  Brands <ChevronDown size={12} />
                </button>
                {brandsOpen && (
                  <div className="absolute top-full left-0 bg-white shadow-xl border border-gray-200 p-4 w-72 z-50">
                    <p className="text-xs text-gray-500 uppercase font-bold mb-3 tracking-wider">Our Brands</p>
                    <div className="grid grid-cols-2 gap-1">
                      {brands.map(b => (
                        <a key={b} href="#" className="text-xs text-gray-700 hover:text-[#C8102E] py-1">{b}</a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <a href="#" className="nav-link font-semibold flex items-center gap-1">
                IHG One Rewards <ChevronDown size={12} />
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-3">
            {["Destinations", "Offers", "Meetings & Events", "Brands", "IHG One Rewards"].map(item => (
              <a key={item} href="#" className="block text-sm font-semibold text-gray-700 py-2 border-b border-gray-100">
                {item}
              </a>
            ))}
            <div className="flex gap-3 pt-2">
              <a href="#" className="text-sm text-gray-600">Join for Free</a>
              <a href="#" className="text-sm bg-[#C8102E] text-white px-4 py-1">Sign In</a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
