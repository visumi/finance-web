import { Dialog, Transition } from '@headlessui/react';
import { FC, Fragment } from 'react';
import toast from 'react-hot-toast';
import NewExpense from './new-expense';

interface newModalProps {
  isOpen: boolean;
  closeModal(): void;
}

const NewModal: FC<newModalProps> = ({
  isOpen = false,
  closeModal,
}: newModalProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex items-center justify-center min-h-full p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-2xl px-6 pt-6 pb-10 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl'>
                  <Dialog.Title
                    as='h3'
                    className='pb-2 text-2xl font-bold text-purple-900'
                  >
                    NOVO GASTO
                  </Dialog.Title>
                  <div className='py-2'>
                    <NewExpense />
                  </div>
                  <div className='flex mt-4'>
                    <button
                      type='button'
                      className='justify-center px-4 py-2 ml-auto text-sm font-medium text-purple-900 bg-purple-100 border border-transparent rounded-md hover:bg-purple-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2'
                      onClick={closeModal}
                    >
                      Cancelar
                    </button>
                    <button
                      type='button'
                      className='justify-center px-4 py-2 ml-2 text-sm font-medium bg-purple-900 border border-transparent rounded-md text-purple-50 hover:bg-purple-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2'
                      onClick={() => {
                        closeModal();
                        toast.success('Gasto adicionado');
                      }}
                    >
                      Salvar
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default NewModal;
