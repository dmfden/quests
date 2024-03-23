import { GAMETYPES, TEXTUA } from "@/constants";
import Link from "next/link";

interface IGameFilterProps {
    activeFilter: string,
}

function GamesFilter({ activeFilter }: IGameFilterProps): JSX.Element {

    const filterLink = 'filter-button inline-block font-bold text-sm text-neutral-250 transition-all duration-700 hover:bg-yellow-450 focus:bg-yellow-450 hover:text-darkText-200 focus:text-darkText-200 capitalize';

    return (
        <section className="rounded-2xl mb-16 overflow-hidden border-[#615e5c] w-max">
            {GAMETYPES.map((gameType, index) => {
                let activeClass = '';
                if (gameType === activeFilter) {
                    activeClass += ' active';
                }
                return <Link href={'?filter=' + `${gameType}`} key={index} className={filterLink + activeClass}>
                    {TEXTUA[gameType]}
                </Link>
            })}
        </section>
    );
}

export default GamesFilter;