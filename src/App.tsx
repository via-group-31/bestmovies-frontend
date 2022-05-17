import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/Main.page';
import Navbar from './components/Navbar.component';
import LoginPage from './pages/Login.page';
import RegisterPage from './pages/Register.page';
import FavoritePage from './pages/Favorite.page';
import MoviePage from './pages/Movie.page';

import { Box, Divider } from '@chakra-ui/react';
import { blue, defaultPadding } from './constants';
import FourOhFour from './pages/404.page';
import { useCookies } from 'react-cookie';
import PersonPage from './pages/Person.page';

function App() {

  const [cookie, setCookie, remvoeCookie] = useCookies(['token']);

  return (
    <>
    <Navbar title='Best Movies' loggedIn={cookie.token !== undefined} />

    <Divider color={blue} />
    <Box h={defaultPadding} />
    
    <Routes>
      <Route path='/' element={ <MainPage /> } />
      <Route path='/login' element={ cookie.token === undefined ? <LoginPage /> : <FourOhFour /> } />
      <Route path='/register' element={ cookie.token === undefined ? <RegisterPage /> : <FourOhFour /> } />
      <Route path='/favorites' element={ cookie.token !== undefined ? <FavoritePage /> : <FourOhFour /> } />
      <Route path='/movie' element={ <MoviePage /> } />
      <Route path='/person' element={ <PersonPage /> } />

      <Route path='*' element={ <FourOhFour /> } />
    </Routes>
    </>
  );
}

export default App;
