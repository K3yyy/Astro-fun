import { redirect } from "next/navigation";

export default function Home() {
    // Automatically redirect to /funny-game
    redirect("/funny-game");
}
