export const currencyMask = (
  e: React.ChangeEvent<HTMLInputElement>
): React.ChangeEvent<HTMLInputElement> => {
  let value = e.target.value;
  value = value.replace(/\D/g, '');
  value = value.replace(/(\d)(\d{2})$/, '$1,$2');
  value = value.replace(/(?=(\d{3})+(\D))\B/g, '.');
  e.target.value = value;
  return e;
};

export const currencyMaskString = (n: number): string => {
  let str = n.toFixed(2).toString();
  str = str.replace(/\D/g, '');
  str = str.replace(/(\d)(\d{2})$/, '$1,$2');
  str = str.replace(/(?=(\d{3})+(\D))\B/g, '.');
  return str;
};
