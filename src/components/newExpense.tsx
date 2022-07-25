import { CreditCard, ForkKnife } from 'phosphor-react';

const NewExpense = () => {
  return (
    <div className='flex w-full h-20 p-4 rounded-lg bg-gradient-to-r from-slate-400 via-slate-500 to-slate-700'>
      <div className='flex w-12 h-12 rounded-full bg-slate-100'>
        <ForkKnife
          className='mx-auto my-auto text-slate-700'
          size={32}
          weight='fill'
        />
      </div>
      <div className='flex flex-col pl-4'>
        <input
          maxLength={20}
          type='text'
          placeholder='NOME'
          className='my-auto text-xl font-medium bg-transparent outline-none text-slate-50 border-1 placeholder-slate-300'
        />
        <div className='flex space-x-2'>
          <CreditCard
            className='my-auto text-slate-100'
            size={16}
            weight='fill'
          />
          <span className='my-auto text-sm font-medium text-slate-200'>
            Crédito/Débito
          </span>
        </div>
      </div>
      <span className='my-auto text-xl font-medium text-slate-50 pr-1'>R$</span>
      <input
        min='1'
        max='999999999'
        type='number'
        placeholder='0'
        className='w-32 my-auto text-xl font-medium bg-transparent outline-none text-slate-50 border-1 placeholder-slate-300'
      />
      <div className='flex flex-col ml-auto text-slate-200'>
        <span className='mx-auto'>20</span>
        <span>MAI</span>
      </div>
    </div>
  );
};

export default NewExpense;
