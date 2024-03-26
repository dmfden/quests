import { getAllQuests } from "@/api/quests";
import ContainerWrapper from "@/components/containerWrapper";
import GameDetails from "@/components/gameDetails";
import { notFound } from "next/navigation";
import ModalWindow from "@/components/modalWindow";
import Form from "@/components/orderForm/Form";


export async function generateStaticParams() {
    const quests = await getAllQuests();
    return quests.map((quest) => ({
        id: quest.id.toString(),
    }));
}

interface IDetailedProps {
    params: {
        id: string,
    },
    searchParams: {
        showModal: ModalType
    }

}

enum ModalType {
    ORDER = "ORDER"
}

export default async function Detailed(params: IDetailedProps) {

    const { params: { id } } = params;
    const { searchParams: { showModal } } = params;
    const allQuests = await getAllQuests();

    const openModelHandler = () => {
        console.log("fire !!!!");
    }

    if (allQuests) {
        const selectedQuest = (allQuests).find((quest) => quest.id.toString() === id);
        if (!selectedQuest) {
            notFound();
        }
        const pageBackground = `/${selectedQuest.coverImg}`;

        return (
            <ContainerWrapper image={pageBackground} isBackgroundFilter={true}>
                <section className="grid grid-cols-1 py-6 md:py-20 px-4 md:px-8 xl:px-0 xl:max-w-[1080px] m-auto">
                    <GameDetails {...selectedQuest} />
                </section>
                {showModal === ModalType.ORDER && <ModalWindow><Form id={id} peopleCount={selectedQuest.peopleCount} /></ModalWindow>}
            </ContainerWrapper>
        );
    }
}
