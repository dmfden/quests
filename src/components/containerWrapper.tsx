import Image from "next/image";

interface IContainerProps {
    image?: string,
    children: React.ReactNode
}

function ContainerWrapper({ image, children }: IContainerProps): JSX.Element {


    return (
        <div className="container-wrapper">
            {image && <Image
                role="presentation"
                alt=""
                src={image}
                quality={75}
                sizes="100vw"
                fill
                style={{
                    objectFit: 'fill',
                }}
                className="bg-image"
            />}
            <div className="container-content pt-[132px] md:pt-[72px]">
                {children}
            </div>
        </div>
    );
}

export default ContainerWrapper;