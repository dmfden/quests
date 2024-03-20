import ContainerWrapper from "@/components/containerWrapper";
import CardsContainer from "@/components/gamesTiles/cardsContainer";
import { getAllQuests } from "@/api/quests";


const homeBg = '/img/home-bg.jpg';

export default async function Home() {
  try {
    const res = await getAllQuests();
    return (
      <ContainerWrapper image={homeBg} filter={false}>
        <section className="items-center justify-between py-6 md:py-20 px-4 md:px-8 xl:px-0 xl:max-w-[1080px] m-auto">
          <span className="text-[14px] font-medium text-orange-450 inline-block mb-2">Ігри у Львові</span>
          <h1 className="text-white text-[54px] md:text-[64px] font-extrabold mb-[50px] leading-tight">В яку гру зіграємо?</h1>
          <CardsContainer cards={res} />
        </section>
      </ContainerWrapper>

    );
  } catch (error) {
    console.log('Error', error)
  }
}
