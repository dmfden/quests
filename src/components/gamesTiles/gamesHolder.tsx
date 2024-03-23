import { IQuest } from "@/types";
import Link from "next/link";
import GameCard from "./gameCard";

interface IGamesHolder {
    games: IQuest[]
}

function GamesHolder({ games }: IGamesHolder): JSX.Element {
    return (
        <section className="grid gap-4 lg:gap-[24px] grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {games && games.map((card, index) => <Link href={`/detailed-quest/${card.id}`} key={`${card.title}-${card.id}`}><GameCard {...card} /></Link>)}
        </section>
    );
}

export default GamesHolder;