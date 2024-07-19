import Image from 'next/image';
import { useRouter } from 'next/router';
import { StaticImageData } from 'next/image';

// Ajuste os tipos de props conforme necessário
interface CardProps {
  id: string;
  imageSrc: StaticImageData;
  imageAlt: string;
  title: string;
  oldPrice?: string;
  newPrice?: string;
  installment?: string;
  additionalImages?: StaticImageData[];
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
}: CardProps) => {
  const router = useRouter();

  const handleCardClick = () => {
    const formattedTitle = title.toLowerCase().replace(/[^a-z0-9]/g, '-');
    router.push(`/produto/${id}-${formattedTitle}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="relative bg-card rounded-md p-4 flex flex-col items-center text-center mb-12 group shadow-sm cursor-pointer"
    >
      <div className="relative h-[250px] w-[200px] mb-4">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-md"
        />
      </div>

      {additionalImages.length > 0 && (
        <div className="flex justify-center items-center mb-4 space-x-2">
          {additionalImages.map((src, index) => (
            <div key={index} className={`relative w-[100px] h-[100px] ${index > 0 ? 'ml-2' : ''}`}>
              <Image
                src={src}
                alt={`Additional ${index + 1}`}
                fill
                style={{ objectFit: 'contain' }}
                className="rounded-md"
              />
            </div>
          ))}
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
