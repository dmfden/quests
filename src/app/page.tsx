import { getAllQuests } from "@/actions/getAllQuestsAction";
import ContainerWrapper from "@/components/containerWrapper";
import GamesFilter from "@/components/gamesFilter";
import filterGames from "@/components/gamesTiles/filterGames";
import GamesHolder from "@/components/gamesTiles/gamesHolder";

interface IHomeParams {
  searchParams: { [key: string]: string | undefined }
}

export default async function Home({ searchParams }: IHomeParams) {
  const homeBg = '/img/home-bg.jpg';
  const gamesFilter = searchParams["filter"] ?? "all";
  const quests = await getAllQuests();
  if (quests) {
    const filteredQuests = filterGames(quests, gamesFilter);
    return (
      <ContainerWrapper image={homeBg} isBackgroundFilter={false}>
        <section className="items-center justify-between py-6 md:py-20 px-4 md:px-8 xl:px-0 xl:max-w-[1080px] m-auto">
          <span className="text-[14px] font-medium text-orange-450 inline-block mb-2">Ігри у Львові</span>
          <h1 className="text-white text-[54px] md:text-[64px] font-extrabold mb-[50px] leading-tight">В яку гру зіграємо?</h1>
          <GamesFilter activeFilter={gamesFilter} />
          {filteredQuests && <GamesHolder games={filteredQuests} />}
        </section>
      </ContainerWrapper>

    );
  }
}