import { toast } from 'react-toastify';
import { useFavoritos } from './FavoritosContext';

export const useHandleFavoriteToggle = () => {
  const { favoritos, adicionarAFavorito, excluirAFavorito } = useFavoritos();

  return (
    id: string,
    title: string,
    imageSrc: string,
    oldPrice: string,
    newPrice: string,
    moreImages: string[],
    promotionEndTime?: string,
    additionalImages: string[] = [],
    releaseDate?: string,
    isNew?: boolean,
    isOnPromotion?: boolean,
    processor?: string,
    memory?: string,
    storage?: string
  ) => {
    console.log('ID:', id);
    console.log('Title:', title);
    console.log('ImageSrc:', imageSrc);
    console.log('OldPrice:', oldPrice);
    console.log('NewPrice:', newPrice);
    console.log('MoreImages:', moreImages);
    console.log('Type of MoreImages:', Array.isArray(moreImages) ? 'Array' : typeof moreImages);
    console.log('PromotionEndTime:', promotionEndTime);
    console.log('AdditionalImages:', additionalImages);
    console.log('ReleaseDate:', releaseDate);
    console.log('IsNew:', isNew);
    console.log('IsOnPromotion:', isOnPromotion);
    console.log('Processor:', processor);
    console.log('Memory:', memory);
    console.log('Storage:', storage);

    const item = {
      id,
      title,
      imageSrc,
      oldPrice,
      newPrice,
      promotionEndTime,
      additionalImages,
      moreImages,
      releaseDate,
      isNew,
      isOnPromotion,
      processor,
      memory,
      storage,
    };

    const existingFavorite = favoritos.find(fav => fav.id === id);

    if (existingFavorite) {
      excluirAFavorito(id);
      toast.error(
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-lg font-semibold text-black">Removido</p>
          <p className="text-black"> Removido da Lista de Desejos</p>
          <button className="toast-button toast-button-error mt-8 pt-8" onClick={() => toast.dismiss()}>
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
          <p className="text-lg font-semibold text-black">Sucesso!</p>
          <p className="text-black">Adicionado à Lista de Desejos</p>
          <button className="toast-button toast-button-success mt-8 pt-8" onClick={() => toast.dismiss()}>
            OK
          </button>
        </div>,
        {
          className: 'custom-toast-success',
        }
      );
    }
  };
};
