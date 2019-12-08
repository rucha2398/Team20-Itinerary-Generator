import React from 'react'
import UserRequirements from '../components/UserRequirements'
import DayPills from '../components/DayPills'
import NavBar from '../components/NavBar'

export default class ItineraryGenerator extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavBar></NavBar>
                <div className="row mx-lg-3 mt-lg-3">
                    <div className="form-group col-md-4">
                        <UserRequirements></UserRequirements>
                    </div>
                    <div className="form-group col-md-8">
                        <DayPills></DayPills>
                    </div>
                </div>
                <div className="row mx-lg-3">
                <i> <button className="btn btn-primary" id="submitItinerary">Submit</button> </i>
                </div>
            </div>
        )
    }
}