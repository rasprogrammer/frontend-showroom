import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import HeroBanner from "./components/HeroBanner";
import GlobalStats from "./components/GlobalStats";
import OffersSection from "./components/OffersSection";
import BrandsCarousel from "./components/BrandsCarousel";
import AppDownload from "./components/AppDownload";
import OneRewards from "./components/OneRewards";
import Destinations from "./components/Destinations";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <SearchBar />
      <HeroBanner />
      <GlobalStats />
      <OffersSection />
      <BrandsCarousel />
      <AppDownload />
      <OneRewards />
      <Destinations />
      <FAQSection />
      <Footer />
    </main>
  );
}
