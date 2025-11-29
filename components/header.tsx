export default function Header() {
    return (
        <header className="relative overflow-hidden border-b border-purple-200/50 bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 backdrop-blur-sm">
            {/*<div className="mx-auto max-w-7xl px-4 py-8 md:px-8">*/}
            {/*    <div className="flex items-center justify-center gap-3">*/}
            {/*        <div className="text-center">*/}
            {/*            <h1 className="text-3xl md:text-4xl text-black font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text ">*/}
            {/*                Celestial*/}
            {/*            </h1>*/}
            {/*            <p className="text-sm text-gray-700 mt-1">Daily Random</p>*/}
            {/*        </div>*/}

            {/*    </div>*/}
            {/*</div>*/}

            {/* Decorative elements */}
            <div className="absolute top-2 left-2 w-2 h-2 bg-purple-300/40 rounded-full animate-float" />
            <div
                className="absolute bottom-4 right-4 w-3 h-3 bg-pink-300/40 rounded-full animate-float"
                style={{ animationDelay: "1s" }}
            />
            <div
                className="absolute top-6 right-6 w-1.5 h-1.5 bg-blue-300/40 rounded-full animate-float"
                style={{ animationDelay: "2s" }}
            />
        </header>
    )
}
