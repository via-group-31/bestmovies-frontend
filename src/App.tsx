import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserService from './services/User.service';
import { Route, Routes } from 'react-router-dom';

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
    <Routes>
      <Route path='/' element={<div>Main Page</div>} />
      <Route path='*' element={<div>404</div>} />
    </Routes>
  );
}

export default App;
