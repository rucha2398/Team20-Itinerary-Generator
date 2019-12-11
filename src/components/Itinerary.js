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
         
        
    }

    render() {
        return (
            <div>
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                </Tabs>
            </div>
        )
    }
}
