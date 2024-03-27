import ContainerWrapper from "@/components/containerWrapper";

export default function Contacts() {
    const backImage = '/img/home-bg.jpg';

    return (<ContainerWrapper image={backImage} isBackgroundFilter={false}>
        <section className="items-center justify-between py-6 md:py-20 px-4 md:px-8 xl:px-0 xl:max-w-[1080px] m-auto">
            <span className="text-[14px] font-medium text-orange-450 inline-block mb-2">Ігри у Львові</span>
            <h1 className="text-white text-[54px] md:text-[64px] font-extrabold mb-[50px] leading-tight">Контакти</h1>
            <div className="flex flex-wrap md:flex-nowrap gap-4">
                <div className="font-medium text-[15px] text-neutral-250 flex flex-col gap-9 w-full md:w-1/3">
                    <div>
                        <h4 className="text-sm font-bold mb-3">Адреса</h4>
                        <p>Львів, Площа Ринок, 3Б</p>
                    </div>
                    <div>
                        <h4 className="text-sm font-bold mb-3">Години роботи</h4>
                        <p>Щоденно, з 9:00 до 20:00</p>
                    </div>
                    <div>
                        <h4 className="text-sm font-bold mb-3">Телефон</h4>
                        <p>+38 (050) 555-99-55</p>
                    </div>
                    <div>
                        <h4 className="text-sm font-bold mb-3">E-mail</h4>
                        <p>lviv.games@game.ua</p>
                    </div>
                </div>
                <div className="w-full md:w-2/3 rounded-2xl overflow-hidden">
                    <iframe className="w-full h-full" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Львів, Площа Ринок, 3Б&amp;t=&amp;z=20&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                </div>
            </div>
        </section>
    </ContainerWrapper>);

}
