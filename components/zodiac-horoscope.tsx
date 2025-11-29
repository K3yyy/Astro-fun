"use client";

import { useState } from "react";
import {zodiacs} from "@/data";

export interface Zodiac {
    name: string;
    dates: string;
    emoji: string;
    element: string;
    rulingPlanet: string;
    horoscope: {
        love: number;
        career: number;
        money: number;
        health: number;
        luck: number;
    };
    traits: string[];
    description: string;
    strengths: string[];
    challenges: string[];
    luckyColors: string[];
    luckyNumbers: number[];
    compatibleSigns: string[];
}

// zodiacs object stays the same

const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
            <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>⭐</span>
        ))}
    </div>
);

export default function ZodiacHoroscope() {
    const [selectedZodiac, setSelectedZodiac] = useState<Zodiac | null>(null);

    return (
        <div className="max-w-4xl mx-auto py-8">
            <div className="bg-white rounded-3xl shadow-xl shadow-purple-200/50 overflow-hidden border border-purple-200/50">
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 px-6 md:px-8 py-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-purple-900 mb-8">
                        Zodiac Horoscope
                    </h2>

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
                                <p className="text-purple-600/70 mb-2">{selectedZodiac.dates}</p>
                                <p className="text-purple-700">Element: {selectedZodiac.element} | Ruling Planet: {selectedZodiac.rulingPlanet}</p>
                            </div>

                            {/* Horoscope Ratings */}
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


                            {/* Description */}
                            <div className="bg-purple-50 rounded-xl p-4">
                                <h4 className="font-semibold text-purple-900 mb-2">Description</h4>
                                <p>{selectedZodiac.description}</p>
                            </div>

                            {/* Traits */}
                            <div className="bg-purple-50 rounded-xl p-4">
                                <h4 className="font-semibold text-purple-900 mb-2">Traits</h4>
                                <div className="flex flex-wrap gap-2">
                                    {selectedZodiac.traits.map(trait => (
                                        <span key={trait} className="bg-purple-200/50 text-purple-900 px-3 py-1 rounded-full text-sm font-medium">{trait}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Strengths and Challenges */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-purple-50 rounded-xl p-4">
                                    <h4 className="font-semibold text-purple-900 mb-2">Strengths</h4>
                                    <ul className="list-disc list-inside">
                                        {selectedZodiac.strengths.map(str => <li key={str}>{str}</li>)}
                                    </ul>
                                </div>
                                <div className="bg-purple-50 rounded-xl p-4">
                                    <h4 className="font-semibold text-purple-900 mb-2">Challenges</h4>
                                    <ul className="list-disc list-inside">
                                        {selectedZodiac.challenges.map(ch => <li key={ch}>{ch}</li>)}
                                    </ul>
                                </div>
                            </div>

                            {/* Lucky Colors, Numbers, Compatible Signs */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="bg-purple-50 rounded-xl p-4">
                                    <h4 className="font-semibold text-purple-900 mb-2">Lucky Colors</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedZodiac.luckyColors.map(color => (
                                            <span key={color} className="bg-purple-200/50 text-purple-900 px-3 py-1 rounded-full text-sm font-medium">{color}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-purple-50 rounded-xl p-4">
                                    <h4 className="font-semibold text-purple-900 mb-2">Lucky Numbers</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedZodiac.luckyNumbers.map(num => (
                                            <span key={num} className="bg-purple-200/50 text-purple-900 px-3 py-1 rounded-full text-sm font-medium">{num}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-purple-50 rounded-xl p-4">
                                    <h4 className="font-semibold text-purple-900 mb-2">Compatible Signs</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedZodiac.compatibleSigns.map(sign => (
                                            <span key={sign} className="bg-purple-200/50 text-purple-900 px-3 py-1 rounded-full text-sm font-medium">{sign}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
