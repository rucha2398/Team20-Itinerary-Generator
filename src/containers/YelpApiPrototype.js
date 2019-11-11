import React from 'react';
import axios from 'axios';
import HomePage from '../components/HomePage.js';
import ItineraryResults from '../components/ItineraryResults.js'

    
export default class YelpApiPrototype extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            businesses: [],
            parsedBusinesses: [],
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
        .then(response => {
            console.log("the response", response);
            
            let full_json = JSON.stringify(response.data.businesses);
            // console.log("json full array: ", full_json);
            console.log("json array length: ", full_json.length);
            // for (var i = 0; i < full_json.length; i++) {
            //     this.state.businesses[i] = full_json[i];
            // }
            // console.log("businesses array: ", this.state.businesses);
            // this.state.parsedBusinesses = JSON.parse(full_json);
            this.state.parsedBusinesses = response.data.businesses;

            console.log("PARSED business array: ", this.state.parsedBusinesses);
            this.setState({
                businesses: response.data.businesses
            }, 
            console.log("STATE after PARSING business" , this.state.parsedBusinesses));
        })
        .catch((err) => {
            console.log ('error', err)
        })
    }

    componentDidMount() {
        this.findItineraryFromLocation("SF")
        console.log("hello", this.findItineraryFromLocation("SF"))
    }

    render() {
        return(
            <div>
                <h1> Yelp Api Prototype </h1>
    
                <HomePage/>

                <ItineraryResults
                    businesses = {this.state.parsedBusinesses}
                />
            </div>
        )
    }
}