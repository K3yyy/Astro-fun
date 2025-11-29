"use client"

interface NavigationProps {
    activeTab: string
    setActiveTab: (tab: string) => void
}

const tabs = [
    { id: "tarot", label: "Tarot", icon: "🔮" },
    { id: "horoscope", label: "Horoscope", icon: "♈" },
    { id: "compatibility", label: "Compatibility", icon: "💞" },
    { id: "lucky", label: "Lucky", icon: "✨" },
    { id: "meme", label: "Meme", icon: "😂" },
    { id: "fun", label: "Fun", icon: "🎉" },
    // { id: "sound", label: "Sound", icon: "🔊" },
    // { id: "games", label: "Games", icon: "🎮" },
    { id: "wheel", label: "Wheel", icon: "🎡" },
    { id: "ai", label: "Ramdom life", icon: "🍀" },
]

export default function Navigation({ activeTab, setActiveTab }: NavigationProps) {
    return (
        <nav className="flex flex-wrap justify-center gap-1 md:gap-2 lg:gap-3">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-2 md:px-3 py-2 rounded-full font-medium transition-all duration-300 text-xs md:text-sm ${
                        activeTab === tab.id
                            ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-300/50"
                            : "bg-white text-gray-700 border border-purple-200/50 hover:border-purple-300 hover:shadow-md"
                    }`}
                >
                    <span className="mr-1 md:mr-2">{tab.icon}</span>
                    <span className="hidden sm:inline">{tab.label}</span>
                </button>
            ))}
        </nav>
    )
}
