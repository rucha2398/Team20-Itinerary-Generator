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
            businesses: [],
            foundUser: {}
        }

        let userService = UserService.getInstance();

  
       

        this.users = userService.findAllUsers();
        this.users.then(result => this.setState({ users: result }));

        this.renderAllUsers = this.renderAllUsers.bind(this);



        

    }

    renderAllUsers = () => this.state.users.map(user => console.log(user));



    render() {
        return (
            <div className="App">
                <Router>
                    <NavBar users={this.state.users}></NavBar>

                    <Route exact path="/" component={YelpApiPrototype} />
                    <Route exact path="/:name/:phone/:addy1/:addy2/:rating/:price" isAuthed={true} render={props => <ActivityDetails {...props} />} />
                </Router>
            </div>
        );

    }

}


/**
 *  
 *  
 *  
 * 
       userService.findUserById(123).then(user => console.log(user, 'user'));


 *     userService.createUser({
            "firstName": "createUser",
            "lastName": "testUser",
            "username": "createUserName",
            "password": "createPassword",
            "email": "edgarBlah@webdev.com",
            "loggedIn": true,
            "favorites": []
        })

       userService.updateUser(123, {
            "firstName": "123UserUpdated"
        })

        userService.deleteUser(123);



        */
