// src/utils/installments.ts

/**
 * Calcula os valores das parcelas de um preço com base no número máximo de parcelas.
 * @param price - O preço total a ser parcelado.
 * @param maxInstallments - O número máximo de parcelas.
 * @returns Array de objetos com o número da parcela e seu valor.
 */
export const calculateInstallments = (price: number, maxInstallments: number) => {
  const installments = [];
  for (let i = 1; i <= maxInstallments; i++) {
    const installmentValue = (price / i).toFixed(2);
    installments.push({ number: i, value: installmentValue });
  }
  return installments;
};

/**
* Obtém o valor da última parcela de uma lista de parcelas.
* @param installments - Lista de parcelas com número e valor.
* @returns O valor da última parcela ou '0.00' se a lista estiver vazia.
*/
export const getLastInstallmentValue = (installments: { number: number; value: string }[]) => {
  return installments[installments.length - 1]?.value || '0.00';
};
