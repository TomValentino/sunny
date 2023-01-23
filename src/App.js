import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from './components/Admin';
import Orders from './components/Orders'
import Home from './components/Home'
import './index.css';


function App() {








  return (

    <>
    <BrowserRouter>

      <Routes>

        <Route  path="/" element={<Home />}></Route>
        <Route  path="/admin" element={<Admin />}></Route>
        <Route  path="/orders" element={<Orders />}></Route>

      </Routes>
    
    </BrowserRouter>


    
    </>

  );
}

export default App;
