import { useAtom } from 'jotai';
import { FC, useEffect, useState } from 'react';
import { Expense } from '../models/expense';
import { expensesAtom } from '../utils/atoms';
import { convertPrice } from '../utils/convertPrice';
import { currencyMaskString } from '../utils/currencyMask';
import MetaBar from './meta-bar';

const Meta: FC = () => {
  const [expenses, setExpenses] = useAtom(expensesAtom);
  const [total, setTotal] = useState(0);
  const [barSize, setBarSize] = useState(0);
  const [barState, setBarState] = useState({
    bg: 'bg-gradient-to-r from-green-500 to-green-600',
  });

  useEffect(() => {
    if (expenses?.length > 0) {
      let sum = 0;
      expenses?.forEach((expense: Expense) => {
        sum += convertPrice(expense.price);
      });
      setTotal(Number(sum.toFixed(2)));
      
      let percent = (sum * 100) / 2500;
      setBarSize(percent);
      setBarState(calculateBarState(percent));
    }
  }, [expenses]);

  const calculateBarState = (barSize: number): any => {
    if (barSize <= 25) {
      return { bg: 'bg-gradient-to-r from-green-500 to-green-600' };
    } else if (barSize > 25 && barSize <= 50) {
      return { bg: 'bg-gradient-to-r from-yellow-500 to-yellow-600' };
    } else if (barSize > 50 && barSize <= 75) {
      return { bg: 'bg-gradient-to-r from-orange-500 to-orange-600' };
    } else {
      return { bg: 'bg-gradient-to-r from-red-500 to-red-600' };
    }
  };

  return (
    <>
      {!expenses && (
        <div className='flex flex-col justify-around w-full p-4 bg-gradient-to-r from-slate-400 to-slate-600 h-28 rounded-xl'>
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
          className={`flex flex-col justify-around w-full p-4 bg-gradient-to-r h-28 rounded-xl ${barState.bg}`}
        >
          <span className='text-lg font-medium text-green-50'>
            Gasto mensal
          </span>
          <MetaBar />
          <div className='flex justify-between'>
            <span className='text-lg font-medium text-green-50 rounded-xl'>
              R${currencyMaskString(total)}
            </span>
            <span className='text-lg font-medium text-green-50 rounded-xl'>
              R$100,00
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Meta;
