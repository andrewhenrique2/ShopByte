// src/utils/installments.ts
export const calculateInstallments = (price: number, maxInstallments: number) => {
    const installments = [];
    for (let i = 1; i <= maxInstallments; i++) {
      const installmentValue = (price / i).toFixed(2);
      installments.push({ number: i, value: installmentValue });
    }
    return installments;
  };
  
  export const getLastInstallmentValue = (installments: { number: number; value: string }[]) => {
    return installments[installments.length - 1]?.value || '0.00';
  };
  