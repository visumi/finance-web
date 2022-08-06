import { Transition } from '@headlessui/react';
import { useAtom } from 'jotai';
import { Toaster } from 'react-hot-toast';
import Header from '../components/header';
import { userAtom } from '../utils/atoms';

const Settings = () => {
  const [user] = useAtom(userAtom);

  return (
    <div className='flex px-[30%] py-8 mx-auto gap-4 flex-col h-screen overflow-hidden bg-no-repeat bg-cover bg-waves'>
      <Header />
      <Transition
        appear
        show
        className='flex flex-col flex-grow gap-4'
        enter='transition ease-in-out duration-1000 delay-100 transform'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transition ease-in-out duration-300 transform'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      >
        <div className='flex flex-col flex-grow gap-2 p-4 bg-white rounded-lg shadow-lg'>
          <h1 className='text-2xl font-bold text-purple-900'>CONFIGURAÇÕES</h1>
          <div className='bg-purple-700 shadow-md rounded-xl h-28'>xd</div>
        </div>
      </Transition>
      <Toaster position='top-right' reverseOrder={false} />
    </div>
  );
};

export default Settings;
