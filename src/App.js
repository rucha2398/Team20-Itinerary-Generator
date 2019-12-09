import React from 'react';
import './App.css';
import YelpApiPrototype from './containers/YelpApiPrototype';
import ActivityDetails from './components/ActivityDetails';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserService from './services/UserService';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      businesses:[]
    }

    let userService = UserService.getInstance();
    this.users = userService.findAllUsers();
    this.users.then(result => this.setState({ users: result }));
    
      

   
  }

  render() {
    return (
      <div className="App">
      {console.log(this.state.users, "test")}
          <Router>
              <NavBar users={this.state.users}></NavBar>
              <Route exact path="/" component={YelpApiPrototype} />
              <Route exact path="/:name/:phone/:addy1/:addy2/:rating/:price" isAuthed={true} render={props => <ActivityDetails {...props}/>} />
            </Router>
    </div>
  );

  }
  
}

