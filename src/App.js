import { useState, useEffect } from "react-dom";
import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './components/fecthApi';
import MyComponent1 from './components/axiosApi';

function App() {
  return (
    <div className="App">
          Learn React

      <MyComponent />
      <MyComponent1 />
    </div>
  );
}

export default App;
