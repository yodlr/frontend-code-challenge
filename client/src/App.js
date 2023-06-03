import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import api from './api';
import Admin from './components/Admin';
import Register from './components/Register';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <div id='navbar-outer'>
          <div id='navbar-inner'>
            <a href='/admin'><p>admin</p></a>
            <a href='/register'><p>register</p></a>
          </div>
        </div>
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
