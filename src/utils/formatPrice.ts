// src/utils/formatPrice.ts

/**
 * Formata um valor numérico como moeda brasileira (BRL).
 * @param value - O valor numérico a ser formatado.
 * @returns O valor formatado como moeda.
 */
export const formatCurrency = (value: number) => {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
};

/**
* Converte uma string de preço para um número. Remove caracteres não numéricos e substitui a vírgula por ponto.
* @param price - A string de preço a ser convertida.
* @returns O preço convertido para número.
*/
export const convertPrice = (price: string | undefined) => {
  if (!price) return 0;
  const cleanedPrice = price.replace(/[^\d,]/g, '').replace(',', '.');
  return parseFloat(cleanedPrice);
};
