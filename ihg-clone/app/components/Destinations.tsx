const usDestinations = [
  "Baltimore", "Chicago", "Los Angeles", "Miami", "Nashville",
  "New York City", "Orlando", "Washington DC"
];

const countryDestinations = [
  "Australia", "Bahrain", "Canada", "France", "Germany",
  "India", "Italy", "Japan", "Spain", "United Kingdom"
];

const internationalDestinations = [
  "Bangkok", "Jakarta", "London", "Mumbai", "Paris",
  "Osaka", "Dubai", "Osaka", "Rome", "Tokyo"
];

export default function Destinations() {
  return (
    <section className="bg-white py-14 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            Wherever you go, we&apos;re here for you
          </h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Wherever and whenever you travel, we&apos;re here for you, whether you are searching for a{" "}
            <a href="#" className="text-[#C8102E] hover:underline">luxurious destination</a>, thinking about a
            reservation at a{" "}
            <a href="#" className="text-[#C8102E] hover:underline">nearby hotel</a>, IHG has over 5000 hotels and deals to choose from.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {/* US Destinations */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider">
                Top Destinations in the US
              </h3>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <ul className="space-y-2">
              {usDestinations.map(city => (
                <li key={city}>
                  <a href="#" className="text-sm text-[#C8102E] hover:underline">{city}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Country Destinations */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider">
                Top Destinations by country/region
              </h3>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div className="mb-2">
              <a href="#" className="text-xs font-bold text-[#C8102E] hover:underline">EXPLORE &gt;</a>
            </div>
            <ul className="space-y-2">
              {countryDestinations.map(country => (
                <li key={country}>
                  <a href="#" className="text-sm text-[#C8102E] hover:underline">{country}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* International Destinations */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider">
                Top International destinations
              </h3>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <ul className="space-y-2">
              {internationalDestinations.map(city => (
                <li key={city}>
                  <a href="#" className="text-sm text-[#C8102E] hover:underline">{city}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
