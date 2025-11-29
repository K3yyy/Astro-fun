"use client"

import { useState } from "react"

const funContent = {
    jokes: [
        { text: "Why don't scientists trust atoms? Because they make up everything!", emoji: "😂" },
        { text: "What do you call a bear with no teeth? A gummy bear!", emoji: "🐻" },
        { text: "Why did the scarecrow win an award? He was outstanding in his field!", emoji: "🌾" },
        { text: "What do you call fake spaghetti? An impasta!", emoji: "🍝" },
        { text: "Why don't eggs tell jokes? They'd crack each other up!", emoji: "🥚" },
        { text: "What did the ocean say to the beach? Nothing, it just waved!", emoji: "🌊" },
    ],
    facts: [
        {
            text: "Honey never spoils. Archaeologists have found pots of honey in Egyptian tombs that are over 3000 years old!",
            emoji: "🍯",
        },
        { text: "A group of flamingos is called a 'flamboyance'!", emoji: "🦩" },
        { text: "Octopuses have three hearts and blue blood!", emoji: "🐙" },
        { text: "A day on Venus is longer than a year on Venus!", emoji: "🪐" },
        { text: "Cats have a third eyelid called a nictitating membrane!", emoji: "🐱" },
        { text: "Bananas are berries, but strawberries aren't!", emoji: "🍌" },
    ],
    quotes: [
        { text: "The only way to do great work is to love what you do. - Steve Jobs", emoji: "✨" },
        { text: "Innovation distinguishes between a leader and a follower. - Steve Jobs", emoji: "💡" },
        { text: "Life is what happens when you're busy making other plans. - John Lennon", emoji: "🎵" },
        { text: "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt", emoji: "🌟" },
        { text: "It is during our darkest moments that we must focus to see the light. - Aristotle", emoji: "🌙" },
        { text: "The only impossible journey is the one you never begin. - Tony Robbins", emoji: "🚀" },
    ],
    gifs: [
        { text: "Happy Dancing", emoji: "💃", description: "Feel-good dance vibes" },
        { text: "Celebration", emoji: "🎉", description: "Time to celebrate!" },
        { text: "Laughing Hard", emoji: "😂", description: "That's hilarious!" },
        { text: "Mind Blown", emoji: "🤯", description: "Whoa, that's cool!" },
        { text: "Victory", emoji: "🏆", description: "You won!" },
        { text: "Rainbow Vibes", emoji: "🌈", description: "Magical moment" },
    ],
    questions: [
        { text: "If you could have any superpower, what would it be?", emoji: "🦸" },
        { text: "What's your favorite childhood memory?", emoji: "👶" },
        { text: "If you could travel anywhere, where would you go?", emoji: "✈️" },
        { text: "What's something that always makes you laugh?", emoji: "😄" },
        { text: "If you could meet anyone in history, who would it be?", emoji: "👥" },
        { text: "What's your hidden talent that most people don't know?", emoji: "🎭" },
    ],
}

type ContentType = keyof typeof funContent

export default function RandomFunGenerator() {
    const [contentType, setContentType] = useState<ContentType>("jokes")
    const [currentContent, setCurrentContent] = useState<any>(null)
    const [history, setHistory] = useState<any[]>([])

    const generateNewContent = () => {
        const content = funContent[contentType]
        const random = content[Math.floor(Math.random() * content.length)]
        setCurrentContent(random)
        setHistory([{ ...random, type: contentType }, ...history.slice(0, 3)])
    }

    return (
        <div className="space-y-6">
            {/* Content Type Tabs */}
            <div className="flex flex-wrap gap-2 justify-center">
                {(Object.keys(funContent) as ContentType[]).map((type) => (
                    <button
                        key={type}
                        onClick={() => {
                            setContentType(type)
                            setCurrentContent(null)
                        }}
                        className={`px-3 md:px-4 py-2 rounded-lg font-semibold text-xs md:text-sm transition-all ${
                            contentType === type
                                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                                : "bg-white border border-purple-200 text-gray-700 hover:shadow-md"
                        }`}
                    >
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                ))}
            </div>

            {/* Main Content Display */}
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl border border-pink-200/50 shadow-lg p-6 md:p-8">
                {currentContent ? (
                    <div className="text-center space-y-4">
                        <p className="text-5xl md:text-6xl animate-bounce">{currentContent.emoji}</p>
                        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            {currentContent.text}
                        </h2>
                        {currentContent.description && (
                            <p className="text-base md:text-lg text-gray-600">{currentContent.description}</p>
                        )}
                    </div>
                ) : (
                    <div className="text-center space-y-2">
                        <p className="text-5xl">🎯</p>
                        <p className="text-lg md:text-xl font-semibold text-gray-600">Click the button to generate!</p>
                    </div>
                )}
            </div>

            <button
                onClick={generateNewContent}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 md:py-4 rounded-xl hover:shadow-xl transition-all text-base md:text-lg"
            >
                Generate {contentType.charAt(0).toUpperCase() + contentType.slice(1)}
            </button>

            {/* History */}
            {history.length > 0 && (
                <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-3">Recent Picks</h3>
                    <div className="space-y-2">
                        {history.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg p-3 border border-purple-100 flex items-start gap-3 hover:shadow-md transition-all"
                            >
                                <span className="text-2xl flex-shrink-0">{item.emoji}</span>
                                <div className="flex-1 min-w-0">
                                    <p className="font-semibold text-gray-800 text-sm md:text-base break-words">{item.text}</p>
                                    <p className="text-xs text-gray-500 capitalize">{item.type}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
