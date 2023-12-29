import React from 'react';
import Weather from './Weather';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className= "container">
        <div className='weather'>
          <Weather defaultCity="New York" />
          <footer>
            This Project is coded by {""} Harshitha Reddy{""} and is {""}  
            <a href="https://github.com/harshi2309cmd/react-weather-app">Open-sourced at Github</a>
          </footer>
        </div>
      </div>
    </div>
);
}


