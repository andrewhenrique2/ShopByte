import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { StaticImageData } from 'next/image';
import { FaBolt } from 'react-icons/fa';
import Image from 'next/image';

// Interface para o tipo de tempo restante
interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const getRemainingTime = (endTime: string): TimeRemaining | null => {
  const endDate = new Date(endTime).getTime();
  const now = new Date().getTime();
  const distance = endDate - now;

  if (distance < 0) return null;

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000),
  };
};

interface CardProps {
  id: string;
  imageSrc: StaticImageData | string;
  imageAlt: string;
  title: string;
  oldPrice?: string;
  newPrice?: string;
  additionalImages?: (StaticImageData | string)[];
  moreImages?: (StaticImageData | string)[];
  isOnPromotion?: boolean;
  promotionEndTime?: string;
  processor?: string;
  memory?: string;
  storage?: string;
}

const Card = ({
  id,
  imageSrc,
  imageAlt,
  title,
  oldPrice,
  newPrice,
  additionalImages = [],
  moreImages = [],
  isOnPromotion = false,
  promotionEndTime,
  processor,
  memory,
  storage,
}: CardProps) => {
  const router = useRouter();
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining | null>(null);

  useEffect(() => {
    if (promotionEndTime) {
      const updateRemainingTime = () => {
        const time = getRemainingTime(promotionEndTime);
        setTimeRemaining(time);
      };

      updateRemainingTime();
      const interval = setInterval(updateRemainingTime, 1000);

      return () => clearInterval(interval);
    }
  }, [promotionEndTime]);

  const calculateInstallment = (price: string | undefined) => {
    if (!price) return '';

    const priceValue = parseFloat(price.replace('R$ ', '').replace('.', '').replace(',', '.'));
    const installmentValue = (priceValue / 12).toFixed(2).replace('.', ',');

    return `12x de R$ ${installmentValue} sem juros`;
  };

  const handleCardClick = () => {
    router.push({
      pathname: `/produto/${id}`,
      query: {
        title,
        imageSrc: typeof imageSrc === 'string' ? imageSrc : (imageSrc as StaticImageData).src,
        oldPrice,
        newPrice,
        additionalImages: JSON.stringify(
          additionalImages.map(img => (typeof img === 'string' ? img : (img as StaticImageData).src))
        ),
        moreImages: JSON.stringify(
          moreImages.map(img => (typeof img === 'string' ? img : (img as StaticImageData).src))
        ),
        isOnPromotion,
        processor,
        memory,
        storage,
        promotionEndTime,
      },
    });
  };

  const installment = calculateInstallment(newPrice);

  return (
    <div
      onClick={handleCardClick}
      className="relative bg-card rounded-md p-4 flex flex-col items-center text-center mb-12 group shadow-sm cursor-pointer below-768:w-full"
    >
      <div className="relative w-full h-[250px] mb-6">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          style={{ objectFit: 'contain' }}
          className="rounded-md"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {additionalImages.length > 0 && (
          <div className="absolute bottom-[-30px] right-[-15px] flex space-x-2 overflow-x-auto">
            {additionalImages.map((src: StaticImageData | string, index: number) => (
              <div key={index} className="w-[120px] h-[80px] flex-shrink-0">
                <Image
                  src={src}
                  alt={`Additional ${index + 1}`}
                  fill
                  style={{ objectFit: 'contain' }}
                  className="rounded-md"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-col absolute left-4 top-4">
        {processor && (
          <div className="text-white px-2 font-black bg-black rounded-md text-[11px] mb-1 border-solid flex flex-col text-start">
            Processador{' '}
            <span
              className={`font-black text-[14px] ${processor.toLowerCase().includes('ryzen') ? 'text-orange-500' : 'text-blue-500'}`}
            >
              {processor}
            </span>
          </div>
        )}
        {memory && (
          <div className="text-white px-2 text-start font-black bg-black rounded-md text-[11px] mb-1 border-solid flex flex-col">
            Memória <span className='text-pink font-black text-[14px]'>{memory}</span>
          </div>
        )}
        {storage && (
          <div className="text-white font-black text-start px-2 bg-black rounded-md text-[11px] mb-1 border-solid flex flex-col">
            Armazenamento <span className='text-cian font-black text-[14px]'>{storage}</span>
          </div>
        )}
      </div>

      {isOnPromotion && (
        <div className="absolute top-0 right-0 m-4 fire-background text-white text-xs font-bold px-2 py-1 rounded">
          <FaBolt className="inline mr-1" />
          Promoção
          {promotionEndTime && timeRemaining && (
            <div className="mt-2 text-xs">
              {timeRemaining.days}d {timeRemaining.hours}h {timeRemaining.minutes}m {timeRemaining.seconds}s
            </div>
          )}
        </div>
      )}

      <h2 className="text-bg text-[16px] font-sans font-semibold mb-2">{title}</h2>
      {oldPrice && (
        <span className="text-bg text-[16px] line-through mb-1 ">De: {oldPrice}</span>
      )}
      {newPrice && (
        <span className="text-verdao font-black text-[25px] mb-1">{newPrice} <span className='text-sm font-sans'>à vista</span></span>
      )}
      {installment && (
        <span className="text-gray-700 text-[16px]">{installment}</span>
      )}

      <div className="absolute inset-x-0 bottom-[-40px] flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="bg-green-500 text-white py-4 px-6 rounded-md w-full rounded-t-none font-black shadow-md hover:shadow-lg focus:shadow-strong-lg">
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
};

export default Card;
