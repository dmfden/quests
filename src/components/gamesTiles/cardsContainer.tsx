'use client';
import { IGameCard, IQuest } from "@/types";
import GameCard from "./gameCard";
import useAppStore from "@/store";

interface ICardsContainerProps {
    cards: IQuest[],
}

function CardsContainer({ cards }: ICardsContainerProps): JSX.Element {
    let storeCards = useAppStore((state) => state.quests);
    const filter = useAppStore((state) => state.filter);
    const setQuestsToStore = useAppStore((state) => state.setQuests);
    const setQuestsFilter = useAppStore((state) => state.setFilter);

    // console.log('filter = ', filter);
    if (filter !== 'all') {
        //storeCards = cards.filter((card) => card.type === filter);
        setQuestsToStore(cards.filter((card) => card.type === filter));
    } else {
        setQuestsToStore(cards);
    }

    const handleClick = (event: React.SyntheticEvent) => {
        if (!(event.target instanceof HTMLButtonElement)) {
            return;
        }
        const targetFilter = event.target.dataset.filter;
        if (targetFilter) {
            targetFilter !== filter ? setQuestsFilter(targetFilter) : '';

        }
        //console.log(event.target.dataset.filter)
    }

    return (
        <section>
            <section>
                <button data-filter="all" onClick={handleClick}>All</button>
                <button data-filter="adventures" onClick={handleClick}>adventures</button>
            </section>
            <section className="grid gap-4 lg:gap-[24px] grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                {storeCards && storeCards.map((card, index) => <GameCard {...card} key={index} />)}
            </section>
        </section>

    );
}

export default CardsContainer;