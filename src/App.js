import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from './components/Admin';
import Orders from './components/Orders'
import './index.css';


function App() {








  return (

    <>
    <BrowserRouter>

      <Routes>

        <Route exact path="/" element={<Admin />}></Route>
        <Route exact path="/admin" element={<Admin />}></Route>
        <Route exact path="/orders" element={<Orders />}></Route>

      </Routes>
    
    </BrowserRouter>


    
    </>

  );
}

export default App;
