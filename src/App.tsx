import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/Main.page';
import Navbar from './components/Navbar.component';
import LoginPage from './pages/Login.page';
import RegisterPage from './pages/Register.page';
import FavoritePage from './pages/Favorite.page';
import { Box, Divider } from '@chakra-ui/react';
import { blue, defaultPadding } from './constants';
import FourOhFour from './pages/404.page';

function App() {
  //TODO: open favorites only if cookies are set (user logged in)
  return (
    <>
    <Navbar title='Best Movies' loggedIn={true} />

    <Divider color={blue} />
    <Box h={defaultPadding} />
    
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/favorites' element={<FavoritePage />} />
      <Route path='*' element={<FourOhFour />} />
    </Routes>
    </>
  );
}

export default App;
