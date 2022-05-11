import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserService from './services/User.service';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/Main.page';
import Navbar from './components/Navbar.component';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

  return (
    <>
    <Navbar />
    
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='*' element={<div>404</div>} />
    </Routes>
    </>
  );
}

export default App;
