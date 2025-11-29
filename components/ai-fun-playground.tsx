"use client";

import { useState } from "react";
import { database } from "@/data";
import {
    Heart,
    Sparkles,
    Briefcase,
    HeartCrack,
    Lightbulb,

} from "lucide-react";



type AIGenerationType = "life"  | "love" | "career" | "pain";

interface GeneratedContent {
    type: AIGenerationType;
    content: string;
}

export default function AIFunPlayground() {
    const [generationType, setGenerationType] = useState<AIGenerationType>("love");
    const [currentContent, setCurrentContent] = useState<GeneratedContent | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [history, setHistory] = useState<GeneratedContent[]>([]);

    const generateAIContent = () => {
        setIsLoading(true);
        setTimeout(() => {
            const items = database[generationType];
            const randomContent = items[Math.floor(Math.random() * items.length)];

            const newItem: GeneratedContent = {
                type: generationType,
                content: randomContent,
            };

            setCurrentContent(newItem);
            setHistory([newItem, ...history.slice(0, 4)]);
            setIsLoading(false);
        }, 400);
    };

    const typeDescriptions: Record<
        AIGenerationType,
        { Icon: any; label: string; description: string }
    > = {
        life: {
            Icon: Lightbulb,
            label: "Life Wisdom",
            description: "Thoughtful insights about life, growth, and meaning.",
        },
        love: {
            Icon: Heart,
            label: "Love & Feelings",
            description: "Deep messages about love, connection, and emotions.",
        },
        career: {
            Icon: Briefcase,
            label: "Career Guidance",
            description: "Motivation for success, ambition, and growth.",
        },
        pain: {
            Icon: HeartCrack,
            label: "Pain & Healing",
            description: "Comfort for heartbreak, loneliness, and healing.",
        },
    };

    const CurrentIcon = typeDescriptions[generationType].Icon;

    return (
        <div className="space-y-6">
            {/* Generation Type Tabs */}
            <div className="flex flex-wrap gap-3 justify-center">
                {(Object.keys(typeDescriptions) as AIGenerationType[]).map((type) => {
                    const { Icon, label } = typeDescriptions[type];
                    return (
                        <button
                            key={type}
                            onClick={() => setGenerationType(type)}
                            className={`px-4 md:px-5 py-2.5 rounded-xl font-bold text-sm md:text-base transition-all flex items-center gap-2 shadow-md ${
                                generationType === type
                                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-purple-500/50"
                                    : "bg-white border border-purple-200 text-gray-700 hover:shadow-lg hover:border-purple-300"
                            }`}
                        >
                            <Icon className="w-5 h-5" />
                            <span className="hidden sm:inline">{label}</span>
                        </button>
                    );
                })}
            </div>

            {/* Main Content Display */}
            <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-2xl border border-purple-200/50 shadow-xl p-8 md:p-10">
                <div className="text-center space-y-6">
                    <CurrentIcon className="w-24 h-24 mx-auto text-purple-600" strokeWidth={1.5} />

                    {currentContent ? (
                        <div className="space-y-4 max-w-2xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                {typeDescriptions[generationType].label}
                            </h2>
                            <p className="text-lg md:text-xl text-gray-700 leading-relaxed tracking-wide">
                                {currentContent.content}
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-3">
                            <p className="text-xl md:text-2xl font-semibold text-gray-700">
                                {typeDescriptions[generationType].description}
                            </p>
                            <p className="text-gray-500">Tap below to generate</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Generate Button */}
            <button
                onClick={generateAIContent}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 md:py-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all disabled:opacity-60 disabled:cursor-not-allowed text-lg md:text-xl flex items-center justify-center gap-3"
            >
                {isLoading ? (
                    <>Generating magic...</>
                ) : (
                    <>
                        <Sparkles className="w-6 h-6" />
                        Generate {typeDescriptions[generationType].label}
                    </>
                )}
            </button>

            {/* History */}
            {history.length > 0 && (
                <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-800 text-center">Recent Generations</h3>
                    <div className="space-y-3 max-h-96 overflow-y-auto">
                        {history.map((item, index) => {
                            const { Icon } = typeDescriptions[item.type];
                            return (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-purple-100 hover:shadow-lg transition-all"
                                >
                                    <p className="text-sm font-bold text-purple-600 flex items-center gap-2 mb-2">
                                        <Icon className="w-5 h-5" />
                                        {typeDescriptions[item.type].label}
                                    </p>
                                    <p className="text-gray-700 leading-relaxed">{item.content}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}