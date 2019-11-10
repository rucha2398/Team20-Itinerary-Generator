import React from 'react';
import axios from 'axios';
import HomePage from '../components/HomePage.js';

    
export default class YelpApiPrototype extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            businesses: [],
            business: {
                id: '',
                name: '',
                image_url: ''
            }
        }
    }
    
    searchYelpApi = searchLocation => {
        this.findItineraryFromLocation(searchLocation)
    }

    findItineraryFromLocation = location => {   
        axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${location}`, {
            headers: {
                Authorization: `Bearer gdm9arC6maslC6J-rpr6AtwsmJbY9XnwzPMVsUI7Kwn7-v_b9rIkfgoN9sDcBJrVg7qij10jCTbW4tDqpWWQJRGSHuJkF_xhWHZEAEaF7ESIWZ31g-AFRB2LFt_FXXYx`
            }
        })
        .then(businesses => {
            console.log(businesses)
            //// Currently not working should be able to load the json data into the business array eventually
            this.setState({
                businesses: businesses
            }, console.log(this.state.businesses));
        })
        .catch((err) => {
            console.log ('error')
        })
    }

    componentDidMount() {
        this.findItineraryFromLocation("SF")
    }



    render() {
        return(
            <div>
                <h1> Yelp Api Prototype </h1>
                <HomePage
                businesses={this.state.businesses}/>
            </div>
        )
    }
}