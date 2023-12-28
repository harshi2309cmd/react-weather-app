import React from 'react';
import Weather from './Weather';
import './App.css';

export default function App() {
  return (
    <div className="App">
     <Weather />
     <footer>
      This Project is coded by {""}
      <a href="" >Harshitha Reddy</a>{""}and is{""}  
     <a href="https://github.com/harshi2309cmd/react-weather-app">Open-sourced at Github</a>
     </footer>
    </div>
  );
}


