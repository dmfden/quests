import { getAllQuests } from "@/api/quests";
import ContainerWrapper from "@/components/containerWrapper";
import GameDetails from "@/components/gameDetails";


export async function generateStaticParams() {
    const quests = await getAllQuests();
    return quests.map((quest) => ({
        id: quest.id.toString(),
    }));
}


export default async function Detailed({ params }: { params: { id: string } }) {
    const { id } = params;
    const selectedQuest = (await getAllQuests()).find((quest) => quest.id.toString() === id);
    if (selectedQuest) {
        const pageBackground = `/${selectedQuest.coverImg}`;
        return (
            <ContainerWrapper image={pageBackground} filter={true}>
                <section className="grid grid-cols-1 py-6 md:py-20 px-4 md:px-8 xl:px-0 xl:max-w-[1080px] m-auto">
                    <GameDetails {...selectedQuest} />
                </section>
            </ContainerWrapper>
        );
    }

    return (
        <></>
    );
}
