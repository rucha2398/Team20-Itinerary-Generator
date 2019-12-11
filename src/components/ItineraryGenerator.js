import React from 'react'
import UserRequirements from '../components/UserRequirements'
import DayPills from '../components/DayPills'
import NavBar from '../components/NavBar'
import { Link } from "react-router-dom";


export default class ItineraryGenerator extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavBar currentUser='admin'></NavBar>
                <div className="row mx-lg-3 mt-lg-3">
                    <div className="form-group col-md-4">
                        <UserRequirements></UserRequirements>
                    </div>
                    <div className="form-group col-md-8">
                        <DayPills></DayPills>
                    </div>
                </div>
                <div className="row mx-lg-3">
                    <i>
                        <Link to='/admin'>
                            <button className="btn btn-primary" id="submitItinerary">Submit</button>
                         </Link>
                    </i>
                </div>
            </div>
        )
    }
}