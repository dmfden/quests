import Image from "next/image";

interface IContainerProps {
    image?: string,
    filter: boolean,
    children: React.ReactNode
}

function ContainerWrapper({ image, filter, children }: IContainerProps): JSX.Element {
    let containerClass = "container-content pt-[132px] md:pt-[72px]";
    filter ? containerClass += " backdrop-brightness-50" : '';

    return (
        <div className="container-wrapper bg-auto bg-no-repeat md:bg-cover bg-left" style={{ backgroundImage: `url(${image})` }}>
            <div className={containerClass}>
                {children}
            </div>
        </div>
    );
}

export default ContainerWrapper;