export const getMonth = (str: string, full?: boolean): string => {
  const month = str.split('-')[1].substring(0, 2);
  const months = [
    {
      value: '01',
      name: 'JAN',
      full: 'JANEIRO',
    },
    {
      value: '02',
      name: 'FEV',
      full: 'FEVEREIRO',
    },
    {
      value: '03',
      name: 'MAR',
      full: 'MARÇO',
    },
    {
      value: '04',
      name: 'ABR',
      full: 'ABRIL',
    },
    {
      value: '05',
      name: 'MAI',
      full: 'MAIO',
    },
    {
      value: '06',
      name: 'JUN',
      full: 'JUNHO',
    },
    {
      value: '07',
      name: 'JUL',
      full: 'JULHO',
    },
    {
      value: '08',
      name: 'AGO',
      full: 'AGOSTO',
    },
    {
      value: '09',
      name: 'SET',
      full: 'SETEMBRO',
    },
    {
      value: '010',
      name: 'OUT',
      full: 'OUTUBRO',
    },
    {
      value: '11',
      name: 'NOV',
      full: 'NOVEMBRO',
    },
    {
      value: '12',
      name: 'DEZ',
      full: 'DEZEMBRO',
    },
  ];

  if (full) {
    return months.find((m) => m.value === month)?.full || 'ERRO';
  } else {
    return months.find((m) => m.value === month)?.name || 'ERRO';
  }
};
