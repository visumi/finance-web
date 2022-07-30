import { CreditCard, CurrencyCircleDollar } from 'phosphor-react';
import { FC, useEffect, useState } from 'react';
import Category from '../models/category';
import { Expense as ExpenseModel } from '../models/expense';
import { currencyMask } from '../utils/currencyMask';
import { getMonth } from '../utils/getMonth';
import { getToday } from '../utils/getToday';
import CategoryIcon from './category-picker/category-icon';
import CategorySelector from './category-picker/category-selector';
import NewExpenseLayout from './new-expense/new-expense-layout';
import PaymentMethod from './payment-method';
import { Tooltip } from './tooltip';

interface expenseProps {
  data: ExpenseModel;
}

const Expense: FC<expenseProps> = ({ data }) => {
  const [expense, setExpense] = useState({
    category: {
      id: 0,
      name: '',
      style: {
        iconColor: '',
        iconColorDark: '',
        textLight: '',
        textDark: '',
        placeholder: '',
        bg: '',
        bgDark: '',
        card: '',
        icon: {},
      },
    },
    date: '',
    method: '',
    price: '',
    name: '',
  });

  useEffect(() => {
    setExpense(data);
  }, []);

  return (
    <NewExpenseLayout category={data.category}>
      <CategoryIcon
        icon={data?.category?.style?.icon}
        bg={data?.category?.style?.bg}
        iconColor={data?.category?.style?.iconColor}
      />
      <div className='flex flex-col pl-4'>
        <input
          maxLength={18}
          type='text'
          disabled={true}
          value={data?.name?.toUpperCase()}
          className={`my-auto text-lg font-medium bg-transparent outline-none ${data?.category?.style?.textLight} border-1 ${data?.category?.style?.placeholder}`}
        />
        <div className='flex space-x-2'>
          {data?.method === 'card' ? (
            <Tooltip message='Cartão'>
              <CreditCard
                size={24}
                weight='fill'
                className={data?.category?.style?.textLight}
              />
            </Tooltip>
          ) : (
            <Tooltip message='Dinheiro'>
              <CurrencyCircleDollar
                size={24}
                weight='fill'
                className={data?.category?.style?.textLight}
              />
            </Tooltip>
          )}
        </div>
      </div>
      <div className='mx-auto my-auto'>
        <span
          className={`pr-1 text-xl font-medium ${data?.category?.style?.textLight}`}
        >
          <span className={data?.category?.style?.textLight}>R$</span>
        </span>
        <input
          placeholder='0'
          maxLength={15}
          disabled={true}
          value={data?.price}
          className={`w-32 my-auto text-xl font-medium bg-transparent outline-none ${data?.category?.style?.textLight} border-1 ${data?.category?.style?.placeholder}`}
        />
      </div>
      <div
        className={`flex flex-col font-medium ml-auto ${data?.category?.style?.textLight}`}
      >
        <span className={`${data?.category?.style?.textLight} ml-auto`}>
          {getToday(data?.date)}
        </span>
        <span className={`mt-auto ${data?.category?.style?.textLight}`}>
          {getMonth(data?.date)}
        </span>
      </div>
    </NewExpenseLayout>
  );
};

export default Expense;
