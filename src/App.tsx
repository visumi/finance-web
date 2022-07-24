import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Login from './pages/login';

const App = () => {
  console.log('Desenvolvido por Vinícius Isumi - https://isumi.com.br');

  const [user, setUser] = useState({ loggedIn: false });

  useEffect(() => {
    fetch('http://localhost:4000/account', { credentials: 'include' })
      .then((r) => r.json())
      .then((data) => {
        setUser({ ...data });
      });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
