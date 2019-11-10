import React from 'react';
import logo from './logo.svg';
import './App.css';
import ItineraryResult from './components/ItineraryResults';
import HomePage from './components/HomePage';
import ActivityDetails from './components/ActivityDetails';
import YelpApiPrototype from '../src/containers/YelpApiPrototype';

function App() {
  return (
    <div className="App">
      {/* <ItineraryResult/> */}
      {/* <HomePage/> */}
      {/* <ActivityDetails/> */}
      <YelpApiPrototype/>
    </div>
  );
}

export default App;
