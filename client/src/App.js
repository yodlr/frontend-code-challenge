import React, { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';

import api from './api';

function App() {

  useEffect(() => {
    // const testApi = async () => {
    //   const response = await api.test()
    //   console.log(response)
    // }
    // testApi()
    const getUsers = async () => {
      const response = await api.getAllUsers()
      console.log(response)
    }
    getUsers()
  }, [])  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
