"use client";

import { useEffect, useState } from "react";

interface LuckyData {
    number: number;
    color: string;
    colorHex: string;
}

const colors = [
    { name: "Purple", hex: "#9333EA" },
    { name: "Pink", hex: "#EC4899" },
    { name: "Blue", hex: "#3B82F6" },
    { name: "Gold", hex: "#F59E0B" },
    { name: "Emerald", hex: "#10B981" },
    { name: "Rose", hex: "#F43F5E" },
    { name: "Indigo", hex: "#4F46E5" },
    { name: "Teal", hex: "#14B8A6" },
] as const;

// Real zodiac emojis that work everywhere
const zodiacs = [
    { name: "Aries",        emoji: "♈" },
    { name: "Taurus",       emoji: "♉" },
    { name: "Gemini",       emoji: "♊" },
    { name: "Cancer",       emoji: "♋" },
    { name: "Leo",          emoji: "♌" },
    { name: "Virgo",        emoji: "♍" },
    { name: "Libra",        emoji:"♎" },
    { name: "Scorpio",      emoji: "♏" },
    { name: "Sagittarius",  emoji: "♐" },
    { name: "Capricorn",    emoji: "♑"},
    { name: "Aquarius",     emoji: "♒"},
    { name: "Pisces",       emoji: "♓"},
] as const;

export default function LuckyElements() {
    const [selectedSign, setSelectedSign] = useState<string | null>(null);
    const [lucky, setLucky] = useState<LuckyData | null>(null);

    useEffect(() => {
        if (!selectedSign) return;

        const today = new Date();
        const dayOfYear = Math.floor(
            (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000
        );

        const signIndex = zodiacs.findIndex((z) => z.name === selectedSign);
        const seed = dayOfYear + signIndex * 50;

        const number = (seed % 9) + 1;
        const colorIndex = seed % colors.length;

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLucky({
            number,
            color: colors[colorIndex].name,
            colorHex: colors[colorIndex].hex,
        });
    }, [selectedSign]);

    // Zodiac selection screen
    if (!selectedSign) {
        return (
            <div className="max-w-5xl mx-auto p-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">
                    Choose Your Zodiac Sign
                </h2>
                <p className="text-purple-700 mb-10">To reveal your personal lucky elements today</p>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                    {zodiacs.map((z) => (
                        <button
                            key={z.name}
                            onClick={() => setSelectedSign(z.name)}
                            className="bg-white rounded-2xl py-6 px-4 shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-purple-200 flex flex-col items-center justify-center h-32"
                        >
                            <span className="text-5xl mb-2">{z.emoji}</span>
                            <span className="font-bold text-purple-900 text-sm">{z.name}</span>
                        </button>
                    ))}
                </div>
            </div>
        );
    }

    // Your original design — exactly the same
    return (
        <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl shadow-purple-200/50 overflow-hidden border border-purple-200/50">
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 px-6 md:px-8 py-8">
                    <div className="text-center mb-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-purple-900">
                            {selectedSign}`s Lucky Elements Today
                        </h2>
                        <button
                            onClick={() => setSelectedSign(null)}
                            className="text-sm text-purple-600 underline mt-2"
                        >
                            Change sign
                        </button>
                    </div>

                    {lucky && (
                        <div className="space-y-8">
                            <div className="text-center">
                                <p className="text-sm font-semibold text-purple-600/70 mb-2">LUCKY NUMBER</p>
                                <div className="text-7xl font-bold bg-gradient-to-br from-purple-500 to-pink-500 bg-clip-text text-transparent">
                                    {lucky.number}
                                </div>
                            </div>

                            <div className="text-center">
                                <p className="text-sm font-semibold text-purple-600/70 mb-4">LUCKY COLOR</p>
                                <div className="flex justify-center mb-4">
                                    <div
                                        className="w-32 h-32 rounded-2xl shadow-lg shadow-purple-300/50 border-4 border-purple-200/50"
                                        style={{ backgroundColor: lucky.colorHex }}
                                    />
                                </div>
                                <p className="text-2xl font-bold text-purple-900">{lucky.color}</p>
                            </div>

                            <div className="bg-purple-50 rounded-xl p-6">
                                <h3 className="font-semibold text-purple-900 mb-3">How to Use Your Lucky Elements</h3>
                                <ul className="space-y-2 text-purple-800">
                                    <li>Wear your lucky color to attract positive energy</li>
                                    <li>Use your lucky number for important decisions</li>
                                    <li>Meditate on these numbers and colors for guidance</li>
                                    <li>Share your lucky elements with loved ones for good vibes</li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}