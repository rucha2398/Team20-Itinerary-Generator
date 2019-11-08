import React from 'react';
import logo from './logo.svg';
import './App.css';
import ItineraryResult from './components/ItineraryResults';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <ItineraryResult/>
      {/* <HomePage/> */}
    </div>
  );
}

export default App;
