import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaStar, FaCalendar, FaBolt, FaCreditCard, FaBarcode, FaPlus, FaInfoCircle, FaCartPlus, FaHeart, FaWhatsapp, FaShareAlt  } from 'react-icons/fa';
import bannerContainer from '../../../public/bannerContainer.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useFavoritos } from '../favoritos/FavoritosContext';
import { toast } from 'react-toastify';


interface ItemDetailProps {
  imageSrc: string;
  moreImages: string[];
  title: string;
  oldPrice: string;
  newPrice: string;
  promotionEndTime?: string;
  releaseDate?: string;
  isNew?: boolean;
  isOnPromotion?: boolean;
  processor?: string;
  memory?: string;
  storage?: string;
  id: string;
}

const ItemDetail = ({
  imageSrc,
  moreImages,
  title,
  oldPrice,
  newPrice,
  promotionEndTime,
  releaseDate,
  isNew,
  isOnPromotion,
  processor,
  memory,
  storage,
  id
}: ItemDetailProps) => {
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [showInstallments, setShowInstallments] = useState<boolean>(false);
  const [mainImage, setMainImage] = useState<string>(imageSrc);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const { favoritos, adicionarAFavorito, excluirAFavorito } = useFavoritos();

  const formatCurrency = (value: number) => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  const convertPrice = (price: string | undefined) => {
    if (!price) return 0;
    const cleanedPrice = price.replace(/[^\d,]/g, '').replace(',', '.');
    return parseFloat(cleanedPrice);
  };

  const productPrice = convertPrice(newPrice);

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

  const lastInstallmentValue = installments[maxInstallments - 1]?.value || '0.00';

  const updateTimeLeft = () => {
    if (promotionEndTime) {
      const endTime = new Date(promotionEndTime).getTime();
      const now = new Date().getTime();
      const distance = endTime - now;

      if (distance < 0) {
        setTimeLeft(0);
      } else {
        setTimeLeft(distance);
      }
    }
  };

  useEffect(() => {
    updateTimeLeft();
    const interval = setInterval(updateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, [promotionEndTime]);

  const formatTime = (ms: number) => {
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleFavoriteClick = () => {
    const item = { id, title, imageSrc, newPrice, oldPrice };
    const existingFavorite = favoritos.find(fav => fav.id === id);

    if (existingFavorite) {
      excluirAFavorito(id);
      alert('Item removido dos favoritos');
    } else {
      adicionarAFavorito(item);
      alert('Item adicionado aos favoritos!');
    }
  };


  const handleFavoriteToggle = () => {
    console.log('Ícone de favorito clicado'); // Adicione isso para verificar o clique
    const item = { id, title, imageSrc, newPrice, oldPrice };
    const existingFavorite = favoritos.find(fav => fav.id === id);
  
    if (existingFavorite) {
      excluirAFavorito(id);
      toast.error(
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-lg font-semibold">Removido</p>
          <p>Item removido da Lista de Desejos</p>
          <button className="Toastify__toast-button" onClick={() => toast.dismiss()}>
            OK
          </button>
        </div>,
        {
          className: 'custom-toast-error',
        }
      );
    } else {
      adicionarAFavorito(item);
      toast.success(
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-lg font-semibold">Sucesso!</p>
          <p>Adicionado à Lista de Desejos</p>
          <button className="Toastify__toast-button" onClick={() => toast.dismiss()}>
            OK
          </button>
        </div>,
        {
          className: 'custom-toast-success',
        }
      );
    }
  };
  
  
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };



  return (
    
    <div className="container mx-auto px-8 pt-5 pb-4 bg-white max-w-screen-2xl rounded-md m-24  below-768:bg-container pt-24 below-768:m-0">


<div className="flex justify-end space-x-4 pr-8 below-768:pr-0">

  {/* Ícone do WhatsApp */}
  <div className="relative group">
    <FaWhatsapp
      size={24}
      className="cursor-pointer text-green-500 group-hover:text-green-400 transition-colors duration-300"
      aria-label="Compartilhar no WhatsApp"
    />
    <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 invisible group-hover:visible text-sm bg-gray-700 text-white rounded-lg px-2 py-1 whitespace-nowrap">
      Compartilhar no WhatsApp
    </span>
  </div>

  {/* Ícone de compartilhar */}
  <div className="relative group">
    <FaShareAlt
      size={24}
      className="cursor-pointer text-gray-600 group-hover:text-gray-500 transition-colors duration-300"
      aria-label="Compartilhar"
    />
    <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 invisible group-hover:visible text-sm bg-gray-700 text-white rounded-lg px-2 py-1 whitespace-nowrap">
      Compartilhar
    </span>
  </div>


  {/* Ícone de favorito */}
  <div  className="relative group">
    <FaHeart
      size={24}
      className="cursor-pointer text-orange-500 group-hover:text-red-500 transition-colors duration-300"
      aria-label="Adicionar ao favoritos"
      onClick={handleFavoriteToggle}
    />
    <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 invisible group-hover:visible text-sm bg-gray-700 text-white rounded-lg px-2 py-1 whitespace-nowrap">
      Adicionar ao favoritos
    </span>
  </div>
</div>



      <div className="flex mr-7 pb-5 border-b border-gray-300 mb-4 below-768:mr-0"/>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-full w-full flex justify-center items-center">



          {/* Imagem principal */}
          <div className="relative  left-0 
          md:left-24 h-full w-full max-w-[500px] below-1500:max-w-[300px] below-1000:max-w-[200px]">
            <Image
              src={mainImage}
              alt={title}
              layout="fill"
              objectFit="contain"
              className="rounded-m "
            />
          </div>
    
          {/* Imagens adicionais do produto */}

          {isMobile ? (
            <div className="w-full mt-[-200px]">
              <Slider {...carouselSettings}>
                {moreImages.map((imgSrc: string, index: number) => (
                  <div key={index} className="px-2 mt-44">
                    <button
                      onClick={() => setMainImage(imgSrc)} // Atualiza a imagem principal ao clicar
                      className="relative w-full overflow-hidden mb-2 transition-transform transform hover:scale-105 hover:opacity-80"
                    >
                      <Image
                        src={imgSrc}
                        alt={`Imagem adicional ${index + 1}`}
                        layout="responsive"
                        width={120}
                        height={80}
                        style={{ objectFit: 'contain' }}
                        className="rounded-md cursor-pointer"
                      />
                    </button>
                  </div>
                ))}
              </Slider>
            </div>
          ) : (
            <div className="absolute flex flex-row md:flex-col items-center md:items-start md:justify-start left-0 translate-x-0 md:translate-x-0 max-h-[550px] overflow-y-auto md:overflow-hidden space-x-4 md:space-x-0 space-y-4 md:space-y-4 md:mt-0 mt-44  mt-96 ">
              {moreImages.map((imgSrc: string, index: number) => (
                <button
                  onClick={() => setMainImage(imgSrc)} // Atualiza a imagem principal ao clicar
                  key={index}
                  className="relative w-[50px] h-[50px] md:w-[120px] md:h-[150px] overflow-hidden mb-2 transition-transform transform hover:scale-105 hover:opacity-80"
                >
                  <Image
                    src={imgSrc}
                    alt={`Imagem adicional ${index + 1}`}
                    layout="responsive"
                    width={120}
                    height={80}
                    style={{ objectFit: 'contain' }}
                    className="rounded-md cursor-pointer"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Informações adicionais do produto */}
          <div className="absolute flex flex-col left-[150px]  md:items-start md:left-[250px] top-12 below-768:left-[10px]">
            {processor && (
              <div className="text-white px-2 font-black bg-black rounded-md text-[16px] mb-1 border-solid flex flex-col height-10 below-768:text-[12px]">
                Processador{' '}
                <span
                  className={`font-black text-[18px] below-768:text-[13px] ${
                    processor.toLowerCase().includes('ryzen') ? 'text-orange-500' : 'text-blue-500'
                  }`}
                >
                  {processor}
                </span>
              </div>
            )}
            {memory && (
              <div className="text-white px-2 font-black bg-black rounded-md text-[16px] mb-1 border-solid flex flex-col below-768:text-[12px]">
                Memória <span className='text-pink font-black text-[20px] below-768:text-[12px]'>{memory}</span>
              </div>
            )}
            {storage && (
              <div className="text-white px-2 font-black bg-black rounded-md text-[16px] mb-1 border-solid flex flex-col below-768:text-[12px]">
                Armazenamento <span className='text-cian font-black text-[20px] below-768:text-[12px]'>{storage}</span>
              </div>
            )}
          </div>
        </div>

  
      {/* Parte direita do layout */}
      <div className="flex flex-col space-y-4 mr-[30px] text-gray-200 bg-container rounded-md p-4 w-[100%] mx-auto max-w-[600px] below-768:bg-container2">
        <Image 
          src={bannerContainer}
          alt="Banner de promoção" 
          className="rounded-[6px] w-full" 
        />
  
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
  
             {/* Ícones adicionais */}
             <div className="flex flex-col items-start gap-4 mb-4">
              <div className="flex gap-4">
                <span className="flex items-center gap-2 text-[14px] text-card font-bold">
                  <FaStar className="text-yellow-500 mb-0.5" />
                  NOVO
                </span>
                <span className="flex items-center gap-2 text-[14px] text-card font-semibold">
                  <FaCalendar className="text-yellow-500 mb-0.5" />
                  12 meses de garantia
                </span>
              </div>
  
              <div className="flex items-center gap-2 text-[14px] text-card font-bold">
                <span className="flex items-center gap-2 text-[14px] text-card">
                  <FaBolt className="text-green-500 mb-0.5" />
                  PROMOÇÃO
                </span>
                <div>
                  <span className="relative group flex items-center gap-2 text-[14px] text-card">
                    <FaInfoCircle className="text-gray-400 mb-0.5" />
                    <span className="absolute left-0 invisible group-hover:visible text-sm bg-gray-700 text-white rounded-lg px-2 py-1 whitespace-nowrap">
                      Disponível no estoque
                    </span>
                  </span>
                </div>   
              </div>
            </div>
  
            <div className="space-y-4 mb-4">
              <div className="flex items-center gap-2 text-card">
                <FaBarcode size={32} className="text-gray-500" />
                <span className="text-card text-[17.5px]">
                  <span className=""> De:</span>
                  <span className="line-through pl-1"> {oldPrice}</span>
                  <span className=""> por:</span>
                </span>              
              </div>
  
              <div className="flex items-center gap-2 text-card">
                <span className="text-green-400 font-black text-[24px] ml-11"> {formatCurrency(productPrice)}</span>
              </div>
              <span className="text-[14px] ml-11">À vista com 15% de desconto no boleto ou pix</span>
            </div>
  
            <div className="text-card mb-8">
              <div className="flex text-center items-center">
                <FaCreditCard size={32} className="text-gray-500 mr-4" />
                <span className="text-[20px] font-bold text-orange-500">{formatCurrency(productPrice)}</span>
              </div>
              <span className="text-[16px] px-1 ml-11"> 12x de {formatCurrency(parseFloat(lastInstallmentValue))} sem juros no cartão</span>
  
              {/* Parcelamento e botão de compra */}
              <button 
                  className="flex items-center gap-2 text-blue-500 font-semibold ml-11 mt-2" 
                  onClick={() => setShowInstallments(!showInstallments)}
                >
                  <FaPlus />
                  VER PARCELAMENTO
                </button>
                <button 
                className="flex items-center justify-center bg-green-500 text-white py-2 px-4 rounded-md w-full mt-4">
                  Comprar com Desconto
                  <FaCartPlus className='ml-2' />
                  </button>
              </div>
              <div className="text-card">
                {showInstallments && (
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <div className="space-y-2">
                      {installments.slice(0, 6).map((inst) => (
                        <li key={inst.number} className="flex justify-between text-[14px] text-card">
                          {inst.number}x {formatCurrency(parseFloat(inst.value))}
                        </li>
                      ))}
                    </div>
                    <div className="space-y-2">
                      {installments.slice(6).map((inst) => (
                        <li key={inst.number} className="flex justify-between text-[14px] text-card">
                          {inst.number}x {formatCurrency(parseFloat(inst.value))}
                        </li>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

 {/*  PROPS PEGANDO DE CARD E ITENS */}

import { GetServerSideProps } from 'next';
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const {
    id = '',
    imageSrc = '',
    additionalImages = [],
    moreImages = [],
    title = '',
    oldPrice = '',
    newPrice = '',
    installment = '',
    promotionEndTime = '',
    releaseDate = '',
    isNew = false,
    isOnPromotion = false,
    processor = '', 
    memory = '',   
    storage = '',   
  } = query;
  console.log("Query Params:", query);

  return {
    props: {
      id: id as string,
      imageSrc: imageSrc as string,
      additionalImages: Array.isArray(additionalImages) ? additionalImages : JSON.parse(additionalImages as string),
      moreImages: Array.isArray(moreImages) ? moreImages : JSON.parse(moreImages as string),
      title: title as string,
      oldPrice: oldPrice as string,
      newPrice: newPrice as string,
      installment: installment as string,
      promotionEndTime: promotionEndTime as string,
      releaseDate: releaseDate as string,
      isNew: isNew === 'true',
      isOnPromotion: isOnPromotion === 'true',
      processor: processor as string,
      memory: memory as string,
      storage: storage as string,
    },
  };
};

export default ItemDetail;



