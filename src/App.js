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

        <Route  path="/" element={<Admin />}></Route>
        <Route  path="https://superlative-biscochitos-e2bcb4.netlify.app/admin" element={<Admin />}></Route>
        <Route  path="www.superlative-biscochitos-e2bcb4.netlify.app/orders" element={<Orders />}></Route>

      </Routes>
    
    </BrowserRouter>


    
    </>

  );
}

export default App;
