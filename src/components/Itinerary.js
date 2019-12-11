import React from 'react'
import ResultDayItemCard from '../components/ResultDayItemCard'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import ItineraryService from '../services/ItineraryService';
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
            <h1>hello</h1>
            {this.state.itinerary && this.state.itinerary.events.map(event => <h1>{event.title}</h1>)}
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                </Tabs>
            </div>
        )
    }
}
