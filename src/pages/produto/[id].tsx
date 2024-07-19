import { useRouter } from 'next/router';
import Image from 'next/image';
import pc from '../../assets/pc.jpg';
import geforce from '../../assets/geforce.webp';
import RYZEN from '../../../public/assets/ryzen.png';
import bannerContainer from '../../../public/assets/bannerContainer.jpg';
import { FaStar, FaCalendar, FaBolt, FaInfoCircle } from 'react-icons/fa';

const ItemDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const imageUrl = pc;
  const additionalImages = [geforce, RYZEN];

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

        <div className="flex flex-col space-y-4 text-gray-200 bg-container rounded-md p-2">
          <Image src={bannerContainer} alt='' className='rounded-[6px] w-full '/>

          <div className='flex w-full '>
            <div className="w-full flex items-center justify-center border border-0.01 border-black rounded-md rounded-e-none">
              <div className="text-center">
                <h2 className="text-[#e15219] font-black">FÉRIAS MODO ON</h2>
                <h3 className='text-card font-black'>APROVEITE!</h3>
              </div>
            </div>
            <div className="w-full flex items-center justify-center border border-0.01 border-black rounded-md rounded-s-none">
              <div className="text-center">
                <h1 className='text-card font-black text-2xl'>2 DIAS CRONOMETRO</h1>
              </div>
            </div>
          </div>

          <div className="flex gap-8 px-2 py-2 items-center justify-start">
            <span className="flex items-center gap-2 text-[14px]">
              <FaStar className="text-yellow-500 mb-0.5" />
              NOVO
            </span>
            <span className="flex items-center gap-2 text-[14px]">
              <FaCalendar className="text-[#FFA500] mb-0.5" />
              12 meses de garantia
            </span>
          </div>

          <h1 className="text-[18px] text-gray-200">PC Gamer T-MOBA Eagle Intel i3 10100F / NVIDIA GeForce GT 1030 / 8GB DDR4 / SSD 240GB</h1>

          <div className="flex gap-8 px-2 py-2 items-center justify-start">
            <span className="flex items-center gap-2 text-[14px]">
              <FaBolt className="text-green-500" /> {/* Ícone de raio */}
              <h1 className="text-lg">Disponível</h1>
            </span>
            <span className="flex items-center gap-2 text-[14px]">
              <FaInfoCircle className="text-gray-500" /> {/* Ícone de círculo com "i" */}
              <h1 className="text-lg">Mais Informações</h1>
            </span>
          </div>

          <span className="text-xl font-semibold text-gray-200">Preço: R$ 3.499,90</span>

          <div className="flex space-x-4 mt-4">
            <button className="bg-green-500 text-white py-2 px-4 rounded-md font-semibold">
              Comprar
            </button>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md font-semibold">
              Procurar CEP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
