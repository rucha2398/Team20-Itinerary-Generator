import React from 'react'
import ResultDayItemCard from '../components/ResultDayItemCard'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import ItineraryService from '../services/ItineraryService';
import { Link } from 'react-router-dom';
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
            <div className="form-group control-label text-left pl-lg-3">
                        <label htmlFor="itinDescription">
                        <h1>Itinerary</h1></label>

                    <Link to='/username/mounica_34/requests'>
                        <button className="mb-lg-3 btn btn-primary">
                        Back to Requests
                        </button>
                    </Link>
            </div>

            {this.state.itinerary && this.state.itinerary.events.map(event => 
                <div className="mx-lg-3">
                    <div className="form-group control-label text-left pl-lg-3">
                        <label htmlFor="itinDescription">
                        <h2>{event.title}</h2></label>
                    </div> 
                    <div className="ml-lg-5 text-left">
                        <img width="20%" height="20%" src={event.pictureURL}></img>
                    </div> 
                    <div className="form-group control-label text-left mt-lg-4 ml-lg-4 pl-lg-3">
                        <label htmlFor="itinDescription"><h4>{event.description}</h4></label>
                    </div> 
                </div>
                )}
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                </Tabs>
            </div>
        )
    }
}
