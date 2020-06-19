import React, { Component } from 'react';
import './App.css';
import { Greet } from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Api from './components/Api'

function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome coin="Bitcoin" ticker="BTC" />
      <Welcome coin="Ethereum" ticker="ETH" />
      <Welcome coin="Electroneum" ticker="ETN" />
      <Message />
      <Api />
    </div>

  );
}

export default App;
