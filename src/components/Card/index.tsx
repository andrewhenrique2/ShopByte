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
    <div className="relative bg-card rounded-md p-4 flex flex-col items-center text-center mb-12 group shadow-sm cursor-pointer">
      {/* Imagem principal do cartão */}
      <div className="relative h-[250px] w-[200px] mb-4">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          style={{ objectFit: "cover" }}
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
              fill
              style={{ objectFit: "cover" }}
              className="rounded-md"
            />
          </div>
          {additionalImages[1] && (
            <div className="relative w-[100px] h-[100px]">
              <Image
                src={additionalImages[1]}
                alt="Processor"
                fill
                style={{ objectFit: "contain" }}
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

      {/* Container para o botão abaixo do card */}
      <div className="absolute inset-x-0 bottom-[-40px] flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="bg-green-500 text-white py-4 px-6 rounded-md w-full rounded-t-none font-black shadow-md hover:shadow-lg">
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
};

export default Card;
