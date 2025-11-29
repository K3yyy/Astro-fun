"use client"

import { useState, useEffect } from "react"

interface TarotCard {
    name: string
    meaning: string
    emoji: string
}

const tarotCards: TarotCard[] = [
    { name: "The Sun", meaning: "Happiness, progress, success", emoji: "☀️" },
    { name: "The Moon", meaning: "Intuition, dreams, mystery", emoji: "🌙" },
    { name: "The Star", meaning: "Hope, faith, inspiration", emoji: "⭐" },
    { name: "The Lovers", meaning: "Love, harmony, choices", emoji: "💕" },
    { name: "The Magician", meaning: "Talent, power, creativity", emoji: "🎩" },
    { name: "The Wheel of Fortune", meaning: "Luck, destiny, cycles", emoji: "🎡" },
    { name: "The Tower", meaning: "Change, revelation, breakthrough", emoji: "🏰" },
    { name: "Strength", meaning: "Inner strength, courage, persistence", emoji: "💪" },
    { name: "The Hermit", meaning: "Wisdom, reflection, solitude", emoji: "🕯️" },
    { name: "Justice", meaning: "Truth, fairness, balance", emoji: "⚖️" },
]

export default function DailyTarot() {
    const [card, setCard] = useState<TarotCard | null>(null)
    const [isFlipping, setIsFlipping] = useState(false)

    useEffect(() => {
        // Get daily card based on date
        const today = new Date()
        const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000)
        const cardIndex = dayOfYear % tarotCards.length
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setCard(tarotCards[cardIndex])
    }, [])

    const drawNewCard = () => {
        setIsFlipping(true)
        setTimeout(() => {
            const randomCard = tarotCards[Math.floor(Math.random() * tarotCards.length)]
            setCard(randomCard)
            setIsFlipping(false)
        }, 600)
    }

    return (
        <div className="mx-auto max-w-2xl">
            <div className="bg-white rounded-3xl shadow-xl shadow-purple-200/50 overflow-hidden border border-purple-200/50">
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 px-6 md:px-8 py-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-purple-900 mb-8">Your Daily Tarot Card</h2>

                    <div className="flex justify-center mb-8">
                        <div
                            className={`w-48 h-64 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl shadow-2xl flex items-center justify-center text-8xl transform transition-all duration-600 ${
                                isFlipping ? "scale-95 opacity-50" : "scale-100 opacity-100"
                            }`}
                        >
                            {card?.emoji}
                        </div>
                    </div>

                    {card && (
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-purple-900 mb-2">{card.name}</h3>
                            <p className="text-lg text-purple-700/80">{card.meaning}</p>
                        </div>
                    )}

                    <button
                        onClick={drawNewCard}
                        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 rounded-full hover:shadow-lg hover:shadow-purple-300/50 transition-all duration-300"
                    >
                        Draw Another Card
                    </button>
                </div>
            </div>
        </div>
    )
}
