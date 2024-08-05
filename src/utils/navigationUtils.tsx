// utils/navigationUtils.ts
import { NextRouter } from 'next/router';
import { StaticImageData } from 'next/image';

interface Product {
  id: string;
  title: string;
  imageSrc: StaticImageData | string;
  oldPrice?: string;
  newPrice?: string;
  additionalImages?: (StaticImageData | string)[];
  moreImages?: (StaticImageData | string)[];
  isOnPromotion?: boolean;
  promotionEndTime?: string;
  processor?: string;
  memory?: string;
  storage?: string;
}

export const handleProductNavigation = (router: NextRouter, product: Product) => {
  router.push({
    pathname: `/produto/${product.id}`,
    query: {
      title: product.title,
      imageSrc: typeof product.imageSrc === 'string' ? product.imageSrc : product.imageSrc.src,
      oldPrice: product.oldPrice,
      newPrice: product.newPrice,
      additionalImages: JSON.stringify(
        product.additionalImages?.map((img) =>
          typeof img === 'string' ? img : img.src
        ) || []
      ),
      moreImages: JSON.stringify(
        product.moreImages?.map((img) => (typeof img === 'string' ? img : img.src)) || []
      ),
      isOnPromotion: product.isOnPromotion,
      processor: product.processor,
      memory: product.memory,
      storage: product.storage,
      promotionEndTime: product.promotionEndTime,
    },
  });
};
