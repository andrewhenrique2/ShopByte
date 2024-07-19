import Image from "next/image";

const Card = ({
    imageSrc,
    imageAlt,
    title,
    oldPrice,
    newPrice,
    installment,
    additionalImages = [],
}: any) => {
    return (
        <div className="bg-card rounded-md p-4 flex flex-col items-center text-center">
            {/* Imagem principal do cartão */}
            <div className="relative h-[250px] w-[200px] mb-4">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                />
            </div>

            {/* Container para imagens adicionais */}
            {additionalImages.length > 0 && (
                <div className="flex justify-center items-center mb-4 space-x-2">
                    <div className="relative w-[100px] h-[50px]">
                        <Image
                            src={additionalImages[0]}
                            alt="Additional"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-md"
                        />
                    </div>
                    {additionalImages[1] && (
                        <div className="relative w-[100px] h-[100px]">
                            <Image
                                src={additionalImages[1]}
                                alt="Processor"
                                layout="fill"
                                objectFit="contain"
                                className="rounded-md"
                            />
                        </div>
                    )}
                </div>
            )}

            {/* Título e informações do cartão */}
            <h2 className="text-bg text-sm mb-2">{title}</h2>
            {oldPrice && (
                <span className="text-bg text-sm line-through mb-1">De: {oldPrice}</span>
            )}
            {newPrice && (
                <span className="text-bg text-lg mb-1">Por: {newPrice}</span>
            )}
            {installment && (
                <span className="text-bg text-sm">{installment}</span>
            )}
        </div>
    );
};

export default Card;
