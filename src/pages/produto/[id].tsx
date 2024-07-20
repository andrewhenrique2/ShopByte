import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image  from 'next/image';
import { StaticImageData } from 'next/image';
import { FaStar, FaCalendar, FaBolt, FaCreditCard, FaBarcode, FaPlus } from 'react-icons/fa';
import { GetServerSideProps } from 'next';
import bannerContainer from '../../../public/bannerContainer.jpg';

interface ItemDetailProps {
  id: string;
  imageSrc: StaticImageData;
  additionalImages: string[];
  title: string;
  oldPrice?: string;
  newPrice?: string;
  installment?: string;
  promotionEndTime?: string;
  releaseDate?: string;
  isNew?: boolean;
  isOnPromotion?: boolean;
}

const ItemDetail = ({
  id,
  imageSrc,
  additionalImages,
  title,
  oldPrice,
  newPrice,
  installment,
  promotionEndTime,
  releaseDate,
  isNew,
  isOnPromotion,
}: ItemDetailProps) => {
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [showInstallments, setShowInstallments] = useState<boolean>(false);

  // Função para formatar moeda
  const formatCurrency = (value: number) => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  // Atualiza a conversão do preço
  const convertPrice = (price: string | undefined) => {
    if (!price) return 0;
    // Remove caracteres não numéricos e substitui vírgula por ponto
    const cleanedPrice = price.replace(/[^\d,]/g, '').replace(',', '.');
    return parseFloat(cleanedPrice);
  };

  const productPrice = convertPrice(newPrice);

  // Função para calcular parcelas
  const calculateInstallments = (price: number, maxInstallments: number) => {
    const installments = [];
    for (let i = 1; i <= maxInstallments; i++) {
      const installmentValue = (price / i).toFixed(2);
      installments.push({ number: i, value: installmentValue });
    }
    return installments;
  };

  const maxInstallments = 12;
  const installments = calculateInstallments(productPrice, maxInstallments);

  // Obter o valor da última parcela
  const lastInstallmentValue = installments[maxInstallments - 1]?.value || '0.00';

  useEffect(() => {
    if (promotionEndTime) {
      const endTime = new Date(promotionEndTime).getTime();
      const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = endTime - now;

        if (distance < 0) {
          clearInterval(interval);
          setTimeLeft(0);
        } else {
          setTimeLeft(distance);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [promotionEndTime]);

  const formatTime = (ms: number) => {
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div className="container mx-auto p-8 bg-card mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-[500px] w-full mb-4">
                  <Image
            src={imageSrc}
            alt="Imagem do produto"
            fill
            style={{ objectFit: 'contain' }}
            className="rounded-md"
          />
        </div>

        <div className="flex flex-col space-y-4 text-gray-200 bg-container rounded-md p-4 w-[80%] mx-auto">
          <Image src={bannerContainer} alt="Banner de promoção" className="rounded-[6px] w-full" />

          <div className="flex flex-col space-y-4 mb-4">
            <div className="flex w-full mb-4">
              <div className="flex items-center justify-center border border-0.01 border-black rounded-md rounded-e-none w-full">
                <div className="text-center">
                  <h2 className="text-[#e15219] font-black">{isOnPromotion ? 'FÉRIAS MODO ON' : 'OFERTA ESPECIAL'}</h2>
                  <h3 className="text-card font-black">APROVEITE!</h3>
                </div>
              </div>
              <div className="flex items-center justify-center border border-0.01 border-black rounded-md rounded-s-none space-x-4 w-full">
                <div className="flex flex-col items-center justify-center">
                  <span className="text-yellow-500 text-[14px] font-bold">Fim da Promoção</span>
                  <span className="flex flex-col items-center justify-center text-white text-[14px]">
                    {timeLeft > 0 ? formatTime(timeLeft) : 'Promoção Encerrada'}
                  </span>
                </div>
              </div>
            </div>

            <h1 className="text-[18px] font-bold mb-4">{title}</h1>

            <div className="flex items-center gap-4 mb-4">
              {isNew && (
                <span className="flex items-center gap-2 text-[14px] text-card font-bold">
                  <FaStar className="text-yellow-500 mb-0.5" />
                  NOVO
                </span>
              )}
              {releaseDate && (
                <span className="flex items-center gap-2 text-[14px] text-card">
                  <FaCalendar className="text-yellow-500 mb-0.5" />
                  {releaseDate}
                </span>
              )}
            </div>

            <div className="space-y-2 mb-4">
              {isOnPromotion && (
                <span className="flex items-center gap-2 text-[14px] text-card">
                  <FaBolt className="text-green-500 mb-0.5" />
                  EM PROMOÇÃO
                </span>
              )}
            </div>

            <div className="space-y-4 mb-4">
              <div className="flex items-center gap-2 text-card">
                <FaBarcode className="text-gray-500" />
                <span className="text-card line-through text-[16px]">De: {oldPrice}</span>
              </div>
              <div className="flex items-center gap-2 text-card">
                <FaCreditCard className="text-gray-500" />
                <span className="text-card font-black text-[20px]">Por: {formatCurrency(productPrice)}</span>
              </div>
              <div className="text-card">
                <span className="text-[14px]">À vista com 15% de desconto no boleto ou pix</span>
              </div>
              <div className="text-card mb-8">
                <span className="text-[20px] font-bold">{formatCurrency(productPrice)}</span>
                <span className="text-[16px] px-1">ou 12x de {formatCurrency(parseFloat(lastInstallmentValue))} sem juros no cartão</span>
                <button 
                  className="flex items-center gap-2 text-blue-500 font-semibold" 
                  onClick={() => setShowInstallments(!showInstallments)}
                >
                  <FaPlus />
                  Ver Parcelamento
                </button>
                <button className="flex items-center justify-center bg-green-500 text-white py-2 px-4 rounded-md w-full mt-4">
                  Comprar com Desconto
                  <FaPlus className="ml-2" />
                </button>
              </div>
              <div className="text-card">
                {showInstallments && (
                  <ul className="mt-2 space-y-2">
                    {installments.map((inst) => (
                      <li key={inst.number} className="flex justify-between text-[14px] text-card">
                        {inst.number}x parcela
                        <span>{formatCurrency(parseFloat(inst.value))}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const {
    id = '',
    imageSrc = '',
    additionalImages = [],
    title = '',
    oldPrice = '',
    newPrice = '',
    installment = '',
    promotionEndTime = '',
    releaseDate = '',
    isNew = false,
    isOnPromotion = false,
  } = query;

  return {
    props: {
      id: id as string,
      imageSrc: imageSrc as string,
      additionalImages: Array.isArray(additionalImages) ? additionalImages : [],
      title: title as string,
      oldPrice: oldPrice as string,
      newPrice: newPrice as string,
      installment: installment as string,
      promotionEndTime: promotionEndTime as string,
      releaseDate: releaseDate as string,
      isNew: isNew === 'true',
      isOnPromotion: isOnPromotion === 'true',
    },
  };
};

export default ItemDetail;
