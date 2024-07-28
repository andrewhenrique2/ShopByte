// utils/useHandleFavoriteToggle.ts
import { toast } from 'react-toastify';
import { useFavoritos } from './FavoritosContext';

export const useHandleFavoriteToggle = () => {
  const { favoritos, adicionarAFavorito, excluirAFavorito } = useFavoritos();

  const handleFavoriteToggle = (
    id: string,
    title: string,
    imageSrc: string,
    newPrice: string,
    oldPrice: string
  ) => {
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

  return handleFavoriteToggle;
};
