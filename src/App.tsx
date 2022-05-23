import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
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
import SearchPage from './pages/Search.page';

function App() {

  const [cookie, setCookie, removeCookie] = useCookies(['token']);
  const favoriteMovies = localStorage.getItem('favoriteMovie');
  const navigate = useNavigate();

  if(favoriteMovies === null){
    removeCookie("token");
    navigate("/login");
  }

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
      <Route path='/movie/:movieId' element={ <MoviePage /> } />
      <Route path='/person/:personId' element={ <PersonPage /> } />
      <Route path='/search/:search' element={ <SearchPage /> } />

      <Route path='*' element={ <FourOhFour /> } />
    </Routes>
    </>
  );
}

export default App;
