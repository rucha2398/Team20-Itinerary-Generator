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
                <NavBar currentUser={this.props.match.params.username}></NavBar>
                <div className="row mx-lg-3 mt-lg-3">
                    <h1>Our Users' Favorite Itineraries:</h1>
                </div>
                <div className="ml-lg-4">
                    <Row>
                        <Col xs lg="3">
                            <h4>Edgar's Itinerary for Boston:</h4>
                        </Col>
                        <Col xs lg="3">
                            <h4>Rucha's Itinerary for San Francisco:</h4>
                        </Col>
                        <Col xs lg="3">
                            <h4>Mounica's Itinerary for Thailand:</h4>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}