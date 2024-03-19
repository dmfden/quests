import Image from "next/image";
import ContainerWrapper from "@/components/containerWrapper";
import CardsContainer from "@/components/gamesTiles/cardsContainer";
import { IGameCard } from "@/types";

const testCard1: IGameCard = {
  id: "1",
  title: "Склеп",
  peopleCount: [2, 5],
  level: "hard",
  previewImg: "/img/cover-sklep.jpg"
}

const testCard2: IGameCard = {
  id: "2",
  title: "Склеп",
  peopleCount: [2, 5],
  level: "hard",
  previewImg: "/img/cover-sklep.jpg"
}

const testCard3: IGameCard = {
  id: "3",
  title: "Склеп",
  peopleCount: [2, 5],
  level: "hard",
  previewImg: "/img/cover-sklep.jpg"
}

const testCards = [testCard1, testCard2, testCard3];
const homeBg = '/img/home-bg.jpg';

export default function Home() {
  return (
    <ContainerWrapper image={homeBg}>
      <section className="items-center justify-between py-20 px-4 md:px-8 xl:px-0 xl:max-w-[1080px] m-auto box-border">
        <span className="text-[14px] font-medium text-orange-450 inline-block mb-2">Ігри у Львові</span>
        <h1 className="text-white text-[64px] font-extrabold mb-[50px]">В яку гру зіграємо?</h1>
        <CardsContainer cards={testCards} />
      </section>
    </ContainerWrapper>

  );
}
