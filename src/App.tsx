import {
  ArrowFatLineDown,
  Calendar,
  Coins,
  HandPalm,
  TrendUp,
  Wallet,
} from 'phosphor-react';
import './App.css';
import Images from './utils/images';

const App = () => {
  return (
    <div className='flex flex-col h-screen bg-no-repeat bg-cover bg-poly'>
      <div className='relative flex flex-col p-16 mx-auto my-16 rounded-lg shadow-lg bg-purple-50'>
        <TrendUp className='absolute bottom-0' size={32} weight='fill' />
        <Coins className='mx-auto text-amber-400' size={64} weight='fill' />
        <h1 className='mx-auto text-3xl font-bold text-purple-900'>COCOIN</h1>
        <div className='flex pt-16 mx-auto space-x-16'>
          <div className='flex w-56 h-56 p-4 bg-white rounded-lg shadow-[0px_0px_14px_0px_rgba(168,85,247,0.61)]'>
            <div className='my-auto space-y-4 text-center'>
              <Wallet
                className='mx-auto text-purple-600'
                size={32}
                weight='fill'
              />
              <span className='font-medium text-purple-800'>
                Controle seus gastos diários.
              </span>
            </div>
          </div>
          <div className='flex w-56 h-56 p-8 bg-white rounded-lg shadow-[0px_0px_14px_0px_rgba(168,85,247,0.61)]'>
            <div className='my-auto space-y-4 text-center'>
              <HandPalm
                className='mx-auto text-purple-600'
                size={32}
                weight='fill'
              />
              <span className='font-medium text-purple-800'>
                Defina seu limite de gastos.
              </span>
            </div>
          </div>
          <div className='flex w-56 h-56 p-8 bg-white rounded-lg shadow-[0px_0px_14px_0px_rgba(168,85,247,0.61)]'>
            <div className='my-auto space-y-4 text-center'>
              <Calendar
                className='mx-auto text-purple-600'
                size={32}
                weight='fill'
              />
              <span className='font-medium text-purple-800'>
                Relatórios de gastos mensais.
              </span>
            </div>
          </div>
        </div>
        <h2 className='pt-16 mx-auto text-3xl font-medium text-purple-800'>
          Entre agora mesmo
        </h2>
        <ArrowFatLineDown
          className='mx-auto mt-4 text-purple-900'
          size={32}
          weight='fill'
        />
        <div className='pt-8 mx-auto'>
          <button className='bg-[#4285F4] w-60 h-12 rounded-md relative hover:ring ring-blue-200'>
            <div>
              <div className='absolute flex w-10 h-10 bg-white rounded-sm top-1 left-1'>
                <div className='mx-auto my-2'>
                  <img src={Images.Google} width={22} height={22} />
                </div>
              </div>
              <p className='pl-10 font-serif text-white'>Entrar com o Google</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
