import React from 'react';

export default class YelpApiPrototype extends React.Component {
    
    constructor(props) {
        super(props);
    }

    // searchYelpApi = locationChanged => {
        
    componentDidMount() {
        fetch("https://api.yelp.com/v3/businesses/search?location='SF'&apikey=gdm9arC6maslC6J-rpr6AtwsmJbY9XnwzPMVsUI7Kwn7-v_b9rIkfgoN9sDcBJrVg7qij10jCTbW4tDqpWWQJRGSHuJkF_xhWHZEAEaF7ESIWZ31g-AFRB2LFt_FXXYx", {
            method: 'get',
            headers: new Headers({
                "Authorization": "Bearer,Bearer gdm9arC6maslC6J-rpr6AtwsmJbY9XnwzPMVsUI7Kwn7-v_b9rIkfgoN9sDcBJrVg7qij10jCTbW4tDqpWWQJRGSHuJkF_xhWHZEAEaF7ESIWZ31g-AFRB2LFt_FXXYx",
                "Access-Control-Allow-Origin": "*"
            })
        }, {'mode': 'no-cors'})
        .then(response => response.json())
        .then(response => console.log(response))
    }
    
    render() {
        return(
            <div>
                <h1> Yelp Api Prototype </h1>
                <script crossorigin="anonymous" src=""> </script>
            </div>
        )
    }
}