"use client"

import { useState } from "react"
import Header from "@/components/header"
import DailyTarot from "@/components/daily-tarot"
import ZodiacHoroscope from "@/components/zodiac-horoscope"
import LoveCompatibility from "@/components/love-compatibility"
import LuckyElements from "@/components/lucky-elements"
import MemeGenerator from "@/components/meme-generator"
import RandomFunGenerator from "@/components/random-fun-generator"
import SpinTheWheel from "@/components/spin-the-wheel"
import AIFunPlayground from "@/components/ai-fun-playground"
import Navigation from "@/components/navigation"

export default function Home() {
    const [activeTab, setActiveTab] = useState("tarot")

    return (
        <main className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
            <Header />

            <div className="px-4 py-6 md:px-8">
                <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

                <div className="mt-8 animate-fade-in">
                    {/* Astrology Features */}
                    {activeTab === "tarot" && <DailyTarot />}
                    {activeTab === "horoscope" && <ZodiacHoroscope />}
                    {activeTab === "compatibility" && <LoveCompatibility />}
                    {activeTab === "lucky" && <LuckyElements />}

                    {/* Fun Features */}
                    {activeTab === "meme" && <MemeGenerator />}
                    {activeTab === "fun" && <RandomFunGenerator />}
                    {/*{activeTab === "sound" && <Soundboard />}*/}
                    {/*{activeTab === "games" && <MiniGameHub />}*/}
                    {activeTab === "wheel" && <SpinTheWheel />}

                    {activeTab === "ai" && <AIFunPlayground />}
                </div>
            </div>
        </main>
    )
}
