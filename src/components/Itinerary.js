import React from 'react'
import ResultDayItemCard from '../components/ResultDayItemCard'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import ItineraryService from '../services/ItineraryService';
import NavBar from '../components/NavBar'
import Day from '../constants/Day'

export default class Itinerary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {} 

        let itineraryService = ItineraryService.getInstance();
        this.itineraryService = itineraryService;

        //where we need to pass the itinerary from the url
        this.itinerary = itineraryService.findItineraryById(this.props.currentItinerary);
        this.itinerary.then(itinerary => this.setState({ itinerary: itinerary }));
        
    }
    render() {
        return (
            <div>
            <h1>Itinerary</h1>
            {this.state.itinerary && this.state.itinerary.events.map(event => 
                <div>
                <img width="20%" height="20%" src={event.pictureURL}></img>
                <h1 text-align= "left">{event.title}</h1>
                <h4 text-align= "left">{event.description}</h4>
                </div>
                )}
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                </Tabs>
            </div>
        )
    }
}
