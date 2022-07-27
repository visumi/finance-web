import { Asterisk } from 'phosphor-react';
import { useState } from 'react';
import { Category } from '../models/category';
import CategorySelector from './category-selector';
import NewExpenseLayout from './new-expense-layout';
import PaymentMethod from './payment-method';

const NewExpense = () => {
  const [category, setCategory] = useState({
    id: 0,
    name: 'Geral',
    style: {
      iconColor: 'text-slate-700',
      textLight: 'text-slate-50',
      textDark: 'text-slate-300',
      placeholder: 'placeholder-slate-300',
      bg: 'bg-slate-100 hover:bg-slate-200',
      card: 'bg-gradient-to-r from-slate-400 via-slate-500 to-slate-700',
      icon: Asterisk,
    },
  });

  return (
    <NewExpenseLayout category={category}>
      <CategorySelector
        changeCategory={(category: Category) => setCategory(category)}
      />
      <div className='flex flex-col pl-4'>
        <input
          maxLength={20}
          type='text'
          placeholder='NOME'
          className={`my-auto text-xl font-medium bg-transparent outline-none ${category?.style?.textLight} border-1 ${category?.style?.placeholder}`}
        />
        <div className='flex space-x-2'>
          <PaymentMethod
            category={category}
            changeMethod={(method: string) => console.log(method)}
          />
        </div>
      </div>
      <span
        className={`pr-1 my-auto text-xl font-medium ${category?.style?.textLight}`}
      >
        R$
      </span>
      <input
        min='1'
        max='999999999'
        type='number'
        placeholder='0'
        className={`w-32 my-auto text-xl font-medium bg-transparent outline-none ${category?.style?.textLight} border-1 ${category?.style?.placeholder}`}
      />
      <div className={`flex flex-col ml-auto ${category?.style?.textLight}`}>
        <span className='mx-auto'>20</span>
        <span>MAI</span>
      </div>
    </NewExpenseLayout>
  );
};

export default NewExpense;
