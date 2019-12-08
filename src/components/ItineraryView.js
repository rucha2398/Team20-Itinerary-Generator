import React from 'react';

export default class ItineraryView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='container'>

                <div class="alert alert-danger row" role="alert">
                    <p className='col-10'>Sorry! You are currently not logged in. Please log in to get a customized itinerary from our travel experts.</p>
                    <button className='col-2 btn btn-primary'>Log-in</button>
                </div>

                <h5>Here are the customized Itineraries constructed by our travel experts.</h5>
                <h6>Itinerary 1</h6>
                <ul>
                    <li>Sample Location</li>
                    <li>Sample Location</li>
                    <li>Sample Location</li>
                </ul>

                <h6>Itinerary 2</h6>
                <ul>
                    <li>Sample Location</li>
                    <li>Sample Location</li>
                    <li>Sample Location</li>
                </ul>

                <h6>Itinerary 3</h6>
                <ul>
                    <li>Sample Location</li>
                    <li>Sample Location</li>
                    <li>Sample Location</li>
                </ul>


                
            </div>


        )
    }
}