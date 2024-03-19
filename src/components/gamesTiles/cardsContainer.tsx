import { IGameCard } from "@/types";
import GameCard from "./gameCard";

interface ICardsContainerProps {
    cards: IGameCard[]
}

function CardsContainer({ cards }: ICardsContainerProps): JSX.Element {
    return (
        <section className="flex gap-4 lg:gap-[24px] flex-col md:flex-row md:flex-wrap">
            {cards && cards.map((card, index) => <GameCard {...card} key={index} />)}
        </section>
    );
}

export default CardsContainer;