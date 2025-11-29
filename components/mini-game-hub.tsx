"use client"

import { useState } from "react"

export default function MiniGameHub() {
    const [currentGame, setCurrentGame] = useState<"rock-paper" | "number" | null>(null)
    const [rpsResult, setRpsResult] = useState<string | null>(null)
    const [number, setNumber] = useState(0)
    const [guesses, setGuesses] = useState(0)
    const [won, setWon] = useState(false)

    const playRockPaperScissors = (playerChoice: string) => {
        const choices = ["rock", "paper", "scissors"]
        const computerChoice = choices[Math.floor(Math.random() * choices.length)]

        let result = ""
        if (playerChoice === computerChoice) result = `Draw! Both chose ${computerChoice} 🤝`
        else if (
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")
        )
            result = `You win! Computer chose ${computerChoice} 🎉`
        else result = `You lose! Computer chose ${computerChoice} 😢`

        setRpsResult(result)
    }

    const startNumberGame = () => {
        setNumber(Math.floor(Math.random() * 100) + 1)
        setGuesses(0)
        setWon(false)
        setCurrentGame("number")
    }

    const guessNumber = (guess: number) => {
        setGuesses(guesses + 1)
        if (guess === number) {
            setWon(true)
        }
    }

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Rock Paper Scissors */}
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl border border-green-200/50 p-6 shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Rock Paper Scissors</h2>
                    <div className="space-y-4">
                        <button
                            onClick={() => {
                                setCurrentGame("rock-paper")
                                playRockPaperScissors("rock")
                            }}
                            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-3 rounded-lg hover:shadow-lg transition-all"
                        >
                            Rock
                        </button>
                        <button
                            onClick={() => {
                                setCurrentGame("rock-paper")
                                playRockPaperScissors("paper")
                            }}
                            className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold py-3 rounded-lg hover:shadow-lg transition-all"
                        >
                            Paper
                        </button>
                        <button
                            onClick={() => {
                                setCurrentGame("rock-paper")
                                playRockPaperScissors("scissors")
                            }}
                            className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white font-bold py-3 rounded-lg hover:shadow-lg transition-all"
                        >
                            Scissors
                        </button>
                        {rpsResult && currentGame === "rock-paper" && (
                            <div className="bg-white rounded-lg p-4 border border-green-300 text-center">
                                <p className="text-lg font-bold text-gray-800">{rpsResult}</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Number Guessing Game */}
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border border-orange-200/50 p-6 shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Guess the Number</h2>
                    {!won && currentGame === "number" ? (
                        <div className="space-y-4">
                            <p className="text-center text-gray-700 font-semibold">Guess a number between 1-100</p>
                            <p className="text-center text-sm text-gray-600">Guesses: {guesses}</p>
                            <div className="flex gap-2">
                                <input
                                    type="number"
                                    min="1"
                                    max="100"
                                    id="numberGuess"
                                    placeholder="Enter your guess"
                                    className="flex-1 px-4 py-2 rounded-lg border border-orange-200 focus:outline-none focus:border-orange-400"
                                />
                                <button
                                    onClick={() => {
                                        const guess = Number.parseInt(
                                            (document.getElementById("numberGuess") as HTMLInputElement)?.value || "0",
                                        )
                                        guessNumber(guess)
                                    }}
                                    className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold px-6 py-2 rounded-lg"
                                >
                                    Guess
                                </button>
                            </div>
                        </div>
                    ) : won ? (
                        <div className="text-center space-y-3">
                            <p className="text-5xl">🎊</p>
                            <p className="text-lg font-bold text-gray-800">You won in {guesses} guesses!</p>
                            <button
                                onClick={startNumberGame}
                                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-2 rounded-lg"
                            >
                                Play Again
                            </button>
                        </div>
                    ) : (
                        <div className="text-center space-y-3">
                            <p className="text-3xl">🎮</p>
                            <button
                                onClick={startNumberGame}
                                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-3 rounded-lg hover:shadow-lg transition-all"
                            >
                                Start Game
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
