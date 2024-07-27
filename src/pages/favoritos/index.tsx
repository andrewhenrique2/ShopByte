import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FaCaretDown, FaSadTear } from 'react-icons/fa';

const Favoritos: React.FC = () => {
  const [favoritos, setFavoritos] = useState<any[]>([]);
  const [ordenacao, setOrdenacao] = useState<'maior' | 'menor' | 'original'>('original');
  const [menuAberto, setMenuAberto] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const extrairPreco = (preco: string) => {
      if (!preco) return 0;
      const precoNumerico = parseFloat(preco.replace('R$', '').replace(/\s/g, '').replace(/\./g, '').replace(',', '.'));
      return isNaN(precoNumerico) ? 0 : Math.floor(precoNumerico);
    };

    const favoritosLocal = JSON.parse(localStorage.getItem('favoritos') || '[]');
    console.log('Favoritos Originais:', favoritosLocal);

    // Carregar a ordenação do localStorage, se disponível
    const ordenacaoSalva = localStorage.getItem('ordenacao');
    if (ordenacaoSalva) {
      setOrdenacao(ordenacaoSalva as 'maior' | 'menor' | 'original');
    }

    let favoritosOrdenados = favoritosLocal.slice();

    if (ordenacao === 'maior' || ordenacao === 'menor') {
      favoritosOrdenados = favoritosLocal.slice().sort((a: any, b: any) => {
        const precoA = extrairPreco(a.newPrice || '');
        const precoB = extrairPreco(b.newPrice || '');
        console.log(`Comparando: ${precoA} vs ${precoB}`);
        return ordenacao === 'maior' ? precoB - precoA : precoA - precoB;
      });
    }

    console.log('Favoritos Ordenados:', favoritosOrdenados);
    setFavoritos(favoritosOrdenados);
  }, [ordenacao]);

  const handleOrdenacaoChange = (tipo: 'maior' | 'menor' | 'original') => {
    setOrdenacao(tipo);
    localStorage.setItem('ordenacao', tipo);
    setMenuAberto(false);
  };

  const handleCardClick = (item: any) => {
    // Navegação para a página de detalhes do produto
    const url = `/produto/${encodeURIComponent(item.id)}?title=${encodeURIComponent(item.title)}&newPrice=${encodeURIComponent(item.newPrice || '')}&oldPrice=${encodeURIComponent(item.oldPrice || '')}&imageSrc=${encodeURIComponent(item.imageSrc || '')}`;
    router.push(url);
  };

  const handleRemoveClick = (e: React.MouseEvent, item: any) => {
    e.stopPropagation(); // Impede a navegação para a página do produto
    const novosFavoritos = favoritos.filter(fav => fav.id !== item.id);
    localStorage.setItem('favoritos', JSON.stringify(novosFavoritos));
    setFavoritos(novosFavoritos);
  };

  return (
    <div className="flex flex-col">
      <div className="w-full px-[50px] mt-8">
        <div className="h-[100px] bg-white flex items-center justify-between text-gray-500 px-4 border border-gray-300  relative below-768:bg-bg below-768:border-none">
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
              {favoritos.map((item: any) => (
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
                  <div className="items-center gap-2 text-card flex flex-col justify-center">
                    <span className="text-gray-600 text-[15px] line-through">
                      <span className="text-gray-600">De:</span>
                      <span className="ml-1 text-black">{item.oldPrice || 'Preço não disponível'}</span>
                    </span>
                    <span className="text-card text-[17.5px]">
                      <span className="text-gray-600"> por:</span>
                      <span className="ml-1 text-verdao text-lg font-bold">{item.newPrice || 'Preço não disponível'}</span>
                    </span>
                  </div>
                  <button
                    className="mt-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                    onClick={(e) => handleRemoveClick(e, item)}
                  >
                    Remover
                  </button>
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
