import { Transition } from '@headlessui/react';
import { Plus } from 'phosphor-react';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import History from '../components/history';
import Meta from '../components/meta';
import NewModal from '../components/new-expense/new-modal';

const MetaHistory = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Transition
      appear
      show
      className='flex flex-col overflow-hidden flex-grow'
      enter='transition ease-in-out duration-500 transform'
      enterFrom='opacity-0'
      enterTo='opacity-100'
      leave='transition ease-in-out duration-300 transform'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'
    >
      <div className='flex flex-col flex-grow gap-4 overflow-hidden'>
        <NewModal
          isOpen={isOpen}
          closeModal={() => setIsOpen(false)}
        ></NewModal>
        <div className='p-4 bg-white rounded-lg shadow-lg'>
          <Meta />
          <button
            onClick={() => setIsOpen(true)}
            className='flex w-full py-2 mt-4 rounded-full shadow-sm bg-gradient-to-r from-purple-600 to-purple-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-purple-500 text-purple-50'
          >
            <Plus className='my-auto ml-auto' size={24} weight='bold' />
            <span className='my-auto ml-2 mr-auto text-lg text-medium'>
              Novo gasto
            </span>
          </button>
        </div>
        <History />
        <Toaster position='top-right' reverseOrder={false} />
      </div>
    </Transition>
  );
};

MetaHistory.defaultProps = {};

export default MetaHistory;
