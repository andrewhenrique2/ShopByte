import { GetServerSideProps } from 'next';
import Image from 'next/image';
import bannerContainer from '../../../public/assets/bannerContainer.jpg';
import { FaStar, FaCalendar, FaBolt, FaGamepad } from 'react-icons/fa';
import { ItemDetailProps } from '../../types'; // Certifique-se de que este caminho está correto

const ItemDetail = ({ 
  id, 
  imageUrl, 
  additionalImages = [], 
  title, 
  oldPrice, 
  newPrice, 
  installment, 
  promotionEndTime, 
  releaseDate, 
  isNew = false, 
  isOnPromotion = false, 
  tags = [] 
}: ItemDetailProps) => {
  return (
    <div className="container mx-auto p-8 bg-card mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-[500px] w-full mb-4">
          <Image
            src={imageUrl}
            alt="Imagem do produto"
            fill
            style={{ objectFit: 'contain' }}
            className="rounded-md"
          />
        </div>

        <div className="flex flex-col space-y-4 text-gray-200 bg-container rounded-md p-4 w-[80%] mx-auto">
          <Image src={bannerContainer} alt="Banner de promoção" className="rounded-[6px] w-full" />

          <div className="flex w-full">
            <div className="flex items-center justify-center border border-0.01 border-black rounded-md rounded-e-none">
              <div className="text-center">
                <h2 className="text-[#e15219] font-black">FÉRIAS MODO ON</h2>
                <h3 className="text-card font-black">APROVEITE!</h3>
              </div>
            </div>
            <div className="flex items-center justify-center border border-0.01 border-black rounded-md rounded-s-none space-x-4">
              {/* Supondo que RemainingDays e Countdown sejam componentes válidos */}
              {/* <RemainingDays endTime={new Date(promotionEndTime)} /> */}
              {/* <Countdown endTime={new Date(promotionEndTime)} /> */}
            </div>
          </div>

          <div className="flex gap-8 px-2 py-4 justify-between">
            <span className="text-card text-lg">
              <FaStar className="inline mr-1" />
              {title}
            </span>
            <span className="text-card">
              <FaCalendar className="inline mr-1" />
              {releaseDate}
            </span>
          </div>

          <div className="space-y-4 px-2">
            {isNew && <span className="text-card">Novo</span>}
            {isOnPromotion && (
              <span className="text-card text-lg font-black">
                Promoção
              </span>
            )}
            <div className="flex gap-4">
              {tags.map((tag, index) => (
                <span key={index} className="text-card bg-gray-700 px-2 py-1 rounded-md">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4 py-4">
              {oldPrice && <span className="text-card line-through">{oldPrice}</span>}
              {newPrice && <span className="text-card font-black">{newPrice}</span>}
            </div>
            {installment && (
              <span className="text-card">
                {installment}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  // Simulação de dados para o produto
  return {
    props: {
      id,
      imageUrl: '', // Substitua por URL da imagem
      title: 'Exemplo de Produto',
      oldPrice: 'R$ 1.000,00',
      newPrice: 'R$ 900,00',
      installment: '10x de R$ 90,00 sem juros',
      releaseDate: '01/08/2024',
      isNew: true,
      isOnPromotion: true,
      tags: ['Tag1', 'Tag2'],
      promotionEndTime: new Date().toISOString(),
      additionalImages: [],
    },
  };
};

export default ItemDetail;
