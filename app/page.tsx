import TrendingCard from "@/components/TrendingCard";


export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 px-4 py-12 md:px-8">
      <div className="max-w-5xl">
        <TrendingCard />
      </div>
    </main>
  );
}