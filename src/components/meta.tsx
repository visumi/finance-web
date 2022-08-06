import { Transition } from '@headlessui/react';
import { useAtom } from 'jotai';
import { FC, useEffect, useState } from 'react';
import { Expense } from '../models/expense';
import { expensesAtom } from '../utils/atoms';
import { convertPrice } from '../utils/convertPrice';
import { currencyMaskString } from '../utils/currencyMask';

const Meta: FC = () => {
  const [expenses] = useAtom(expensesAtom);
  const [limit] = useState(1500);
  const [total, setTotal] = useState(0);
  const [barSize, setBarSize] = useState('w-0');
  const [barState, setBarState] = useState({
    bg: 'bg-gradient-to-r from-green-500 to-green-600',
    text: 'text-green-50',
    barD: 'bg-green-700',
    barL: 'bg-green-100',
  });

  useEffect(() => {
    let sum = 0;
    expenses?.forEach((expense: Expense) => {
      sum += convertPrice(expense.price);
    });
    setTotal(Number(sum.toFixed(2)));

    let percent = (sum * 100) / limit;
    setBarSize(getBarSize(percent));
    setBarState(calculateBarState(percent));
  }, [expenses]);

  const calculateBarState = (barSize: number): any => {
    if (barSize <= 50) {
      return {
        bg: 'bg-gradient-to-r from-green-500 to-green-600',
        text: 'text-green-50',
        barD: 'bg-green-700',
        barL: 'bg-green-100',
      };
    } else if (barSize > 50 && barSize <= 75) {
      return {
        bg: 'bg-gradient-to-r from-yellow-500 to-yellow-600',
        text: 'text-yellow-50',
        barD: 'bg-yellow-700',
        barL: 'bg-yellow-100',
      };
    } else if (barSize > 75 && barSize <= 99) {
      return {
        bg: 'bg-gradient-to-r from-orange-500 to-orange-600',
        text: 'text-orange-50',
        barD: 'bg-orange-700',
        barL: 'bg-orange-100',
      };
    } else {
      return {
        bg: 'bg-gradient-to-r from-red-500 to-red-600',
        text: 'text-red-50',
        barD: 'bg-red-700',
        barL: 'bg-red-100',
      };
    }
  };

  const getBarSize = (n: number): string => {
    let pos = 0;
    Object.keys(sizes).forEach((key) => {
      if (n >= Number(key)) {
        pos = Number(key);
      }
    });
    return sizes[pos];
  };

  const sizes: any = {
    0: 'w-0',
    1: 'w-[2%]',
    5: 'w-[5%]',
    10: 'w-[10%]',
    15: 'w-[15%]',
    20: 'w-[20%]',
    25: 'w-[25%]',
    30: 'w-[30%]',
    35: 'w-[35%]',
    40: 'w-[40%]',
    45: 'w-[45%]',
    50: 'w-[50%]',
    55: 'w-[55%]',
    60: 'w-[60%]',
    65: 'w-[65%]',
    70: 'w-[70%]',
    75: 'w-[75%]',
    80: 'w-[80%]',
    85: 'w-[85%]',
    90: 'w-[90%]',
    95: 'w-[95%]',
    100: 'w-[100%]',
  };

  return (
    <>
      {!expenses && (
        <div className='flex flex-col justify-around w-full p-4 shadow-md bg-gradient-to-r from-slate-400 to-slate-600 h-28 rounded-xl'>
          <span className='text-lg font-medium text-slate-50'>
            Gasto mensal
          </span>
          <div className='w-full h-4 duration-1000 rounded-full bg-slate-50 animate-pulse transition-width'></div>
          <div className='flex justify-between'>
            <span className='text-lg font-medium animate-pulse text-slate-50 rounded-xl'>
              R$00,00
            </span>
            <span className='text-lg font-medium animate-pulse text-slate-50 rounded-xl'>
              R$00,00
            </span>
          </div>
        </div>
      )}
      {expenses && (
        <div
          className={`flex flex-col justify-around w-full p-4 bg-gradient-to-r shadow-sm h-28 rounded-xl ${barState.bg}`}
        >
          <span className={`text-lg font-medium ${barState.text}`}>
            Gasto mensal
          </span>
          <div className={`h-4 ${barState.barL} rounded-full`}>
            <Transition appear show enterFrom='w-0' enterTo='w-full'>
              <div
                className={`${barState.barD} ${barSize} transition-width ease-in-out duration-1000 h-4 rounded-full`}
              ></div>
            </Transition>
          </div>
          <div className='flex justify-between'>
            <span className={`text-lg font-medium ${barState.text} rounded-xl`}>
              R${currencyMaskString(total)}
            </span>
            <span className={`text-lg font-medium ${barState.text} rounded-xl`}>
              R${currencyMaskString(limit)}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Meta;
