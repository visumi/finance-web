import { Plus, SignOut } from 'phosphor-react';
import History from '../components/history';
import Meta from '../components/meta';
import { User } from '../models/user';
import images from '../utils/images';

interface DashboardProps {
  user: User;
}

const Dashboard = ({ user }: DashboardProps) => {
  console.log(user);

  const logout = () => {
    fetch('http://localhost:4000/auth/logout', { credentials: 'include' })
      .then((r) => r.json())
      .then((_) => {});
    window.open('/', '_self');
  };

  return (
    <div className='flex h-screen bg-no-repeat bg-cover bg-waves'>
      <div className='flex flex-col justify-center w-full'>
        <div className='flex w-2/5 mx-auto mt-8 mb-4 rounded-lg shadow-md h-32 bg-poly2'>
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
              #{user?.id || '???'}
            </span>
          </div>
          <SignOut
            onClick={() => logout()}
            className='my-auto ml-auto mr-4 text-purple-50 hover:text-purple-200 hover:scale-105 hover:cursor-pointer'
            size={32}
            weight='fill'
          />
        </div>
        <div className='w-2/5 p-4 mx-auto mb-4 bg-white rounded-lg shadow-md'>
          <Meta />
          <button className='flex w-full py-2 mt-4 bg-purple-600 rounded-full hover:bg-purple-500 text-purple-50'>
            <Plus className='my-auto ml-auto' size={24} weight='bold' />
            <span className='my-auto ml-2 mr-auto text-lg text-medium'>
              Novo gasto
            </span>
          </button>
        </div>
        <History />
      </div>
    </div>
  );
};

export default Dashboard;
