import React from 'react';
import '../styles/HomePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import YelpApiPrototype from '../containers/YelpApiPrototype';

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchLocation: ''
        }
    }

    locationChanged = event => {
        this.setState({
            searchLocation: event.target.value
        })
    }

    render() {
        return(
            <div className="container">
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-2">
                        <i> <FontAwesomeIcon icon={faSearch}/> </i>
                        </div>
                        <div className="form-group col-md-10">
                            <input type="search" className="form-control" id="searchBar" placeholder="search"></input>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">Location</label>
                        <input onChange = {this.locationChanged}
                            value = {this.state.searchLocation}
                            type="text" className="form-control" id="location" placeholder="Amsterdam">
                        </input>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="startDate">Start</label>
                            <input type="date" className="form-control" id="startDate" placeholder="Start Date"></input>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="endDate">End</label>
                            <input type="date" className="form-control" id="endDate" placeholder="End Date"></input>
                        </div>
                    </div>
                    <label>User Preferences</label>
                    <div className="form-group">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="shoppingCheck"></input>
                            <label className="form-check-label" htmlFor="gridCheck">Shopping</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="nightLifeCheck"></input>
                            <label className="form-check-label" htmlFor="gridCheck">Nightlife</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="siteSeeingCheck"></input>
                            <label className="form-check-label" htmlFor="gridCheck">Siteseeing</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="foodCheck"></input>
                            <label className="form-check-label" htmlFor="gridCheck">Food</label>
                        </div>
                    </div>

                    <button 
                        onClick={() => this.props.searchYelpApi(this.state.searchLocation)}
                        type="submit" className="btn btn-primary">Let's Go!
                    </button>
                </form>
            </div>
        )
    }


}