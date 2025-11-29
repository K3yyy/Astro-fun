"use client"
import { useState } from "react"
import {compatibilityMatrix} from "@/data";

export interface CompatibilityData {
    compatibility: number
    strengths: string[]
    challenges: string[]
    advice: string
}

export default function LoveCompatibility() {
    const [yourName, setYourName] = useState("")
    const [partnerName, setPartnerName] = useState("")
    const [your, setYour] = useState("")
    const [partner, setPartner] = useState("")
    const [compatibility, setCompatibility] = useState<CompatibilityData | null>(null)

    const zodiacList = [
        "aries", "taurus", "gemini", "cancer", "leo", "virgo",
        "libra", "scorpio", "sagittarius", "capricorn", "aquarius", "pisces",
    ]

    const zodiacEmojis: Record<string, string> = {
        aries: "♈", taurus: "♉", gemini: "♊", cancer: "♋", leo: "♌", virgo: "♍",
        libra: "♎", scorpio: "♏", sagittarius: "♐", capricorn: "♑",
        aquarius: "♒", pisces: "♓",
    }

    const checkCompatibility = () => {
        if (your && partner) {
            const key1 = your.toLowerCase();
            const key2 = partner.toLowerCase();
            const data = compatibilityMatrix[key1]?.[key2] || compatibilityMatrix[key2]?.[key1] || {
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
                advice: "Take time to understand each other's personality. Embrace differences as strengths. Build trust through consistent communication and shared experiences.",
            };
            setCompatibility(data);
        }
    };

    return (
        <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl shadow-purple-200/50 overflow-hidden border border-purple-200/50">
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 px-6 md:px-8 py-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-purple-900 mb-8">
                        Love Compatibility
                    </h2>

                    {/* Name Inputs – NEW */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-sm font-semibold text-purple-900 mb-3">Your Name</label>
                            <input
                                type="text"
                                value={yourName}
                                onChange={(e) => setYourName(e.target.value)}
                                placeholder="Enter your name"
                                className="w-full px-4 py-3 rounded-xl border border-purple-200/50 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-purple-900 mb-3">Partner's Name</label>
                            <input
                                type="text"
                                value={partnerName}
                                onChange={(e) => setPartnerName(e.target.value)}
                                placeholder="Enter partner's name"
                                className="w-full px-4 py-3 rounded-xl border border-purple-200/50 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                            />
                        </div>
                    </div>

                    {/* Zodiac Selects (unchanged) */}
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
                            <label className="block text-sm font-semibold text-purple-900 mb-3">Partner's Zodiac</label>
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
                                    <h4 className="font-semibold text-green-900 mb-3">Strengths</h4>
                                    <ul className="space-y-2">
                                        {compatibility.strengths.map((s) => (
                                            <li key={s} className="text-green-800 flex items-center gap-2">
                                                <span className="text-lg">✨</span> {s}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-red-50 rounded-xl p-4">
                                    <h4 className="font-semibold text-red-900 mb-3">Challenges</h4>
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
                                <h4 className="font-semibold text-purple-900 mb-3">Advice</h4>
                                <p className="text-purple-800">{compatibility.advice}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}