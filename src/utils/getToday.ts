export const getToday = (str: string): string => {
  return str.split('T')[0].slice(-2);
};
