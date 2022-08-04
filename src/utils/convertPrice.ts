export const convertPrice = (price: string): number => {
  return Number(price.replaceAll('.', '').replace(',', '.'));
};
