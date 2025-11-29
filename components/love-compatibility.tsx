"use client"

import { useState } from "react"

interface CompatibilityData {
    compatibility: number
    strengths: string[]
    challenges: string[]
    advice: string
}

const compatibilityMatrix: Record<string, Record<string, CompatibilityData>> = {
    aries: {
        aries: {
            compatibility: 100,
            strengths: [
                "Extreme passion and physical chemistry",
                "Shared drive, ambition, and spontaneity",
                "Both love adventure and taking the lead"
            ],
            challenges: [
                "Both can be impulsive and quick-tempered",
                "Power struggles due to strong personalities"
            ],
            advice: "Learn teamwork instead of competing. Channel your fire into joint goals and exciting activities.",
        },
        taurus: {
            compatibility: 75,
            strengths: [
                "Strong initial attraction and magnetism",
                "Taurus brings grounding; Aries brings action",
                "Balanced dynamic of stability and passion"
            ],
            challenges: [
                "Different speeds — Aries moves fast, Taurus slow",
                "Stubbornness can cause long arguments"
            ],
            advice: "Practice patience. Blend Aries’ fire with Taurus’ grounding energy for long-term harmony.",
        },
        gemini: {
            compatibility: 80,
            strengths: [
                "Lots of fun, curiosity, and witty conversation",
                "Both love excitement and variety",
                "Strong mental and social chemistry"
            ],
            challenges: [
                "Deep emotional connection may take time",
                "Gemini’s inconsistency vs Aries’ directness"
            ],
            advice: "Talk openly about feelings. Keep adventures alive while building emotional depth.",
        },
        cancer: {
            compatibility: 70,
            strengths: [
                "Cancer provides emotional safety",
                "Aries encourages growth and confidence",
                "Complementary strengths — heart meets fire"
            ],
            challenges: [
                "Aries can be too blunt for sensitive Cancer",
                "Different emotional pacing and needs"
            ],
            advice: "Be gentle with each other. Aries should slow down; Cancer should express needs clearly.",
        },
        leo: {
            compatibility: 90,
            strengths: [
                "Powerful chemistry and shared passion",
                "Both confident, bold, expressive",
                "High energy, fun, and mutual admiration"
            ],
            challenges: [
                "Ego clashes — both want attention",
                "Arguments can be dramatic"
            ],
            advice: "Appreciate each other equally. Celebrate each other’s victories instead of competing.",
        },
    },

    taurus: {
        taurus: {
            compatibility: 100,
            strengths: [
                "Deep loyalty and commitment",
                "Love for comfort, sensuality, and routine",
                "Strong emotional and physical stability"
            ],
            challenges: [
                "Both can be resistant to change",
                "Possessiveness or jealousy may arise"
            ],
            advice: "Introduce small adventures to avoid stagnation. Support each other gently through change.",
        },
        gemini: {
            compatibility: 65,
            strengths: [
                "Gemini brings excitement; Taurus brings calm",
                "Both can learn patience and adaptability",
                "Mutual curiosity about each other’s differences"
            ],
            challenges: [
                "Gemini may seem restless; Taurus prefers stability",
                "Communication styles differ dramatically"
            ],
            advice: "Build trust slowly. Create routines that still allow Gemini flexibility and freedom.",
        },
        cancer: {
            compatibility: 85,
            strengths: [
                "Emotionally nurturing, safe, and steady",
                "Both value loyalty, comfort, and home life",
                "Deep emotional and physical intimacy"
            ],
            challenges: [
                "Cancer’s emotional waves vs Taurus’ slower responses"
            ],
            advice: "Share feelings openly. Create a home environment that supports both comfort and emotional warmth.",
        },
        leo: {
            compatibility: 75,
            strengths: [
                "Strong loyalty and desire for long-term commitment",
                "Taurus grounds Leo’s fire and passion",
                "Sensual, affectionate, and stable connection"
            ],
            challenges: [
                "Leo’s need for admiration vs Taurus’ quiet nature",
                "Stubbornness on both sides"
            ],
            advice: "Show appreciation often. Respect each other’s pride and boundaries.",
        },
    },

    gemini: {
        gemini: {
            compatibility: 100,
            strengths: [
                "Endless conversation, fun, and ideas",
                "Both love variety, curiosity, and new experiences",
                "Fast mental connection and shared humor"
            ],
            challenges: [
                "Avoiding deeper emotions",
                "Difficulty committing long-term"
            ],
            advice: "Focus on emotional honesty. Try meaningful activities that build deeper connection.",
        },
        cancer: {
            compatibility: 60,
            strengths: [
                "Gemini helps Cancer see new perspectives",
                "Cancer brings emotional depth to Gemini",
                "Balance of head and heart"
            ],
            challenges: [
                "Cancer needs security; Gemini needs freedom",
                "Emotional pacing mismatch"
            ],
            advice: "Communicate clearly about emotional needs. Build trust slowly and respectfully.",
        },
        leo: {
            compatibility: 80,
            strengths: [
                "Highly creative and playful relationship",
                "Gemini stimulates Leo mentally",
                "Fun, lively, and expressive bond"
            ],
            challenges: [
                "Leo wants loyalty; Gemini wants freedom",
                "Emotional depth may take time to develop"
            ],
            advice: "Mix fun with moments of intimacy. Leo should avoid controlling; Gemini should offer reassurance.",
        },
    },

    cancer: {
        cancer: {
            compatibility: 100,
            strengths: [
                "Deep emotional connection and mutual understanding",
                "Natural nurturing and caring energy",
                "Shared values of loyalty, home, and comfort"
            ],
            challenges: [
                "Moodiness on both sides",
                "Risk of over-dependency"
            ],
            advice: "Maintain individuality. Encourage personal hobbies and emotional independence.",
        },
        leo: {
            compatibility: 70,
            strengths: [
                "Cancer provides emotional warmth",
                "Leo offers protection, loyalty, and devotion",
                "Both can create a loving and secure environment"
            ],
            challenges: [
                "Cancer’s sensitivity vs Leo’s pride and directness",
                "Different love languages"
            ],
            advice: "Find balance between emotional closeness and personal independence. Be patient with each other’s needs.",
        },
    },

    leo: {
        leo: {
            compatibility: 100,
            strengths: [
                "Powerful attraction and creative passion",
                "Both generous, warm-hearted, and loyal",
                "Magnetic energy and dramatic love"
            ],
            challenges: [
                "Ego clashes when both want attention",
                "Jealousy or possessiveness"
            ],
            advice: "Celebrate each other equally. Take turns leading and expressing affection.",
        },
    },
};


export default function LoveCompatibility() {
    const [your, setYour] = useState("")
    const [partner, setPartner] = useState("")
    const [compatibility, setCompatibility] = useState<CompatibilityData | null>(null)

    const zodiacList = [
        "aries",
        "taurus",
        "gemini",
        "cancer",
        "leo",
        "virgo",
        "libra",
        "scorpio",
        "sagittarius",
        "capricorn",
        "aquarius",
        "pisces",
    ]
    const zodiacEmojis: Record<string, string> = {
        aries: "♈",
        taurus: "♉",
        gemini: "♊",
        cancer: "♋",
        leo: "♌",
        virgo: "♍",
        libra: "♎",
        scorpio: "♏",
        sagittarius: "♐",
        capricorn: "♑",
        aquarius: "♒",
        pisces: "♓",
    }

    const checkCompatibility = () => {
        if (your && partner) {
            const key1 = your.toLowerCase();
            const key2 = partner.toLowerCase();

            const data =
                compatibilityMatrix[key1]?.[key2] ||
                compatibilityMatrix[key2]?.[key1] || {
                    compatibility: Math.floor(Math.random() * 30) + 60, // 60–89%
                    strengths: [
                        "Strong curiosity toward each other",
                        "Potential for emotional and personal growth",
                        "A dynamic sense of discovery in the relationship",
                        "Ability to learn from each other's differences"
                    ],
                    challenges: [
                        "Different communication styles may cause misunderstandings",
                        "May need extra effort to sync values or expectations",
                        "Emotional needs may not naturally align at first"
                    ],
                    advice:
                        "Take time to understand each other's personality. Embrace differences as strengths. Build trust through consistent communication and shared experiences.",
                };

            setCompatibility(data);
        }
    };


    return (
        <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl shadow-purple-200/50 overflow-hidden border border-purple-200/50">
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 px-6 md:px-8 py-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-purple-900 mb-8">Love Compatibility</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div>
                            <label className="block text-sm font-semibold text-purple-900 mb-3">Your Zodiac</label>
                            <select
                                value={your}
                                onChange={(e) => setYour(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border border-purple-200/50 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                            >
                                <option value="">Select...</option>
                                {zodiacList.map((z) => (
                                    <option key={z} value={z}>
                                        {zodiacEmojis[z]} {z.charAt(0).toUpperCase() + z.slice(1)}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-purple-900 mb-3">Partner`s Zodiac</label>
                            <select
                                value={partner}
                                onChange={(e) => setPartner(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border border-purple-200/50 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                            >
                                <option value="">Select...</option>
                                {zodiacList.map((z) => (
                                    <option key={z} value={z}>
                                        {zodiacEmojis[z]} {z.charAt(0).toUpperCase() + z.slice(1)}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <button
                        onClick={checkCompatibility}
                        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 rounded-full hover:shadow-lg hover:shadow-purple-300/50 transition-all duration-300 mb-8"
                    >
                        Check Compatibility
                    </button>

                    {compatibility && (
                        <div className="space-y-6">
                            <div className="text-center">
                                <div className="text-6xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
                                    {compatibility.compatibility}%
                                </div>
                                <p className="text-lg text-purple-600/70">Compatibility Score</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-green-50 rounded-xl p-4">
                                    <h4 className="font-semibold text-green-900 mb-3">💚 Strengths</h4>
                                    <ul className="space-y-2">
                                        {compatibility.strengths.map((s) => (
                                            <li key={s} className="text-green-800 flex items-center gap-2">
                                                <span className="text-lg">✨</span> {s}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-red-50 rounded-xl p-4">
                                    <h4 className="font-semibold text-red-900 mb-3">⚠️ Challenges</h4>
                                    <ul className="space-y-2">
                                        {compatibility.challenges.map((c) => (
                                            <li key={c} className="text-red-800 flex items-center gap-2">
                                                <span className="text-lg">🔥</span> {c}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-purple-50 rounded-xl p-4">
                                <h4 className="font-semibold text-purple-900 mb-3">💫 Advice</h4>
                                <p className="text-purple-800">{compatibility.advice}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
