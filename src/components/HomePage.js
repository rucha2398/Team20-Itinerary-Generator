import React from 'react';
import '../styles/HomePage.css';
import { Link } from "react-router-dom";

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchLocation: ''
        }
        this.renderAlert = this.renderAlert.bind(this);
    }

    searchLocationChanged = event =>
        this.setState({
            searchLocation: event.target.value
        })

    renderAlert = () => {
        if (!this.props.currentUser) {
            return <div class="alert alert-danger row mt-lg-3" role="alert">
                <p className='col-10'>Sorry! You are currently not logged in. Please log in to get a customized itinerary from our travel experts.</p>
                <Link className='col-2' to={`/login`}>
                    <button className='btn btn-primary'>Log-in</button>
                </Link>
            </div>
        }
    }


    render() {
        return (
            <div className='container'>
                {this.renderAlert()}               
                <h2>Itinerary Generator</h2>

                <h6>Welcome to Itinerary Generator! Please enter your preferences below to request an itinerary from our travel experts.</h6>

                <div className="row">
                    <div className="form-group col-md-6">
                        <label htmlFor="startDate">Start Date</label>
                        <input type="date" className="form-control" id="startDate" placeholder="Start Date"></input>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="endDate">End Date:</label>
                        <input type="date" className="form-control" id="endDate" placeholder="End Date"></input>
                    </div>
                </div>

                <label><h6>What would you like to do and/or experience?</h6></label>

                <div className="form-group row">
                    <div className="form-check col-3">
                        <input className="form-check-input" type="checkbox" id="shoppingCheck"></input>
                        <label className="form-check-label" htmlFor="gridCheck">Shop</label>
                    </div>
                    <div className="form-check col-3">
                        <input className="form-check-input" type="checkbox" id="nightLifeCheck"></input>
                        <label className="form-check-label" htmlFor="gridCheck">Nightlife</label>
                    </div>
                    <div className="form-check col-3">
                        <input className="form-check-input" type="checkbox" id="siteSeeingCheck"></input>
                        <label className="form-check-label" htmlFor="gridCheck">Site-See</label>
                    </div>
                    <div className="form-check col-3">
                        <input className="form-check-input" type="checkbox" id="foodCheck"></input>
                        <label className="form-check-label" htmlFor="gridCheck">Food</label>
                    </div>
                </div>
                <div>

                    <ul className="list-group">
                        <li className="list-group-item">
                            <label htmlFor="Enter a location: "><h6>Where would you like to go?</h6></label>
                            <input
                                onChange={this.searchLocationChanged}
                                value={this.state.searchLocation}
                                className="form-control"
                                placeholder='City, State, Country' />
                            <button
                                onClick={() => this.props.searchLocation(this.state.searchLocation)}
                                className="btn btn-primary mt-lg-3">Let's go!</button>
                        </li>
                        {
                            this.props.businesses.map(business =>
                                <li onClick={() => this.props.selectBusiness(business.businessId)}
                                    className="list-group-item"
                                    key={business.businessId}>
                                    <div className="row">
                                        <div className="col-6">
                                            <Link to={`${business.name}/${business.display_phone}/${business.location.display_address[0]}/${business.location.display_address[1]}/${business.rating}/${business.price}`}>
                                                <h2>{business.name}</h2>
                                            </Link>
                                        </div>
                                        <div className="col-6">
                                            <img src={business.image_url} style={{ width: 200 }} />
                                        </div>
                                    </div>



                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }
}