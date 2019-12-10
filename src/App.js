import React from 'react';
import './App.css';
import YelpApiPrototype from './containers/YelpApiPrototype';
import ActivityDetails from './components/ActivityDetails';
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserService from './services/UserService';
import EventService from './services/EventService';
import ItineraryService from './services/ItineraryService';
import RequestService from './services/RequestService';
import TravelAgentService from './services/TravelAgentService';
import Login from './components/Login'
import Register from './components/Register';
import RegisterSuccess from './components/RegisterSuccess'
import SocialPage from './components/SocialPage';
import FavoritesPage from './components/FavoritesPage';
import UserDetails from './components/UserDetails';
import RequestManagement from './components/RequestManagement';
import Itinerary from './components/Itinerary';
import TravelAgentDashboard from './components/TravelAgentDashboard';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        // Purposely initalized without attributes due to guard pattern in render method below
        this.state = {}

        // Services
        let userService = UserService.getInstance();
        let eventService = EventService.getInstance();
        let itineraryService = ItineraryService.getInstance();
        let requestService = RequestService.getInstance();
        let travelAgentService = TravelAgentService.getInstance();

        // findAllUsers
        this.users = userService.findAllUsers();
        this.users.then(result => this.setState({ users: result }));


        // findAllEvents
        this.events = eventService.findAllEvents();
        this.events.then(result => this.setState({ events: result }));

        //findAllItineraries
        this.itineraries = itineraryService.findAllItineraries();
        this.itineraries.then(result => this.setState({ itineraries: result }));

        // findAllRequests
        this.requests = requestService.findAllRequests();
        this.requests.then(result => this.setState({ requests: result }));

        // findAllTravelAgents
        this.travelAgents = travelAgentService.findAllTravelAgents();
        this.travelAgents.then(result => this.setState({ travelAgents: result }));
       

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
                {this.state.requests && console.log(this.state.requests, 'requests')/**SQL table empty*/}
                {this.state.travelAgents && console.log(this.state.travelAgents, 'travelAgents')/**SQL request table empty*/}


                <Router>
                    <Route exact path='/' component={YelpApiPrototype} />
                    <Route exact path='/admin' render={props => <TravelAgentDashboard {...props} />} />
                    <Route exact path='/admin/profile' render={props => <UserDetails {...props} />} />
                    <Route exact path='/register' render={props => <Register {...props} />} />
                    <Route exact path='/username/:username/requests' render={props => <RequestManagement {...props} users={this.users} requests={this.requests} />}/>
                    <Route exact path='/username/:username/social' render={props => <SocialPage {...props} />} />
                    <Route exact path='/username/:username/favorites' render={props => <FavoritesPage {...props} />} />
                    <Route exact path='/username/:username/profile' render={props => <UserDetails {...props} />}/>
                    <Route exact path='/success' component={RegisterSuccess}/>
                    <Route exact path='/itinerary/:itinerary' render={props => <Itinerary itineraries={this.state.itineraries} currentItinerary={props.match.params.itinerary} />} />
                    <Route exact path='/login' render={props => <Login {...props} users={this.state.users} />} />
                    <Route exact path="/username/:username" isAuthed={true} render={props => <YelpApiPrototype currentUser={props.match.params.username} />} />
                    <Route exact path="/:name/:phone/:addy1/:addy2/:rating/:price" isAuthed={true} render={props => <ActivityDetails {...props} />} />
                    <Route exact path="/username/:username/:name/:phone/:addy1/:addy2/:rating/:price" isAuthed={true} render={props => <ActivityDetails {...props} />} />
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

        userService.findUserByCredentials("mounica_34", "pass123").then(user => console.log(user));




        */
