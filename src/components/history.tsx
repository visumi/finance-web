import { Transition } from '@headlessui/react';
import { useAtom } from 'jotai';
import { CircleNotch, CurrencyDollar, SmileySad } from 'phosphor-react';
import { FC, useCallback, useEffect, useState } from 'react';
import useSWR from 'swr';
import { Expense as ExpenseModel } from '../models/expense';
import { expensesAtom } from '../utils/atoms';
import fetcher from '../utils/fetcher';
import { getMonth } from '../utils/getMonth';
import Expense from './expense';

const History: FC = () => {
  const { data, error } = useSWR('http://localhost:4000/expense', fetcher);

  const [, setExpenses] = useAtom(expensesAtom);
  const [renders, setRenders] = useState(0);

  const countRender = useCallback(() => {
    setRenders(renders + 1);
  }, [renders, setRenders]);

  useEffect(() => {
    setExpenses(data?.expenses);
    countRender();
  }, [data]);

  return (
    <div className='flex flex-col flex-grow gap-2 p-4 overflow-hidden bg-white rounded-lg shadow-lg'>
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
          data.expenses.map((expense: ExpenseModel, i: number) => {
            let delay;

            switch (i) {
              case 1:
                delay = 'delay-200';
                break;
              case 2:
                delay = 'delay-300';
                break;
              case 3:
                delay = 'delay-500';
                break;
              case 4:
                delay = 'delay-700';
                break;
              default:
                delay = 'delay-100';
                break;
            }

            return (
              <Transition
                key={i}
                appear
                show
                enter={`transition-transform ease-in-out ${
                  renders < 2 ? delay : ''
                } transform`}
                enterFrom='opacity-0 -translate-x-96'
                enterTo='opacity-100 translate-x-0'
                leave='transition ease-in-out duration-300 transform'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <Expense key={i} data={expense} />
              </Transition>
            );
          })}
      </div>
      {!data && !error && (
        <CircleNotch
          className='mx-auto my-auto text-purple-400 animate-spin'
          size={32}
          weight='bold'
        />
      )}
      {error && data?.expenses?.length === 0 && (
        <div className='mx-auto my-auto'>
          <SmileySad
            className='mx-auto text-purple-200'
            size={64}
            weight='bold'
          />
          <span className='text-xl font-bold text-purple-300'>
            Erro ao carregar dados.
          </span>
        </div>
      )}
      {!error && data?.expenses?.length === 0 && (
        <div className='max-w-xs mx-auto my-auto text-center'>
          <CurrencyDollar
            className='mx-auto text-purple-200 animate-bounce'
            size={64}
            weight='bold'
          />
          <span className='text-xl font-bold text-purple-300'>
            Nenhuma despesa adicionada.
          </span>
        </div>
      )}
    </div>
  );
};

export default History;
