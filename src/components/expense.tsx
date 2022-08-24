import {
  CircleNotch,
  CreditCard,
  CurrencyCircleDollar,
  X
} from 'phosphor-react';
import { FC, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { mutate } from 'swr';
import { Expense as ExpenseModel } from '../models/expense';
import categories from '../utils/categories';
import { getMonth } from '../utils/getMonth';
import { getToday } from '../utils/getToday';
import CategoryIcon from './category-picker/category-icon';
import ExpenseLayout from './new-expense/expense-layout';

interface ExpenseProps {
  data: ExpenseModel;
}

const Expense: FC<ExpenseProps> = ({ data }) => {
  const [_, setExpense] = useState({
    name: 'ERRO',
    category: -1,
    created_at: '',
    payment_method: 'card',
    price: '0',
  });

  const [category, setCategory] = useState({
    id: -1,
    name: 'Erro',
    style: {
      iconColor: 'text-slate-700',
      iconColorDark: 'text-slate-700',
      textLight: 'text-slate-50',
      textDark: 'text-slate-300',
      placeholder: 'placeholder-slate-300',
      bg: 'bg-slate-100 hover:bg-slate-200',
      bgDark: 'bg-slate-100 hover:bg-slate-200',
      card: 'bg-gradient-to-r from-slate-500 to-slate-800',
      icon: X,
    },
  });

  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    setExpense(data);
    setCategory(categories.filter((c) => c.id === data.category)[0]);
  }, [data]);

  const deleteExpense = (id: number) => {
    setDeleting(true);
    fetch(`https://isumi-finance-back.herokuapp.com/expense/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    }).then((res) => {
      if (res?.status === 200) {
        mutate('https://isumi-finance-back.herokuapp.com/expense');
        toast.success('Despesa removida!');
      } else {
        toast.error('Erro ao remover despesa.');
      }
      setDeleting(false);
    });
  };

  return (
    <ExpenseLayout category={category}>
      <div onClick={() => deleteExpense(data.id || -1)}>
        {!deleting && (
          <CategoryIcon
            icon={category?.style?.icon}
            bg={category?.style?.bg}
            iconColor={category?.style?.iconColor}
            deletable={true}
          />
        )}
        {deleting && (
          <div
            className={`flex w-12 h-12 group rounded-full transition ease-in-out duration-500  text-slate-700 bg-red-100`}
          >
            <CircleNotch
              className='mx-auto my-auto text-red-800 animate-spin'
              size={24}
              weight='bold'
            />
          </div>
        )}
      </div>
      <div className='flex flex-col pl-4'>
        <input
          maxLength={18}
          type='text'
          disabled={true}
          value={data?.name?.toUpperCase()}
          className={`my-auto text-lg font-medium bg-transparent outline-none ${category?.style?.textLight} border-1 ${category?.style?.placeholder}`}
        />
        <div className='flex space-x-2'>
          {data?.payment_method === 'card' ? (
            <CreditCard
              size={24}
              weight='fill'
              className={category?.style?.textLight}
            />
          ) : (
            <CurrencyCircleDollar
              size={24}
              weight='fill'
              className={category?.style?.textLight}
            />
          )}
        </div>
      </div>
      <div className='mx-auto my-auto'>
        <span
          className={`pr-1 text-xl font-medium ${category?.style?.textLight}`}
        >
          <span className={category?.style?.textLight}>R$</span>
        </span>
        <input
          placeholder='0'
          maxLength={15}
          disabled={true}
          value={data?.price}
          className={`w-32 my-auto text-xl font-medium bg-transparent outline-none ${category?.style?.textLight} border-1 ${category?.style?.placeholder}`}
        />
      </div>
      <div
        className={`flex flex-col font-medium ml-auto ${category?.style?.textLight}`}
      >
        <span className={`${category?.style?.textLight} ml-auto`}>
          {getToday(data?.created_at)}
        </span>
        <span className={`mt-auto ${category?.style?.textLight}`}>
          {getMonth(data?.created_at)}
        </span>
      </div>
    </ExpenseLayout>
  );
};

export default Expense;
