import { Plus } from 'phosphor-react';
import { FC, useEffect, useMemo, useState } from 'react';
import Category from '../../models/category';
import { Expense } from '../../models/expense';
import { currencyMask } from '../../utils/currencyMask';
import { getMonth } from '../../utils/getMonth';
import { getToday } from '../../utils/getToday';
import CategorySelector from '../category-picker/category-selector';
import PaymentMethod from '../payment-method';
import ExpenseLayout from './expense-layout';

interface NewExpenseProps {
  updateInfo(data: Expense): void;
}

const NewExpense: FC<NewExpenseProps> = ({ updateInfo }) => {
  const [firstDay, setFirstDay] = useState('');
  const [lastDay, setLastDay] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [created_at, setCreatedAt] = useState('');

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [payment_method, setPaymentMethod] = useState('card');

  const [categoryData, setCategoryData] = useState({
    id: -1,
    name: 'None',
    style: {
      iconColor: 'text-slate-700',
      iconColorDark: 'text-slate-700',
      textLight: 'text-slate-50',
      textDark: 'text-slate-300',
      placeholder: 'placeholder-slate-300',
      bg: 'bg-slate-100 hover:bg-slate-200',
      bgDark: 'bg-slate-100 hover:bg-slate-200',
      card: 'bg-gradient-to-r from-slate-500 to-slate-800',
      icon: Plus,
    },
  });

  useEffect(() => {
    let category = categoryData.id;
    updateInfo({ price, category, payment_method, created_at, name });
  }, [price, categoryData, payment_method, created_at, name]);

  useMemo(() => {
    const now = new Date();

    setCreatedAt(now.toISOString().slice(0, 10));
    setDay(getToday(now.toISOString()));
    setMonth(getMonth(now.toISOString()));
    setFirstDay(
      new Date(now.getFullYear(), now.getMonth(), 1).toISOString().split('T')[0]
    );
    setLastDay(now.toISOString().split('T')[0]);
  }, []);

  return (
    <ExpenseLayout category={categoryData}>
      <CategorySelector
        changeCategory={(categoryData: Category) =>
          setCategoryData(categoryData)
        }
      />
      <div className='flex flex-col pl-4'>
        <input
          maxLength={18}
          type='text'
          placeholder='NOME'
          onChange={(e) => setName(e.target.value)}
          className={`my-auto text-lg font-medium bg-transparent outline-none ${categoryData?.style?.textLight} border-1 ${categoryData?.style?.placeholder}`}
        />
        <div className='flex space-x-2'>
          <PaymentMethod
            category={categoryData}
            changeMethod={(method: string) => setPaymentMethod(method)}
          />
        </div>
      </div>
      <div className='mx-auto my-auto'>
        <span
          className={`pr-1 text-xl font-medium ${categoryData?.style?.textLight}`}
        >
          <span className={categoryData?.style?.textLight}>R$</span>
        </span>
        <input
          placeholder='0'
          maxLength={15}
          value={price}
          onChange={(e) => setPrice(currencyMask(e).target.value)}
          className={`w-32 my-auto text-xl font-medium bg-transparent outline-none ${categoryData?.style?.textLight} border-1 ${categoryData?.style?.placeholder}`}
        />
      </div>
      <div
        className={`flex relative flex-col ml-auto ${categoryData?.style?.textLight}`}
      >
        <span className={`absolute right-0 ${categoryData?.style?.textLight}`}>
          {day}
        </span>
        <input
          type='date'
          min={firstDay}
          max={lastDay}
          onChange={(e) => {
            setDay(getToday(e.target.value));
            setCreatedAt(e.target.value);
          }}
          className='absolute w-8 mr-2 text-transparent bg-transparent opacity-0 -right-3'
        />
        <span className={`mt-auto ${categoryData?.style?.textLight}`}>
          {month}
        </span>
      </div>
    </ExpenseLayout>
  );
};

export default NewExpense;
