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

        <Route path="https://heartfelt-heliotrope-c385bc.netlify.app/admin" element={<Admin />}></Route>
        <Route path="https://heartfelt-heliotrope-c385bc.netlify.app/orders" element={<Orders />}></Route>

      </Routes>
    
    </BrowserRouter>


    
    </>

  );
}

export default App;
