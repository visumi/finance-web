import { CreditCard, ForkKnife } from 'phosphor-react';

const Expense = () => {
  return (
    <div className='flex w-full h-20 p-4 rounded-lg bg-gradient-to-r from-sky-500 to-sky-600'>
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
      <span className='ml-auto my-auto text-xl font-medium text-sky-50'>R$ 20.000,00</span>
      <div className='ml-auto flex flex-col text-sky-200'>
        <span className='mx-auto'>20</span>
        <span>MAI</span>
      </div>
    </div>
  );
};

export default Expense;
