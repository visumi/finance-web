import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import fetcher from './utils/fetcher';

const App = () => {
  console.log('Desenvolvido por Vinícius Isumi - https://isumi.com.br');

  const navigate = useNavigate();

  const { data, error } = useSWR('http://localhost:4000/account', fetcher);

  useEffect(() => {
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
      <Route path='/dashboard' element={<Dashboard user={data} />} />
    </Routes>
  );
};

export default App;
