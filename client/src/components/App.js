import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Loader from '../pages/loader/Loader';
import Form from '../pages/form/Form';
import Home from '../pages/home/Home';

const App = () => {
  return (
    <BrowserRouter className='app'>
      <Header />
      <Nav />

      <Routes>
        <Route path='*' element={<Loader />} />
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<Form />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
