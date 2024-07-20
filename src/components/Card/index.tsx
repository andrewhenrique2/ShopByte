import { useRouter } from 'next/router';
import Image, { StaticImageData } from 'next/image';
import { FaBolt } from 'react-icons/fa';

interface CardProps {
  id: string;
  imageSrc: StaticImageData | string;
  imageAlt: string;
  title: string;
  oldPrice?: string;
  newPrice?: string;
  installment?: string;
  additionalImages?: (StaticImageData | string)[];
  isOnPromotion?: boolean;
}

const Card = ({
  id,
  imageSrc,
  imageAlt,
  title,
  oldPrice,
  newPrice,
  installment,
  additionalImages = [],
  isOnPromotion = false,
}: CardProps) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push({
      pathname: `/produto/${id}`,
      query: {
        title,
        imageSrc: typeof imageSrc === 'string' ? imageSrc : imageSrc.src,
        oldPrice,
        newPrice,
        installment,
        additionalImages: JSON.stringify(
          additionalImages.map(img => (typeof img === 'string' ? img : img.src))
        ),
      },
    });
  };

  return (
    <div
      onClick={handleCardClick}
      className="relative bg-card rounded-md p-4 flex flex-col items-center text-center mb-12 group shadow-sm cursor-pointer"
    >
      <div className="relative w-full h-[250px] mb-4">
        <Image
          src={typeof imageSrc === 'string' ? imageSrc : imageSrc}
          alt={imageAlt}
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-md"
        />
      </div>

      {additionalImages.length > 0 && (
        <div className="flex justify-center items-center mb-4 space-x-2">
          {additionalImages.map((src, index) => (
            <div key={index} className="relative w-[100px] h-[100px]">
              <Image
                src={typeof src === 'string' ? src : src}
                alt={`Additional ${index + 1}`}
                fill
                style={{ objectFit: 'contain' }}
                className="rounded-md"
              />
            </div>
          ))}
        </div>
      )}

      {isOnPromotion && (
        <div className="absolute top-0 left-0 m-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          <FaBolt className="inline mr-1" />
          Promoção
        </div>
      )}

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

      <div className="absolute inset-x-0 bottom-[-40px] flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="bg-green-500 text-white py-4 px-6 rounded-md w-full rounded-t-none font-black shadow-md hover:shadow-lg">
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
};

export default Card;
