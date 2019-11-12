import React from 'react';
import axios from 'axios';
import HomePage from '../components/HomePage.js';


    
export default class YelpApiPrototype extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            businesses: [],
            business: {
                Name: ''
            }
        }
    }

    componentDidMount() {
        this.findRestaurauntByLocation("Boston")
    }

    searchLocation = searchLocationChanged =>
        this.findRestaurauntByLocation(searchLocationChanged)

    findRestaurauntByLocation = location => {   
        axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${location}`, {
            headers: {
                Authorization: `Bearer gdm9arC6maslC6J-rpr6AtwsmJbY9XnwzPMVsUI7Kwn7-v_b9rIkfgoN9sDcBJrVg7qij10jCTbW4tDqpWWQJRGSHuJkF_xhWHZEAEaF7ESIWZ31g-AFRB2LFt_FXXYx`
            }
        })
        .then(response => {
            this.setState({
                businesses: response.data.businesses
            })
            console.log("after set state", this.state.businesses)
        })
        .catch((err) => {
            console.log ('error', err)
        })
    }

    selectBusiness = businessId =>
        axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/${businessId}`, {
            headers: {
                Authorization: `Bearer gdm9arC6maslC6J-rpr6AtwsmJbY9XnwzPMVsUI7Kwn7-v_b9rIkfgoN9sDcBJrVg7qij10jCTbW4tDqpWWQJRGSHuJkF_xhWHZEAEaF7ESIWZ31g-AFRB2LFt_FXXYx`
            }
        })
        .then(business => {
            console.log(business)
            this.setState({
                business: business
            })
        })


    render() {
        return (
            <div>
                <h1>Yelp API Prototype</h1>

                <div className="row">
                        <div className="col-xl-12">
                        <HomePage
                            searchLocation={this.searchLocation}
                            selectBusiness={this.selectBusiness}
                                    businesses={this.state.businesses} />
                    </div>
                    </div>
                </div>
        )
    }
}