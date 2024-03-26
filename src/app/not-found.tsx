import ContainerWrapper from "@/components/containerWrapper";

export default function NotFound() {
    const homeBg = '/img/home-bg.jpg';

    return (
        <ContainerWrapper image={homeBg} isBackgroundFilter={false}>
            <section className="items-center justify-center py-6 md:py-20 px-4 md:px-8 xl:px-0 xl:max-w-[470px] m-auto">
                <p className="text-[14px] text-orange-450 font-medium mb-4">Сторінку не знайдено</p>
                <h1 className="text-white text-[64px] font-extrabold leading-tight">Помилка 404</h1>
            </section>
        </ContainerWrapper>

    );
}