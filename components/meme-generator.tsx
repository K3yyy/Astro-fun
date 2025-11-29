"use client"

import { useState } from "react"

interface Meme {
    id: string
    name: string
    template: string
    emoji: string
}

const memeTemplates: Meme[] = [
    { id: "1", name: "Drake Disapproves", template: "Drake: No ❌ | Drake: Yes ✅", emoji: "🤦" },
    { id: "2", name: "Distracted Boyfriend", template: "Me looking at: [X] | Actual task: [Y]", emoji: "👀" },
    { id: "3", name: "Woman Yelling at Cat", template: "[Woman yelling] | [Cat confused]", emoji: "😹" },
    { id: "4", name: "This is Fine", template: "☕🔥 This is fine", emoji: "🔥" },
    { id: "5", name: "Shocked Pikachu", template: "Event happens | Me: 😲", emoji: "⚡" },
    { id: "6", name: "Loss Meme", template: "I | II | II | L", emoji: "📉" },
]

export default function MemeGenerator() {
    const [selectedMeme, setSelectedMeme] = useState<Meme>(memeTemplates[0])
    const [topText, setTopText] = useState("Top text")
    const [bottomText, setBottomText] = useState("Bottom text")

    const generateRandomMeme = () => {
        const random = memeTemplates[Math.floor(Math.random() * memeTemplates.length)]
        setSelectedMeme(random)
    }

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Meme Display */}
                <div className="flex flex-col items-center justify-center">
                    <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-6 border border-purple-200/50">
                        <div className="text-center space-y-4">
                            <p className="text-3xl font-bold text-purple-600">{selectedMeme.emoji}</p>
                            <h2 className="text-xl font-bold text-gray-800">{selectedMeme.name}</h2>
                            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-4 min-h-40 flex flex-col items-center justify-center space-y-4">
                                <p className="text-sm font-bold text-gray-700 text-center">{topText}</p>
                                <p className="text-2xl">{selectedMeme.emoji}</p>
                                <p className="text-sm font-bold text-gray-700 text-center">{bottomText}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Controls */}
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Top Text</label>
                        <input
                            type="text"
                            value={topText}
                            onChange={(e) => setTopText(e.target.value)}
                            maxLength={30}
                            className="w-full px-4 py-2 rounded-lg border border-purple-200 focus:border-purple-500 focus:outline-none"
                            placeholder="Enter top text"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Bottom Text</label>
                        <input
                            type="text"
                            value={bottomText}
                            onChange={(e) => setBottomText(e.target.value)}
                            maxLength={30}
                            className="w-full px-4 py-2 rounded-lg border border-purple-200 focus:border-purple-500 focus:outline-none"
                            placeholder="Enter bottom text"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">Choose Template</label>
                        <div className="grid grid-cols-2 gap-2">
                            {memeTemplates.map((meme) => (
                                <button
                                    key={meme.id}
                                    onClick={() => setSelectedMeme(meme)}
                                    className={`p-3 rounded-lg text-center transition-all duration-200 ${
                                        selectedMeme.id === meme.id
                                            ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                                            : "bg-white border border-purple-200 hover:border-purple-400 text-gray-700"
                                    }`}
                                >
                                    <p className="text-xl mb-1">{meme.emoji}</p>
                                    <p className="text-xs font-semibold">{meme.name}</p>
                                </button>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={generateRandomMeme}
                        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all duration-200"
                    >
                        Random Meme
                    </button>
                </div>
            </div>
        </div>
    )
}
