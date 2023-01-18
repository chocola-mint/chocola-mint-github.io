import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HeadNav from './components/HeadNav';
import { Outlet } from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <Header logo={logo}/>
      <HeadNav/>
      <Outlet/>
    </div>
  );
}

export default App;
