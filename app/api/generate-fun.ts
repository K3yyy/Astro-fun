// import { generateText } from "ai"
//
// export async function POST(request: Request) {
//     try {
//         const { type } = await request.json()
//
//         const prompts: Record<string, string> = {
//             excuse:
//                 "Generate a funny and creative excuse for why someone is late to work. Make it absurd and hilarious. Keep it to 1-2 sentences.",
//             pickup: "Generate a funny and cheesy pickup line. Make it light-hearted and fun. Keep it to 1 sentence.",
//             roast:
//                 "Generate a funny, light-hearted roast or joke. Keep it playful and not mean-spirited. Keep it to 1-2 sentences.",
//             compliment:
//                 "Generate a genuine and sweet AI compliment about someone's personality or potential. Make it uplifting. Keep it to 1-2 sentences.",
//             horror:
//                 "Generate a short, mildly spooky mini horror story. It should be creepy but not extremely graphic. Keep it to 2-3 sentences.",
//         }
//
//         const { text } = await generateText({
//             model: "openai/gpt-4o-mini",
//             prompt: prompts[type] || prompts.excuse,
//             temperature: 0.8,
//             // maxTokens: 200,
//         })
//
//         return Response.json({ content: text })
//     } catch (error) {
//         console.error("[v0] Error in generate-fun:", error)
//         return Response.json({ error: "Failed to generate content" }, { status: 500 })
//     }
// }
