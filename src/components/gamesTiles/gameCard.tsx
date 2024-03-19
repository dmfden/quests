import { IGameCard } from "@/types";
import Image from "next/image";



function GameCard({ id, title, peopleCount, level, previewImg }: IGameCard): JSX.Element {
    const imgAlt = `Game ${title} card`;
    let levelUaText: string;
    const countStr = peopleCount.join('-');
    const imgPath = `/${previewImg}`;

    switch (level) {
        case 'hard':
            levelUaText = 'сложний';
            break;
        case 'medium':
            levelUaText = 'середній';
            break;
        default: levelUaText = 'легкий';
    }


    return (
        <article className="cardTile md:w-1/3 relative rounded-2xl overflow-hidden hover:brightness-110 hover:contrast-110">
            <div className="card-image relative">
                <Image
                    alt={imgAlt}
                    src={imgPath}
                    quality={75}
                    sizes="100%"
                    fill
                    style={{
                        objectFit: 'fill',
                    }}
                    className="card-image-filtered"
                />
                <div className="absolute -inset-0 gradient-filter"></div>
            </div>

            <div className="card-content pr-8 pb-5 flex flex-col place-items-end">
                <h3 className="mt-auto text-white text-2xl font-bold mb-4">{title}</h3>
                <div className="flex gap-2 text-[13px] opacity-80 items-center">
                    <span className="before:content-personIcon before:inline-block before:mr-2 before:relative before:top-1">{countStr} осіб</span>
                    <span className="border-l border-white border-solid opacity-50">&nbsp;</span>
                    <span className="inline-block before:content-puzzleIcon before:inline-block before:mr-2 before:relative before:top-[3px]">{levelUaText}</span>
                </div>
            </div>
        </article>
    );
}
export default GameCard;