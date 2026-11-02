export default function FeedbackNavbarPage() {
    return <>
        <div className="min-h-screen bg-gray-50">
            <nav className="flex items-center h-16 w-full gap-6 border-b border-gray-200 px-6">
                <span className="text-gray-900 text-lg font-semibold">
                    Pulse
                </span>
                <input 
                    type="text" 
                    placeholder="Search feedback..."
                    className="h-10 flex-1 px-3 bg-white border border-gray-300 rounded-md text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-blue-600"
                />
                <button className="h-10 text-white bg-blue-600 text-sm font-semibold rounded-md px-4 hover:bg-blue-700">
                    New feedback
                </button>
            </nav>
        </div>
    </>
}