import { IQuest } from "@/types";
import { TEXTUA } from "@/constants";
import Link from "next/link";

function GameDetails({ type, title, coverImg, duration, peopleCount, level, description, id }: IQuest): JSX.Element {
    const textTypeUa = TEXTUA[type];
    const textLevelUa = TEXTUA[level];

    return (
        <article className="xl:w-6/12 place-self-end">
            <span className="text-yellow-450 text-sm inline-block mb-2 capitalize">{textTypeUa}</span>
            <h2 className="text-[60px] md:text-[92px] font-black my-4 pb-10 text-pretty" style={{ lineHeight: 0.8 }}>{title}</h2>
            <div className="md:pl-11">
                <div className="text-yellow-450 text-sm flex gap-6 items-center mb-6">
                    <span className="before:content-clockIconY before:inline-block before:mr-2 flex items-center">{duration} ХВ</span>
                    <span className="border-l-2 border-yellow-450 border-solid inline-block h-[14px]">&nbsp;</span>
                    <span className="before:content-personIconY before:inline-block before:mr-2 flex items-center">{peopleCount.join("-")} осіб</span>
                    <span className="border-l-2 border-yellow-450 border-solid inline-block h-[14px]">&nbsp;</span>
                    <span className="before:content-puzzleIconY before:inline-block before:mr-2 flex items-center">{textLevelUa}</span>
                </div>
                <p className="mb-10 text-neutral-250 text-[15px] font-medium text-pretty">{description}</p>
                <Link href={`?showModal=ORDER`} className="py-[14px] px-11 text-base font-semibold text-darkText-100 bg-yellow-450 rounded-md hover:brightness-200 focus:brightness-200" style={{ boxShadow: "0px 2px 30px 0px #FEC43280" }}>Взяти участь</Link>
            </div>
        </article>
    );
}

export default GameDetails;