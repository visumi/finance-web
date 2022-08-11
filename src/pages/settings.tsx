import { Transition } from '@headlessui/react';
import clsx from 'clsx';
import { CircleNotch, Gear } from 'phosphor-react';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import useSWR from 'swr';
import { currencyMask } from '../utils/currencyMask';
import fetcher from '../utils/fetcher';

const Settings = () => {
  const { data } = useSWR('https://isumi-finance-back.herokuapp.com/limit', fetcher);

  const [limit, setLimit] = useState('');
  const [allowSubmit, setAllowSubmit] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (limit) {
      setAllowSubmit(true);
    } else {
      setAllowSubmit(false);
    }
  }, [limit]);

  useEffect(() => {
    if (!limit) {
      setLimit(data?.rows[0].expense_limit);
    }
  }, [data]);

  const postSettings = () => {
    setAllowSubmit(false);
    setLoading(true);
    fetch('https://isumi-finance-back.herokuapp.com/limit', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ expense_limit: limit }),
    }).then((res) => {
      setAllowSubmit(true);
      setLoading(false);
      if (res?.status === 200) {
        toast.success('Configuraçoes salvas!');
      } else {
        toast.error('Erro ao salvar configurações.');
      }
    });
  };

  return (
    <Transition
      appear
      show
      className='flex flex-col overflow-hidden'
      enter='transition ease-in-out duration-500 transform'
      enterFrom='opacity-0'
      enterTo='opacity-100'
      leave='transition ease-in-out duration-300 transform'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'
    >
      <div className='relative flex p-4 rounded-t-lg bg-gradient-to-r from-purple-700 to-purple-900'>
        <h1 className='text-2xl font-bold text-purple-100'>Configurações</h1>
        <Gear
          className='absolute text-purple-900 right-4 -bottom-16 rotate-12'
          size={128}
          weight='fill'
        />
        <Gear
          className='absolute right-3 -bottom-[65px] rotate-12 text-purple-800'
          size={128}
          weight='fill'
        />
      </div>
      <div className='relative flex flex-col p-4 bg-white rounded-b-lg shadow-lg'>
        <h2 className='text-lg font-bold text-purple-700'>
          LIMITE DE GASTO MENSAL
        </h2>
        <input
          maxLength={15}
          value={`R$ ${limit}`}
          onChange={(e) => setLimit(currencyMask(e).target.value)}
          className='w-1/2 px-2 py-1 text-lg font-medium text-purple-700 placeholder-purple-400 border-2 border-purple-300 rounded-lg outline-none'
        ></input>
        <div className='flex justify-end mt-4'>
          <button
            type='button'
            disabled={!allowSubmit}
            className={clsx(
              {
                'justify-center px-4 py-2 text-sm font-medium transition ease-out duration-200 bg-purple-900 border hover:cursor-pointer border-transparent rounded-md text-purple-50 hover:bg-purple-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2':
                  allowSubmit,
              },
              {
                'justify-center px-4 py-2 text-sm font-medium bg-purple-900 opacity-30 border border-transparent rounded-md text-purple-50 hover:cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2':
                  !allowSubmit,
              },
              {
                'justify-center px-4 py-2 text-sm font-medium bg-purple-900 opacity-30 border border-transparent rounded-md text-purple-50 hover:cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2':
                  loading,
              }
            )}
            onClick={() => {
              postSettings();
            }}
          >
            {loading && (
              <CircleNotch size={16} className='animate-spin' weight='fill' />
            )}
            {!loading && 'Salvar'}
          </button>
        </div>
      </div>
      <Toaster position='top-right' reverseOrder={false} />
    </Transition>
  );
};

export default Settings;
