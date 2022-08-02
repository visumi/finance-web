import { Transition } from '@headlessui/react';
import { CircleNotch, SmileyMeh, SmileySad } from 'phosphor-react';
import { FC } from 'react';
import useSWR from 'swr';
import { Expense as ExpenseModel } from '../models/expense';
import fetcher from '../utils/fetcher';
import { getMonth } from '../utils/getMonth';
import Expense from './expense';

const History: FC = () => {
  const { data, error } = useSWR(
    ['http://localhost:4000/expense', { credentials: 'include' }],
    fetcher
  );

  return (
    <div className='flex flex-col h-screen gap-2 p-4 overflow-hidden bg-white rounded-lg shadow-lg'>
      <div>
        <h1 className='text-2xl font-bold text-purple-900'>
          HISTÓRICO DE GASTOS
        </h1>
        <h2 className='text-lg font-bold text-purple-700'>
          {getMonth(new Date().toISOString(), true)} -{' '}
          {new Date().getFullYear()}
        </h2>
      </div>
      <div className='space-y-3 overflow-x-hidden overflow-y-auto'>
        {data?.expenses?.length > 0 &&
          data.expenses.map((expense: ExpenseModel, i: number) => (
            <Transition
              appear
              show={true}
              enter='transition ease-in-out duration-1000 transform'
              enterFrom='opacity-0 scale-0'
              enterTo='opacity-100 scale-100'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              {' '}
              <Expense key={i} data={expense} />
            </Transition>
          ))}
      </div>
      {!data && !error && (
        <CircleNotch
          className='mx-auto my-auto text-purple-400 animate-spin'
          size={32}
          weight='bold'
        />
      )}
      {error && (
        <div className='mx-auto my-auto'>
          <SmileySad
            className='mx-auto text-purple-400'
            size={64}
            weight='bold'
          />
          <span className='text-xl font-bold text-purple-500'>
            Erro ao carregar dados.
          </span>
        </div>
      )}
      {data?.expenses?.length === 0 && (
        <div className='max-w-xs mx-auto my-auto text-center'>
          <SmileyMeh
            className='mx-auto text-purple-400 animate-bounce'
            size={64}
            weight='bold'
          />
          <span className='text-xl font-bold text-purple-500'>
            Nenhuma despesa adicionada.
          </span>
        </div>
      )}
    </div>
  );
};

export default History;
