// src/utils/formatPrice.ts
export const formatCurrency = (value: number) => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };
  
  export const convertPrice = (price: string | undefined) => {
    if (!price) return 0;
    const cleanedPrice = price.replace(/[^\d,]/g, '').replace(',', '.');
    return parseFloat(cleanedPrice);
  };
  