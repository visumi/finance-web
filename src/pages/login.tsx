import {
  Calendar,
  Coins,
  CurrencyDollarSimple,
  HandPalm,
  TrendUp,
  Wallet,
} from 'phosphor-react';
import Images from '../utils/images';

const Login = () => {
  const signIn = (event: any) => {
    event.preventDefault();
    window.open('http://localhost:4000/auth/google', '_self');
  };

  return (
    <div className='flex flex-col h-screen bg-no-repeat bg-cover bg-poly'>
      <div className='relative flex flex-col p-16 mx-auto my-auto rounded-lg shadow-lg bg-purple-50'>
        <TrendUp
          className='absolute left-0 bottom-[-10px] text-purple-500 opacity-20'
          size={256}
          weight='fill'
        />
        <CurrencyDollarSimple
          className='absolute text-purple-500 -rotate-45 bottom-20 right-20 opacity-20'
          size={128}
          weight='fill'
        />
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
          className='absolute bottom-0 left-0'
        >
          <path
            fill='#a855f7'
            fillOpacity='1'
            d='M0,96L34.3,106.7C68.6,117,137,139,206,170.7C274.3,203,343,245,411,234.7C480,224,549,160,617,149.3C685.7,139,754,181,823,213.3C891.4,245,960,267,1029,250.7C1097.1,235,1166,181,1234,160C1302.9,139,1371,149,1406,154.7L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z'
          ></path>
        </svg>
        <Coins className='mx-auto text-amber-400' size={72} weight='fill' />
        <h1 className='mx-auto text-4xl font-bold text-purple-900'>finance.</h1>
        <div className='flex pt-16 mx-auto space-x-16'>
          <div className='flex w-56 h-56 p-4 bg-white rounded-lg shadow-[0px_0px_14px_0px_rgba(168,85,247,0.61)]'>
            <div className='my-auto space-y-4 text-center'>
              <Wallet
                className='mx-auto text-purple-600'
                size={48}
                weight='fill'
              />
              <span className='font-medium text-lg text-purple-800'>
                Controle seus gastos diários.
              </span>
            </div>
          </div>
          <div className='flex w-56 h-56 p-8 bg-white rounded-lg shadow-[0px_0px_14px_0px_rgba(168,85,247,0.61)]'>
            <div className='my-auto space-y-4 text-center'>
              <HandPalm
                className='mx-auto text-purple-600'
                size={48}
                weight='fill'
              />
              <span className='font-medium text-lg text-purple-800'>
                Defina seu limite de gastos.
              </span>
            </div>
          </div>
          <div className='flex w-56 h-56 p-8 bg-white rounded-lg shadow-[0px_0px_14px_0px_rgba(168,85,247,0.61)]'>
            <div className='my-auto space-y-4 text-center'>
              <Calendar
                className='mx-auto text-purple-600'
                size={48}
                weight='fill'
              />
              <span className='font-medium text-lg text-purple-800'>
                Relatório de gastos mensais.
              </span>
            </div>
          </div>
        </div>
        <h2 className='pt-16 mx-auto text-3xl font-bold text-purple-800'>
          Entre agora mesmo
        </h2>
        <div className='mx-auto mt-8'>
          <button
            onClick={(e) => signIn(e)}
            className='bg-[#4285F4] w-60 h-12 rounded-md relative hover:ring ring-blue-200'
          >
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

export default Login;
