import { Plus, SignOut } from 'phosphor-react';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import History from '../components/history';
import Meta from '../components/meta';
import NewModal from '../components/new-expense/new-modal';
import { User } from '../models/user';
import images from '../utils/images';

interface DashboardProps {
  user: User;
}

const Dashboard = ({ user }: DashboardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const logout = () => {
    fetch('http://localhost:4000/auth/logout', { credentials: 'include' })
      .then((r) => r.json())
      .then((_) => {});
    window.open('/', '_self');
  };

  return (
    <div className='flex px-[30%] py-8 mx-auto gap-4 flex-col h-screen overflow-hidden bg-no-repeat bg-cover bg-waves'>
      <NewModal isOpen={isOpen} closeModal={() => setIsOpen(false)}></NewModal>
      <div className='flex h-20 p-2 rounded-lg shadow-lg bg-poly2'>
        <img
          className='my-auto ml-4 border-2 border-purple-400 rounded-full h-14 w-14'
          src={user?.img || images.UserImg}
          referrerPolicy='no-referrer'
        ></img>
        <div className='flex flex-col pl-4 my-auto'>
          <h1 className='text-2xl font-medium text-purple-50'>
            {user?.username?.toUpperCase() || 'FINN THE HUMAN'}
          </h1>
          <span className='font-medium text-purple-50'>
            #{user?.id || '0000'}
          </span>
        </div>
        <SignOut
          onClick={() => logout()}
          className='my-auto ml-auto transition ease-in-out duration-75 mr-4 text-purple-50 hover:text-purple-200 hover:scale-105 hover:cursor-pointer'
          size={32}
          weight='fill'
        />
      </div>
      <div className='p-4 bg-white rounded-lg shadow-lg'>
        <Meta />
        <button
          onClick={() => setIsOpen(true)}
          className='flex w-full py-2 mt-4 rounded-full bg-gradient-to-r from-purple-600 to-purple-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-purple-500 text-purple-50'
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
  );
};

Dashboard.defaultProps = {};

export default Dashboard;
