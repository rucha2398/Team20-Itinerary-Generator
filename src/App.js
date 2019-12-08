import React from 'react';
import './App.css';
import YelpApiPrototype from './containers/YelpApiPrototype';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
      <div className="App">
          <Router>
              <Route exact path="/" component={YelpApiPrototype} />
              <Route exact path="/:name/:phone/:addy1/:addy2/:rating/:price" isAuthed={true} render={props => <ActivityDetails {...props}/>} />
            </Router>
    </div>
  );
}

export default App;
