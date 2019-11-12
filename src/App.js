import React from 'react';
import './App.css';
import YelpApiPrototype from '../src/containers/YelpApiPrototype';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ActivityDetails from './components/ActivityDetails';

function App() {
  return (
      <div className="App">
          <Router>
              <Route exact path="/" component={YelpApiPrototype} />
              <Route exact path="/:name" render={business => <ActivityDetails business={business}/>} />
            </Router>
    </div>
  );
}

export default App;
