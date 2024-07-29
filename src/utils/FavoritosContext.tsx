import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Interface para item de favorito
export interface Item {
  id: string;
  title: string;
  imageSrc: string;
  newPrice: string;
  oldPrice: string;
  additionalImages: string[];
  moreImages: string[];
  promotion?: string; // Antigo promotionEndTime
  releaseDate?: string;
  isOnPromotion?: boolean;
  processor?: string;
  memory?: string;
  storage?: string;
}

// Interface para o contexto de favoritos
interface FavoritosContextProps {
  favoritos: Item[];
  adicionarAFavorito: (item: Item) => void;
  excluirAFavorito: (id: string) => void;
  contagemFavoritos: number;
}

// Cria o contexto de favoritos
const FavoritosContext = createContext<FavoritosContextProps | undefined>(undefined);

// Provedor do contexto de favoritos
export const FavoritosProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [favoritos, setFavoritos] = useState<Item[]>([]);

  // Carrega favoritos do localStorage
  useEffect(() => {
    const savedFavoritos = localStorage.getItem('favoritos');
    if (savedFavoritos) {
      setFavoritos(JSON.parse(savedFavoritos));
    }
  }, []);

  // Salva favoritos no localStorage
  useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }, [favoritos]);

  // Adiciona um item aos favoritos
  const adicionarAFavorito = (item: Item) => {
    setFavoritos(prevFavoritos => {
      // Verifica se o item já existe
      const itemExists = prevFavoritos.some(fav => fav.id === item.id);
      if (!itemExists) {
        return [...prevFavoritos, item];
      }
      return prevFavoritos;
    });
  };

  // Remove um item dos favoritos
  const excluirAFavorito = (id: string) => {
    setFavoritos(prevFavoritos => prevFavoritos.filter(item => item.id !== id));
  };

  // Contagem de favoritos
  const contagemFavoritos = favoritos.length;

  // Fornece o contexto para os filhos
  return (
    <FavoritosContext.Provider value={{ favoritos, adicionarAFavorito, excluirAFavorito, contagemFavoritos }}>
      {children}
    </FavoritosContext.Provider>
  );
};

// Hook para usar o contexto de favoritos
export const useFavoritos = () => {
  const context = useContext(FavoritosContext);
  if (!context) {
    throw new Error('useFavoritos must be used within a FavoritosProvider');
  }
  return context;
};

// Componente padrão exportado
const FavoritosPage: React.FC = () => {
  return <div>Favoritos Page</div>;
};

export default FavoritosPage;
