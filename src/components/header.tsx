import { useAtom } from 'jotai';
import { Coins, Gear, House, SignOut } from 'phosphor-react';
import { Link } from 'react-router-dom';
import { userAtom } from '../utils/atoms';
import images from '../utils/images';

const Header = () => {
  const [user] = useAtom(userAtom);

  const logout = () => {
    fetch('https://isumi-finance-back.herokuapp.com/auth/logout', { credentials: 'include' })
      .then((r) => r.json())
      .then((_) => {});
    window.open('/', '_self');
  };

  return (
    <div className='flex h-20 p-2 rounded-lg shadow-lg bg-poly2 flex-shrink-0'>
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
      <Link className='my-auto ml-auto' to='/dashboard'>
        <House
          className='transition-transform ease-in-out duration-75 mr-4 text-purple-50 hover:text-purple-200 hover:scale-105 hover:cursor-pointer'
          size={32}
          weight='fill'
        />
      </Link>
      <Link className='my-auto' to='/dashboard/settings'>
        <Gear
          className='transition-transform ease-in-out duration-75 mr-4 text-purple-50 hover:text-purple-200 hover:rotate-90 hover:scale-105 hover:cursor-pointer'
          size={32}
          weight='fill'
        />
      </Link>
      <SignOut
        onClick={() => logout()}
        className='my-auto transition ease-in-out duration-75 mr-4 text-purple-50 hover:text-purple-200 hover:scale-105 hover:cursor-pointer'
        size={32}
        weight='fill'
      />
    </div>
  );
};

export default Header;
