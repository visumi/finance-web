import { Transition } from '@headlessui/react';
import clsx from 'clsx';
import { useAtom } from 'jotai';
import { Gear } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Header from '../components/header';
import { userAtom } from '../utils/atoms';
import { currencyMask } from '../utils/currencyMask';

const Settings = () => {
  const [user] = useAtom(userAtom);
  const [price, setPrice] = useState('0');
  const [allowSubmit, setAllowSubmit] = useState(false);

  useEffect(() => {
    if (price) {
      setAllowSubmit(true);
    } else {
      setAllowSubmit(false);
    }
  }, [price]);

  return (
    <div className='flex px-[30%] py-8 mx-auto gap-4 flex-col h-screen overflow-hidden bg-no-repeat bg-cover bg-waves'>
      <Header />
      <Transition
        appear
        show
        className='flex flex-col flex-grow'
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
            placeholder='0'
            maxLength={15}
            value={`R$ ${price}`}
            onChange={(e) => setPrice(currencyMask(e).target.value)}
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
                }
              )}
              onClick={() => {
                console.log(price);
              }}
            >
              Salvar
            </button>
          </div>
        </div>
      </Transition>
      <Toaster position='top-right' reverseOrder={false} />
    </div>
  );
};

export default Settings;
