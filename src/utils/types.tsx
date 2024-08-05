// src/types.ts ou src/interfaces.ts
import { StaticImageData } from 'next/image';

export interface Product {
  id: string;
  imageSrc: string | StaticImageData;
  imageAlt: string;
  title: string;
  oldPrice: string;
  newPrice: string;
  isOnPromotion?: boolean;
  promotionEndTime?: string;
  moreImages?: (string | StaticImageData)[];
  processor?: string;
  memory?: string;
  storage?: string;
  additionalImages?: (string | StaticImageData)[];
}
