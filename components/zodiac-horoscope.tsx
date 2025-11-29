"use client"

import { useState } from "react"

interface Zodiac {
    name: string
    dates: string
    emoji: string
    horoscope: {
        love: number
        career: number
        money: number
        health: number
        luck: number
    }
    traits: string[]
}

const zodiacs: Record<string, Zodiac> = {
    aries: {
        name: "Aries",
        dates: "Mar 21 - Apr 19",
        emoji: "♈",
        horoscope: { love: 4, career: 5, money: 3, health: 4, luck: 5 },
        traits: ["Energy", "Passion", "Courage", "Enthusiasm"],
    },
    taurus: {
        name: "Taurus",
        dates: "Apr 20 - May 20",
        emoji: "♉",
        horoscope: { love: 5, career: 4, money: 5, health: 5, luck: 3 },
        traits: ["Stability", "Loyalty", "Patience", "Reliability"],
    },
    gemini: {
        name: "Gemini",
        dates: "May 21 - Jun 20",
        emoji: "♊",
        horoscope: { love: 3, career: 5, money: 4, health: 3, luck: 4 },
        traits: ["Communication", "Curiosity", "Adaptability", "Intelligence"],
    },
    cancer: {
        name: "Cancer",
        dates: "Jun 21 - Jul 22",
        emoji: "♋",
        horoscope: { love: 5, career: 3, money: 3, health: 4, luck: 4 },
        traits: ["Sensitivity", "Intuition", "Loyalty", "Protectiveness"],
    },
    leo: {
        name: "Leo",
        dates: "Jul 23 - Aug 22",
        emoji: "♌",
        horoscope: { love: 5, career: 5, money: 4, health: 4, luck: 5 },
        traits: ["Confidence", "Generosity", "Creativity", "Leadership"],
    },
    virgo: {
        name: "Virgo",
        dates: "Aug 23 - Sep 22",
        emoji: "♍",
        horoscope: { love: 3, career: 5, money: 5, health: 5, luck: 3 },
        traits: ["Analysis", "Precision", "Organization", "Practicality"],
    },
    libra: {
        name: "Libra",
        dates: "Sep 23 - Oct 22",
        emoji: "♎",
        horoscope: { love: 5, career: 4, money: 4, health: 4, luck: 4 },
        traits: ["Balance", "Diplomacy", "Charm", "Fairness"],
    },
    scorpio: {
        name: "Scorpio",
        dates: "Oct 23 - Nov 21",
        emoji: "♏",
        horoscope: { love: 5, career: 5, money: 5, health: 3, luck: 5 },
        traits: ["Intensity", "Passion", "Mystery", "Power"],
    },
    sagittarius: {
        name: "Sagittarius",
        dates: "Nov 22 - Dec 21",
        emoji: "♐",
        horoscope: { love: 4, career: 4, money: 4, health: 4, luck: 5 },
        traits: ["Adventure", "Optimism", "Honesty", "Freedom"],
    },
    capricorn: {
        name: "Capricorn",
        dates: "Dec 22 - Jan 19",
        emoji: "♑",
        horoscope: { love: 3, career: 5, money: 5, health: 4, luck: 3 },
        traits: ["Ambition", "Discipline", "Responsibility", "Maturity"],
    },
    aquarius: {
        name: "Aquarius",
        dates: "Jan 20 - Feb 18",
        emoji: "♒",
        horoscope: { love: 4, career: 5, money: 3, health: 3, luck: 4 },
        traits: ["Innovation", "Independence", "Idealism", "Intelligence"],
    },
    pisces: {
        name: "Pisces",
        dates: "Feb 19 - Mar 20",
        emoji: "♓",
        horoscope: { love: 5, career: 3, money: 3, health: 4, luck: 4 },
        traits: ["Compassion", "Creativity", "Intuition", "Sensitivity"],
    },
}

const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
            <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>
        ⭐
      </span>
        ))}
    </div>
)

export default function ZodiacHoroscope() {
    const [selectedZodiac, setSelectedZodiac] = useState<Zodiac | null>(null)

    return (
        <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl shadow-purple-200/50 overflow-hidden border border-purple-200/50">
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 px-6 md:px-8 py-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-purple-900 mb-8">Zodiac Horoscope</h2>

                    <div className="grid grid-cols-3 md:grid-cols-4 gap-3 mb-8">
                        {Object.entries(zodiacs).map(([key, zodiac]) => (
                            <button
                                key={key}
                                onClick={() => setSelectedZodiac(zodiac)}
                                className={`p-3 rounded-xl font-semibold transition-all duration-300 ${
                                    selectedZodiac?.name === zodiac.name
                                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                                        : "bg-purple-100/50 text-purple-900 hover:bg-purple-200/50"
                                }`}
                            >
                                <div className="text-2xl mb-1">{zodiac.emoji}</div>
                                <div className="text-xs">{zodiac.name}</div>
                            </button>
                        ))}
                    </div>

                    {selectedZodiac && (
                        <div className="space-y-6">
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-purple-900 mb-1">{selectedZodiac.name}</h3>
                                <p className="text-purple-600/70">{selectedZodiac.dates}</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="font-semibold text-purple-900">💞 Love</span>
                                        <StarRating rating={selectedZodiac.horoscope.love} />
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="font-semibold text-purple-900">💼 Career</span>
                                        <StarRating rating={selectedZodiac.horoscope.career} />
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="font-semibold text-purple-900">💰 Money</span>
                                        <StarRating rating={selectedZodiac.horoscope.money} />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="font-semibold text-purple-900">❤️ Health</span>
                                        <StarRating rating={selectedZodiac.horoscope.health} />
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="font-semibold text-purple-900">🍀 Luck</span>
                                        <StarRating rating={selectedZodiac.horoscope.luck} />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-purple-50 rounded-xl p-4">
                                <h4 className="font-semibold text-purple-900 mb-3">Traits</h4>
                                <div className="flex flex-wrap gap-2">
                                    {selectedZodiac.traits.map((trait) => (
                                        <span
                                            key={trait}
                                            className="bg-purple-200/50 text-purple-900 px-3 py-1 rounded-full text-sm font-medium"
                                        >
                      {trait}
                    </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
