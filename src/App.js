import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import Account from './Pages/Account';
import Stock from './Pages/Stock';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './Pages/Cart';


function App() {
  return (
    <div className="Container">
      <Routes>
        <Route index element={<Signin />} />
        <Route path='/' element = {<Signin/>} />
        <Route path='/signup' element = {<Signup/>} />
        <Route path='/account' element = {<Account/>}/>
        <Route path='/stock' element = {<Stock/>}/>
        <Route path = '/cart' element = {<Cart/>}/>
      </Routes>
      <ToastContainer />
    </div>

  );
}

export default App;
