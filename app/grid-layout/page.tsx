import TrendingCard from "@/components/TrendingCard";

export default function GridLayoutPage() {
    return <>
        <div className="mx-20 grid grid-cols-12 gap-6 ">
            <header className="col-span-12 flex justify-between items-center py-2">
                <h2 className="text-black font-semibold text-4xl">Logo</h2>
                <nav>
                    <ul className="flex gap-6 text-black">
                        <li>Home</li>
                        <li>About</li>
                        <li>Service</li>
                        <li>Contact us</li>
                    </ul>
                </nav>
            </header>

            <div className="col-span-4">
                <TrendingCard />
            </div>
            <div className="col-span-8 bg-blue-100"></div>
        </div>
    </>;
}