import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import Settings from './pages/settings';
import { userAtom } from './utils/atoms';
import fetcher from './utils/fetcher';

const App = () => {
  console.log('Desenvolvido por Vinícius Isumi - https://isumi.com.br');

  const [user, setUser]= useAtom(userAtom);
  
  const navigate = useNavigate();

  const { data, error } = useSWR('http://localhost:4000/account', fetcher);

  useEffect(() => {
    setUser(data);
    if (!(!error && !data) && !data.loggedIn) {
      navigate('/', { replace: true });
    }
  }, [data]);

  if (!data && !error) {
    return <></>;
  }

  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/settings' element={<Settings />} />
    </Routes>
  );
};

export default App;
