import React from 'react';
import './App.css';
import YelpApiPrototype from './containers/YelpApiPrototype';
import ActivityDetails from './components/ActivityDetails';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserService from './services/UserService';
import EventService from './services/EventService';
import ItineraryService from './services/ItineraryService';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        // Purposely initalized without attributes due to guard pattern in render method below
        this.state = {}

        // Services
        let userService = UserService.getInstance();
        let eventService = EventService.getInstance();
        let itineraryService = ItineraryService.getInstance();

        // findAllUsers
        this.users = userService.findAllUsers();
        this.users.then(result => this.setState({ users: result }));


        // findAllEvents
        this.events = eventService.findAllEvents();
        this.events.then(result => this.setState({ events: result }));

        //findAllItineraries
        this.itineraries = itineraryService.findAllItineraries();
        this.itineraries.then(result => this.setState({ itineraries: result }));


        




       

        this.renderAllUsers = this.renderAllUsers.bind(this);



        

    }

    renderAllUsers = () => this.state.users.map(user => console.log(user));



    render() {
        return (
            <div className="App">
                {/**Guard pattern below will allow us to ONLY render if this.state.events has a value. This can be used
                 to pass values to different components as well, which should remove the need for redux if we do this across
                 the board. */}
                {this.state.users && console.log(this.state.users, 'users')}
                {this.state.events && console.log(this.state.events, 'events')}
                {this.state.itineraries && console.log(this.state.itineraries, 'itineraries')}

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
