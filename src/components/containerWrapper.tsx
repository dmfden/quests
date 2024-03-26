import Image from "next/image";


interface IContainerProps {
    image?: string,
    isBackgroundFilter: boolean,
    children: React.ReactNode
}

function ContainerWrapper({ image, isBackgroundFilter, children }: IContainerProps): JSX.Element {
    let contentContainerClass = "container-content pt-[132px] md:pt-[72px]";
    if (isBackgroundFilter) {
        contentContainerClass += " backdrop-brightness-50";
    }

    return (
        <div className="container-wrapper bg-auto bg-no-repeat md:bg-cover bg-left" style={{ backgroundImage: `url(${image})` }}>
            <div className={contentContainerClass}>
                {children}
            </div>
        </div>
    );
}

export default ContainerWrapper;