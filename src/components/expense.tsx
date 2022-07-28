import { CreditCard, ForkKnife } from 'phosphor-react';
import { FC } from 'react';

const Expense: FC = () => {
  return (
    <div className='flex w-full h-20 p-4 rounded-lg shadow-sm bg-gradient-to-r from-sky-500 to-sky-800'>
      <div className='flex w-12 h-12 rounded-full bg-sky-100'>
        <ForkKnife
          className='mx-auto my-auto text-sky-700'
          size={32}
          weight='fill'
        />
      </div>
      <div className='flex flex-col pl-4'>
        <span className='my-auto text-xl font-medium text-sky-50'>
          RESTAURANTE DIEGAO
        </span>
        <div className='flex space-x-2'>
          <CreditCard
            className='my-auto text-sky-100'
            size={16}
            weight='fill'
          />
          <span className='my-auto text-sm font-medium text-sky-200'>
            Crédito/Débito
          </span>
        </div>
      </div>
      <span className='my-auto ml-auto text-xl font-medium text-sky-50'>
        R$ 20.000,00
      </span>
      <div className='flex flex-col ml-auto text-sky-50'>
        <span className='mx-auto'>20</span>
        <span>MAI</span>
      </div>
    </div>
  );
};

export default Expense;
