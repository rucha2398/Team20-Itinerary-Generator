import React from 'react';
import axios from 'axios';
import HomePage from '../components/HomePage.js';
import YelpProto from '../styles/YelpProto.css';
import UserService from '../services/UserService';
import EventService from '../services/EventService';
import ItineraryService from '../services/ItineraryService';


export default class YelpApiPrototype extends React.Component {

    constructor(props) {
        super(props)
        this.searchLocation = this.searchLocation.bind(this);
        this.findRestaurauntByLocation = this.findRestaurauntByLocation.bind(this);
        this.selectBusiness = this.selectBusiness.bind(this);

        let userService = UserService.getInstance();
        this.users = userService.findAllUsers();
        this.users.then(result => this.setState({ users: result }));
        this.renderUsers = this.renderUsers.bind(this);

        let eventService = EventService.getInstance();
        this.events = eventService.findAllEvents();
        this.events.then(result => this.setState({events: result}));
        this.renderEvents = this.renderEvents.bind(this);

        let itineraryService = ItineraryService.getInstance();
        this.itineraries = itineraryService.findAllItineraries();
        this.itineraries.then(result => this.setState({itineraries: result}));
        this.renderItineraries = this.renderItineraries.bind(this);
      

        this.state = {
            businesses: [],
            business: {
                Name: ''
            },
            users: [],
            events: [],
            itineraries: []
        }
    }

    searchLocation = searchLocationChanged =>
        this.findRestaurauntByLocation(searchLocationChanged)

    findRestaurauntByLocation = location => {
        axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${location}`, {
            headers: {
                Authorization: `Bearer gdm9arC6maslC6J-rpr6AtwsmJbY9XnwzPMVsUI7Kwn7-v_b9rIkfgoN9sDcBJrVg7qij10jCTbW4tDqpWWQJRGSHuJkF_xhWHZEAEaF7ESIWZ31g-AFRB2LFt_FXXYx`
            }
        })
            .then(response => {
                this.setState({
                    businesses: response.data.businesses
                })
                console.log("after set state", this.state.businesses)
            })
            .catch((err) => {
                console.log('error', err)
            })
    }

    selectBusiness = businessId =>
        axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/${businessId}`, {
            headers: {
                Authorization: `Bearer gdm9arC6maslC6J-rpr6AtwsmJbY9XnwzPMVsUI7Kwn7-v_b9rIkfgoN9sDcBJrVg7qij10jCTbW4tDqpWWQJRGSHuJkF_xhWHZEAEaF7ESIWZ31g-AFRB2LFt_FXXYx`
            }
        })
            .then(business => {
                console.log(business)
                this.setState({
                    business: business
                })
            })

    renderUsers() {
        return this.state.users.map(user => <li>{user.firstName}</li>);
    } 

    renderEvents() {
        return this.state.events.map(event => <li>{event.description}</li>);
    } 

    renderItineraries() {
        return this.state.itineraries.map(itinerary => <li>{itinerary.id}</li>);
    } 

    render() {
        return (
            <div>
              <div>
                </div>
                <div className="row">
                        <div className="col-xl-12">
                        <HomePage
                            searchLocation={this.searchLocation}
                            selectBusiness={this.selectBusiness}
                                    businesses={this.state.businesses} />
                    </div>
                    </div>
                </div>
        )
    }
}
