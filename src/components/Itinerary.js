import React from 'react'
import ResultDayItemCard from '../components/ResultDayItemCard'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import ItineraryService from '../services/ItineraryService';

export default class Itinerary extends React.Component {
    constructor(props) {
        super(props);
        this.itinerary = this.props.currentItinerary;
        console.log(this.props.itineraries);
        // this.itineraries.then(result => console.log(result, "resultsss"));
        // this.setState({itineraries: result})
    }



    render() {
        return (
            <div>
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                    <Tab eventKey="firstDay" title="Day 1">
                        <ResultDayItemCard></ResultDayItemCard>
                    </Tab>
                    <Tab eventKey="secondDay" title="Day 2">
                        <ResultDayItemCard></ResultDayItemCard>
                    </Tab>
                    <Tab eventKey="thirdDay" title="Day 3">
                        <ResultDayItemCard></ResultDayItemCard>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}
