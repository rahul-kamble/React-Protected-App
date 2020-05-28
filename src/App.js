import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Router from './Router';

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
    </div>
  );
}

export default App;
