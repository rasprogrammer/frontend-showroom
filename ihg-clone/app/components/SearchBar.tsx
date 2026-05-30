"use client";
import { useState } from "react";
import { Search, MapPin, Calendar, Users, ChevronDown } from "lucide-react";

export default function SearchBar() {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("01/03/2025");
  const [checkOut, setCheckOut] = useState("+ 01/04/2025");
  const [rooms, setRooms] = useState("1 Room · 1 Guest");
  const [rate, setRate] = useState("Best Available");

  return (
    <div className="bg-white border-b border-gray-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3">
        {/* Tab bar */}
        <div className="flex gap-0 mb-3">
          {["STAY", "FLIGHT + HOTEL", "MEETING ROOMS"].map((tab, i) => (
            <button
              key={tab}
              className={`px-4 py-2 text-xs font-bold tracking-wide border ${
                i === 0
                  ? "border-[#C8102E] text-[#C8102E] bg-white"
                  : "border-gray-300 text-gray-500 bg-gray-50 hover:bg-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search fields */}
        <div className="flex flex-col md:flex-row gap-2 items-end">
          {/* Destination */}
          <div className="flex-1 min-w-0">
            <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">
              Destination / Hotel Name / Address
            </label>
            <div className="relative">
              <input
                type="text"
                value={destination}
                onChange={e => setDestination(e.target.value)}
                placeholder="City / Area / Address or Hotel"
                className="w-full border border-gray-300 pl-8 pr-3 py-2 text-sm focus:outline-none focus:border-[#C8102E] h-10"
              />
              <MapPin size={14} className="absolute left-2 top-3 text-gray-400" />
            </div>
          </div>

          {/* Check-in */}
          <div className="w-full md:w-36">
            <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">
              Check In
            </label>
            <div className="relative">
              <input
                type="text"
                value={checkIn}
                onChange={e => setCheckIn(e.target.value)}
                className="w-full border border-gray-300 pl-8 pr-3 py-2 text-sm focus:outline-none focus:border-[#C8102E] h-10"
              />
              <Calendar size={14} className="absolute left-2 top-3 text-gray-400" />
            </div>
          </div>

          {/* Check-out */}
          <div className="w-full md:w-36">
            <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">
              Check Out
            </label>
            <div className="relative">
              <input
                type="text"
                value={checkOut}
                onChange={e => setCheckOut(e.target.value)}
                className="w-full border border-gray-300 pl-8 pr-3 py-2 text-sm focus:outline-none focus:border-[#C8102E] h-10"
              />
              <Calendar size={14} className="absolute left-2 top-3 text-gray-400" />
            </div>
          </div>

          {/* Rooms/Guests */}
          <div className="w-full md:w-40">
            <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">
              Rooms &amp; Guests
            </label>
            <div className="relative">
              <select
                className="w-full border border-gray-300 pl-8 pr-3 py-2 text-sm focus:outline-none focus:border-[#C8102E] h-10 appearance-none bg-white"
              >
                <option>1 Room · 1 Guest</option>
                <option>1 Room · 2 Guests</option>
                <option>2 Rooms · 2 Guests</option>
              </select>
              <Users size={14} className="absolute left-2 top-3 text-gray-400" />
              <ChevronDown size={12} className="absolute right-2 top-3.5 text-gray-400" />
            </div>
          </div>

          {/* Special Rate */}
          <div className="w-full md:w-36">
            <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">
              Special Rate
            </label>
            <div className="relative">
              <select
                className="w-full border border-gray-300 pl-3 pr-3 py-2 text-sm focus:outline-none focus:border-[#C8102E] h-10 appearance-none bg-white"
              >
                <option>Best Available</option>
                <option>IHG One Rewards Member Rate</option>
                <option>AAA/CAA Rate</option>
              </select>
              <ChevronDown size={12} className="absolute right-2 top-3.5 text-gray-400" />
            </div>
          </div>

          {/* Search button */}
          <button className="bg-[#C8102E] text-white px-8 py-2 h-10 font-bold text-sm uppercase tracking-wider hover:bg-red-800 whitespace-nowrap flex items-center gap-2">
            <Search size={14} />
            SEARCH
          </button>
        </div>

        {/* Points promo */}
        <div className="mt-2 text-xs text-gray-600 flex items-center gap-1">
          <span className="text-[#C8102E] font-bold">⭐</span>
          <span>Choose your adventure for earning points.</span>
          <a href="#" className="text-[#C8102E] font-bold hover:underline ml-1">LEARN MORE &gt;</a>
        </div>
      </div>
    </div>
  );
}
