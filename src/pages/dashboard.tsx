import { Outlet } from 'react-router-dom';
import Header from '../components/header';

const Dashboard = () => {
  return (
    <div className='flex px-[30%] py-8 mx-auto gap-4 flex-col h-screen bg-no-repeat bg-cover bg-waves'>
      <Header />
      <Outlet />
    </div>
  );
};

Dashboard.defaultProps = {};

export default Dashboard;
