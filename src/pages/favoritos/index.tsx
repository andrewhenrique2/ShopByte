import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FaCaretDown, FaSadTear } from 'react-icons/fa';
import { useFavoritos } from '../../utils/FavoritosContext'; // Importa o contexto

interface Favorito {
  id: string;
  title: string;
  newPrice?: string;
  oldPrice?: string;
  imageSrc: string;
  isOnPromotion?: boolean;
  promotionEndTime?: string;
  additionalImages?: string[];
  moreImages?: string[];
  installment?: string;
  releaseDate?: string;
  isNew?: boolean;
  processor?: string;
  memory?: string;
  storage?: string;
}

const Favoritos: React.FC = () => {
  const { favoritos, excluirAFavorito } = useFavoritos();
  const [ordenacao, setOrdenacao] = useState<'maior' | 'menor' | 'original'>('original');
  const [menuAberto, setMenuAberto] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const ordenacaoSalva = localStorage.getItem('ordenacao') as 'maior' | 'menor' | 'original' | null;
    if (ordenacaoSalva) {
      setOrdenacao(ordenacaoSalva);
    }
  }, []);

  const handleOrdenacaoChange = (tipo: 'maior' | 'menor' | 'original') => {
    setOrdenacao(tipo);
    localStorage.setItem('ordenacao', tipo);
    setMenuAberto(false);
  };

  const handleCardClick = (item: Favorito) => {
    const params = new URLSearchParams({
      title: item.title || '',
      newPrice: item.newPrice || '',
      oldPrice: item.oldPrice || '',
      imageSrc: item.imageSrc || '',
      isOnPromotion: item.isOnPromotion?.toString() || 'false',
      promotionEndTime: item.promotionEndTime || '',
      additionalImages: JSON.stringify(item.additionalImages || []),
      moreImages: JSON.stringify(item.moreImages || []),
      installment: item.installment || '',
      releaseDate: item.releaseDate || '',
      isNew: item.isNew?.toString() || 'false',
      processor: item.processor || '',
      memory: item.memory || '',
      storage: item.storage || '',
    });
    const url = `/produto/${encodeURIComponent(item.id)}?${params.toString()}`;

    router.push(url);
  };

  const handleRemoveClick = (e: React.MouseEvent, item: Favorito) => {
    e.stopPropagation();
    excluirAFavorito(item.id); // Chama a função do contexto
  };

  return (
    <div className="flex flex-col">
      <div className="w-full px-[50px] mt-8">
        <div className="h-[100px] bg-white flex items-center justify-between text-gray-500 px-4 border border-gray-300 relative below-768:bg-bg below-768:border-none">
          <button
            onClick={() => setMenuAberto(!menuAberto)}
            className={`flex items-center bg-orange-500 text-white border border-gray-300 rounded px-3 py-1 space-x-2 hover:bg-orange-400`}
          >
            <span>Ordenar Por</span>
            <FaCaretDown className={`transition-transform ${menuAberto ? 'rotate-180' : 'rotate-0'}`} />
          </button>
          {menuAberto && (
            <div className="absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded shadow-lg z-10">
              <button
                onClick={() => handleOrdenacaoChange('original')}
                className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${ordenacao === 'original' ? 'bg-gray-100' : ''}`}
              >
                Ordem Original
              </button>
              <button
                onClick={() => handleOrdenacaoChange('menor')}
                className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${ordenacao === 'menor' ? 'bg-gray-100' : ''}`}
              >
                Ordenar Menor Valor
              </button>
              <button
                onClick={() => handleOrdenacaoChange('maior')}
                className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${ordenacao === 'maior' ? 'bg-gray-100' : ''}`}
              >
                Ordenar Maior Valor
              </button>
            </div>
          )}
        </div>
        <main className="mt-4">
          {favoritos.length === 0 ? (
            <div className="text-center text-gray-700 text-[22px] p-8 below-768:text-white">
              <FaSadTear className="text-[50px] mx-auto mb-4 below-768:text-white" />
              Nenhum item nos favoritos
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {favoritos.map(item => (
                <div
                  key={item.id}
                  className="relative bg-card rounded-md p-4 flex flex-col items-center text-center mb-12 group shadow-sm cursor-pointer"
                  onClick={() => handleCardClick(item)}
                >
                  <div className="relative w-full h-[250px] mb-6">
                    <Image
                      src={item.imageSrc}
                      alt={item.title}
                      layout="fill"
                      objectFit="contain"
                      className="rounded-md"
                    />
                  </div>
                  <h2 className="text-bg text-[16px] font-sans font-semibold mb-2">{item.title}</h2>
                  <div className="items-center gap-2 text-card flex flex-col justify-center mb-4">
                    {item.oldPrice && (
                      <span className="text-gray-600 text-[15px] line-through">
                        <span className="text-gray-600">De:</span>
                        <span className="ml-1 text-black">{item.oldPrice}</span>
                      </span>
                    )}
                    {item.newPrice && (
                      <span className="text-card text-[17.5px]">
                        <span className="text-verdao font-black"> por:</span>
                        <span className="ml-1 text-verdao font-black">{item.newPrice}</span>
                      </span>
                    )}
                  </div>
                  <div className="w-full flex gap-3 mt-4">
                    <button
                      onClick={(e) => handleRemoveClick(e, item)}
                      className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-400 flex-1"
                    >
                      Remover
                    </button>
                    <button
                      onClick={(e) => handleCardClick(item)}
                      className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-400 flex-1"
                    >
                      Ver Detalhes
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Favoritos;
