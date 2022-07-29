export const getMonth = (str: string): string => {
  const month = str.split('-')[1].substring(0, 2);
  const months = [
    {
      value: '01',
      name: 'JAN',
    },
    {
      value: '02',
      name: 'FEV',
    },
    {
      value: '03',
      name: 'MAR',
    },
    {
      value: '04',
      name: 'ABI',
    },
    {
      value: '05',
      name: 'MAI',
    },
    {
      value: '06',
      name: 'JUN',
    },
    {
      value: '07',
      name: 'JUL',
    },
    {
      value: '08',
      name: 'AGO',
    },
    {
      value: '09',
      name: 'SET',
    },
    {
      value: '010',
      name: 'OUT',
    },
    {
      value: '11',
      name: 'NOV',
    },
    {
      value: '12',
      name: 'DEZ',
    },
  ];

  return months.find((m) => m.value === month)?.name;
};
