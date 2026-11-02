const trendingItems = [
    { votes: 170, title: "Dark mode should be enable", category: "feature" },
    { votes: 142, title: "Export reports as CSV", category: "feature" },
    { votes: 98, title: "Login fails on Safari", category: "bug" },
    { votes: 76, title: "Faster dashboard loading", category: "improvement" },
    { votes: 54, title: "Slack notifications for new comments", category: "integration" },
];

export default function TrendingCard() {


    return <>
        <section className="p-6 bg-white shadow max-w-md rounded-xl border border-zinc-200">
            <h2 className="text-lg font-semibold">Trending this week</h2>
            <p className="mt-1 text-sm text-zinc-500">Most voted requests from your users</p>

            <ul className="mt-6 divide-y divide-zinc-200 border-t border-zinc-200">
                {trendingItems.map((item) => (
                    <li key={item.title} className="py-3 gap-4 flex items-center">
                        <div className="w-12 shrink-0 flex flex-col items-center">
                            <span className="text-sm font-semibold">{item.votes}</span>
                            <span className="text-xs text-zinc-500">votes</span>
                        </div>
                        <div>
                            <h3 className="text-base font-medium">{item.title}</h3>
                            <p className="mt-1 text-sm text-zinc-500 capitalize">{item.category}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    </>;
}