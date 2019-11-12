import React from 'react';
import '../styles/HomePage.css';

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchLocation: ''
        }
    }

    searchLocationChanged = event =>
        this.setState({
            searchLocation: event.target.value
        })

    render() {
        return(<div>
            <h2>Itinerary Generator</h2>

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
            
            <ul className="list-group">
                <li className="list-group-item">
                    <label htmlFor="Enter a location: ">Location</label>
                    <input
                        onChange={this.searchLocationChanged}
                        value={this.state.searchLocation}
                        className="form-control"/>
                    <button
                        onClick={() => this.props.searchLocation(this.state.searchLocation)}
                        className="btn btn-primary">Search</button>
                </li>
            </ul>
        </div>

        </div>
    )
    }
}