import { FC } from 'react';
import MetaBar from './meta-bar';

const Meta: FC = () => {
  const data: boolean = true;

  return (
    <>
      {!data && (
        <div className='flex flex-col justify-around w-full p-4 bg-gradient-to-r from-slate-400 to-slate-600 h-28 rounded-xl'>
          <span className='text-lg font-medium text-slate-50'>
            Gasto mensal
          </span>
          <div
          className='w-full h-4 bg-slate-50 animate-pulse transition-width duration-1000 rounded-full'
        ></div>
          <div className='flex justify-between'>
            <span className='text-lg font-medium animate-pulse text-slate-50 rounded-xl'>
              R$00,00
            </span>
            <span className='text-lg font-medium animate-pulse text-slate-50 rounded-xl'>
              R$00,00
            </span>
          </div>
        </div>
      )}
      {data && (
        <div className='flex flex-col justify-around w-full p-4 bg-gradient-to-r from-green-500 to-green-600 h-28 rounded-xl'>
          <span className='text-lg font-medium text-green-50'>
            Gasto mensal
          </span>
          <MetaBar />
          <div className='flex justify-between'>
            <span className='text-lg font-medium text-green-50 rounded-xl'>
              R$50,00
            </span>
            <span className='text-lg font-medium text-green-50 rounded-xl'>
              R$100,00
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Meta;
