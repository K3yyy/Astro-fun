"use client"

import { useState } from "react"

const wheelCategories = {
    lucky: [
        { text: "Lucky Day!", emoji: "🌟", color: "from-yellow-400 to-yellow-500" },
        { text: "Adventure Awaits", emoji: "🗺️", color: "from-green-400 to-green-500" },
        { text: "Love & Joy", emoji: "💖", color: "from-pink-400 to-pink-500" },
        { text: "Success!", emoji: "🏆", color: "from-blue-400 to-blue-500" },
        { text: "Creativity Boost", emoji: "🎨", color: "from-purple-400 to-purple-500" },
        { text: "Free Time!", emoji: "🎉", color: "from-red-400 to-red-500" },
    ],
    food: [
        { text: "Pizza", emoji: "🍕", color: "from-orange-400 to-orange-500" },
        { text: "Sushi", emoji: "🍣", color: "from-red-400 to-red-500" },
        { text: "Tacos", emoji: "🌮", color: "from-yellow-400 to-yellow-500" },
        { text: "Burgers", emoji: "🍔", color: "from-amber-400 to-amber-500" },
        { text: "Ice Cream", emoji: "🍦", color: "from-pink-400 to-pink-500" },
        { text: "Pasta", emoji: "🍝", color: "from-red-400 to-red-500" },
    ],
    punishment: [
        { text: "Do 10 Push-ups", emoji: "💪", color: "from-green-400 to-green-500" },
        { text: "Tell a Joke", emoji: "😂", color: "from-yellow-400 to-yellow-500" },
        { text: "Dance for 30 Secs", emoji: "💃", color: "from-pink-400 to-pink-500" },
        { text: "Sing a Song", emoji: "🎤", color: "from-purple-400 to-purple-500" },
        { text: "Call Someone", emoji: "📞", color: "from-blue-400 to-blue-500" },
        { text: "Do Dishes", emoji: "🧽", color: "from-cyan-400 to-cyan-500" },
    ],
    truthOrDare: [
        { text: "Truth: Spill a Secret", emoji: "🤐", color: "from-purple-400 to-purple-500" },
        { text: "Dare: Act Silly", emoji: "🤪", color: "from-yellow-400 to-yellow-500" },
        { text: "Truth: Confess", emoji: "💭", color: "from-pink-400 to-pink-500" },
        { text: "Dare: Act Brave", emoji: "😤", color: "from-red-400 to-red-500" },
        { text: "Truth: Never Have I...", emoji: "🤔", color: "from-blue-400 to-blue-500" },
        { text: "Dare: Impersonate", emoji: "🎭", color: "from-green-400 to-green-500" },
    ],
}

type WheelCategory = keyof typeof wheelCategories

export default function SpinTheWheel() {
    const [category, setCategory] = useState<WheelCategory>("lucky")
    const [rotation, setRotation] = useState(0)
    const [isSpinning, setIsSpinning] = useState(false)
    const [result, setResult] = useState<(typeof wheelCategories.lucky)[0] | null>(null)

    const spinWheel = () => {
        if (isSpinning) return

        setIsSpinning(true)
        const spins = Math.floor(Math.random() * 5) + 5
        const randomDegree = Math.floor(Math.random() * 360)
        const totalRotation = spins * 360 + randomDegree

        setRotation(totalRotation)

        setTimeout(() => {
            const items = wheelCategories[category]
            const selectedIndex = Math.floor((randomDegree / 360) * items.length) % items.length
            setResult(items[selectedIndex])
            setIsSpinning(false)
        }, 2000)
    }

    const currentItems = wheelCategories[category]

    return (
        <div className="space-y-6">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 justify-center">
                {(Object.keys(wheelCategories) as WheelCategory[]).map((cat) => (
                    <button
                        key={cat}
                        onClick={() => {
                            setCategory(cat)
                            setResult(null)
                        }}
                        className={`px-3 md:px-4 py-2 rounded-lg font-semibold text-xs md:text-sm transition-all ${
                            category === cat
                                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                                : "bg-white border border-purple-200 text-gray-700 hover:shadow-md"
                        }`}
                    >
                        {cat === "truthOrDare" ? "Truth or Dare" : cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>
                ))}
            </div>

            <div className="flex flex-col items-center justify-center">
                {/* Wheel Container */}
                <div className="relative w-full max-w-sm aspect-square flex items-center justify-center mb-4 md:mb-6">
                    {/* Pointer */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 z-10">
                        <div className="w-0 h-0 border-l-6 border-r-6 border-t-8 border-l-transparent border-r-transparent border-t-yellow-400"></div>
                    </div>

                    {/* Wheel */}
                    <div
                        className="w-full aspect-square rounded-full border-8 border-purple-500 shadow-2xl flex items-center justify-center transition-transform duration-2000"
                        style={{
                            transform: `rotate(${rotation}deg)`,
                            background: `conic-gradient(${currentItems.map((item) => item.color.replace("from-", "").replace(" to-", ", ")).join(", ")})`,
                        }}
                    >
                        <div className="w-1/3 aspect-square bg-white rounded-full flex items-center justify-center">
                            <span className="text-3xl">✨</span>
                        </div>
                    </div>
                </div>

                {/* Items around wheel */}
                <div className="w-full max-w-sm">
                    <div className="grid grid-cols-3 gap-1 md:gap-2 mb-4 md:mb-6">
                        {currentItems.map((item, index) => (
                            <div
                                key={index}
                                className={`bg-gradient-to-br ${item.color} text-white rounded-lg p-2 md:p-3 text-center text-xs md:text-sm font-semibold shadow-lg`}
                            >
                                <p className="text-lg md:text-2xl mb-1">{item.emoji}</p>
                                <p className="line-clamp-2">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Spin Button */}
                <button
                    onClick={spinWheel}
                    disabled={isSpinning}
                    className="w-full max-w-sm bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 md:py-4 rounded-xl hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed text-base md:text-lg mb-4 md:mb-6"
                >
                    {isSpinning ? "Spinning..." : "Spin the Wheel"}
                </button>

                {/* Result */}
                {result && !isSpinning && (
                    <div className="w-full max-w-sm bg-gradient-to-br from-yellow-50 to-pink-50 rounded-2xl border-2 border-yellow-300 p-4 md:p-6 text-center shadow-xl animate-bounce">
                        <p className="text-5xl md:text-6xl mb-3">{result.emoji}</p>
                        <p className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            {result.text}
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}
