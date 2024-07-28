import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface Item {
  id: string;
  title: string;
  imageSrc: string;
  oldPrice: string;
  newPrice: string;
}

interface FavoritosContextProps {
  favoritos: Item[];
  adicionarAFavorito: (item: Item) => void;
  excluirAFavorito: (id: string) => void;
  contagemFavoritos: number; // Adiciona a contagem de favoritos
}

const FavoritosContext = createContext<FavoritosContextProps | undefined>(undefined);

export const FavoritosProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [favoritos, setFavoritos] = useState<Item[]>([]);

  // Função para carregar os favoritos do localStorage
  useEffect(() => {
    const savedFavoritos = localStorage.getItem('favoritos');
    if (savedFavoritos) {
      setFavoritos(JSON.parse(savedFavoritos));
    }
  }, []);

  // Função para salvar os favoritos no localStorage
  useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }, [favoritos]);

  const adicionarAFavorito = (item: Item) => {
    setFavoritos(prevFavoritos => {
      const novosFavoritos = [...prevFavoritos, item];
      return novosFavoritos;
    });
  };

  const excluirAFavorito = (id: string) => {
    setFavoritos(prevFavoritos => {
      const novosFavoritos = prevFavoritos.filter(item => item.id !== id);
      return novosFavoritos;
    });
  };

  const contagemFavoritos = favoritos.length; // Contagem de favoritos

  return (
    <FavoritosContext.Provider value={{ favoritos, adicionarAFavorito, excluirAFavorito, contagemFavoritos }}>
      {children}
    </FavoritosContext.Provider>
  );
};

export const useFavoritos = () => {
  const context = useContext(FavoritosContext);
  if (!context) {
    throw new Error('useFavoritos must be used within a FavoritosProvider');
  }
  return context;
};

// Certifique-se de que há um componente React sendo exportado por padrão
const FavoritosPage: React.FC = () => {
  return <div>Favoritos Page</div>;
};

export default FavoritosPage;
