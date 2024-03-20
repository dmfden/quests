'use client';
import { IQuest } from "@/types";
import GameCard from "./gameCard";
import useAppStore from "@/store";
import { getAllQuests } from "@/api/quests";
import { useEffect } from "react";
import { GAMETYPES } from "@/constants";

function CardsContainer(): JSX.Element {
    const storeCards = useAppStore((state) => state.quests);
    const filter = useAppStore((state) => state.filter);
    const setQuestsToStore = useAppStore((state) => state.setQuests);
    const setQuestsFilter = useAppStore((state) => state.setFilter);
    let cardsFiltered: IQuest[] = [];

    useEffect(() => {
        getAllQuests().then((result) => setQuestsToStore(result));
    }, []);

    const handleClick = (event: React.SyntheticEvent): void => {
        if (!(event.target instanceof HTMLButtonElement)) {
            return;
        }
        const targetFilter = event.target.dataset.filter;
        if (targetFilter) {
            targetFilter !== filter ? setQuestsFilter(targetFilter) : '';

        }
    }

    filter === 'all' ? cardsFiltered = [...storeCards] : cardsFiltered = [...storeCards.filter((card) => card.type === filter)];
    const filterButtonClass = 'filter-button font-bold text-sm text-neutral-250 transition-all duration-700 hover:bg-orange-450 focus:bg-orange-450 hover:text-darkText-200 focus:text-darkText-200';
    return (
        <section>
            <section className="rounded-2xl mb-16">
                {GAMETYPES.map((gameType, index) => {
                    console.log(gameType);
                    let activeClass = '';
                    gameType === filter ? activeClass = ' active-filter' : false;
                    return <button data-filter={gameType} onClick={handleClick} className={filterButtonClass + activeClass} key={index}>{gameType}</button>
                })}
            </section>
            <section className="grid gap-4 lg:gap-[24px] grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                {cardsFiltered && cardsFiltered.map((card, index) => <GameCard {...card} key={`${card.title}-${card.id}`} />)}
            </section>
        </section>
    );
}

export default CardsContainer;