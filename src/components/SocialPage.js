import React from 'react'
import NavBar from '../components/NavBar'
import Itinerary from '../components/Itinerary'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class SocialPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavBar></NavBar>
                <div className="row mx-lg-3 mt-lg-3">
                    <h1>Our Users' Favorite Itineraries:</h1>
                </div>
                <div className="ml-lg-4">
                    <Row>
                        <Col xs lg="3">
                            <h4>UserXYZ for Boston:</h4>
                            <Itinerary></Itinerary>
                        </Col>
                        <Col xs lg="3">
                            <h4>UserACB for San Francisco:</h4>
                            <Itinerary></Itinerary>
                        </Col>
                        <Col xs lg="3">
                            <h4>MOunica for Thailand:</h4>
                            <Itinerary></Itinerary>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}