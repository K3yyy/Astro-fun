"use client"

import { useState } from "react"

const sounds = [
    {
        id: "1",
        name: "Ding",
        emoji: "🔔",
        sound: "data:audio/wav;base64,UklGRiYAAABXQVZFZm10IBAAAAABAAEAQB8AAAB9AAACABAAZGF0YQIAAAAAAA==",
    },
    {
        id: "2",
        name: "Pop",
        emoji: "💥",
        sound: "data:audio/wav;base64,UklGRiYAAABXQVZFZm10IBAAAAABAAEAQB8AAAB9AAACABAAZGF0YQIAAAAAAA==",
    },
    {
        id: "3",
        name: "Clap",
        emoji: "👏",
        sound: "data:audio/wav;base64,UklGRiYAAABXQVZFZm10IBAAAAABAAEAQB8AAAB9AAACABAAZGF0YQIAAAAAAA==",
    },
    {
        id: "4",
        name: "Tada",
        emoji: "🎉",
        sound: "data:audio/wav;base64,UklGRiYAAABXQVZFZm10IBAAAAABAAEAQB8AAAB9AAACABAAZGF0YQIAAAAAAA==",
    },
    {
        id: "5",
        name: "Laugh",
        emoji: "😂",
        sound: "data:audio/wav;base64,UklGRiYAAABXQVZFZm10IBAAAAABAAEAQB8AAAB9AAACABAAZGF0YQIAAAAAAA==",
    },
    {
        id: "6",
        name: "Wow",
        emoji: "😮",
        sound: "data:audio/wav;base64,UklGRiYAAABXQVZFZm10IBAAAAABAAEAQB8AAAB9AAACABAAZGF0YQIAAAAAAA==",
    },
]

export default function Soundboard() {
    const [playingId, setPlayingId] = useState<string | null>(null)

    const playSound = (id: string) => {
        setPlayingId(id)
        setTimeout(() => setPlayingId(null), 500)
    }

    return (
        <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-200/50 p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Fun Soundboard</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {sounds.map((sound) => (
                        <button
                            key={sound.id}
                            onClick={() => playSound(sound.id)}
                            className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl transition-all duration-200 transform ${
                                playingId === sound.id
                                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white scale-95 shadow-lg"
                                    : "bg-white border border-purple-200 hover:border-purple-400 hover:shadow-md"
                            }`}
                        >
                            <span className="text-3xl">{sound.emoji}</span>
                            <span className="text-xs font-semibold">{sound.name}</span>
                        </button>
                    ))}
                </div>
                <p className="text-sm text-gray-600 mt-4 text-center">Click any button to play a fun sound</p>
            </div>
        </div>
    )
}
