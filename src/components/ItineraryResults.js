import React from 'react';
import '../styles/ItineraryResults.css';
import { Card, Container, Row, Col } from 'react-bootstrap';
import ResultDayItemCard from './ResultDayItemCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default class ItineraryResults extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            businesses: []
        }
        if (this.state.businesses === undefined || this.state.businesses.length == 0) {
            console.log("hi")
        }
    }

        
    render() {
        return (
            <div>
            <i> <button id="delete"> <FontAwesomeIcon icon={faArrowLeft}/> </button> </i>
            <i> <button id="delete"> <FontAwesomeIcon icon={faArrowRight}/> </button> </i>
            <h1> Your Itinerary </h1>
            <br/>
            <Container>
                <Row>
                    <Card style={{ width: '20rem' }}>
                        <Col> Day 1 
                            <ResultDayItemCard/>
                            <br/>
                            <ResultDayItemCard/>
                            <br/>
                            <ResultDayItemCard/>
                            <br/>
                            <ResultDayItemCard/>
                        </Col>
                    </Card>
                    <Card style={{ width: '20rem' }}>
                        <Col> Day 2 
                            <ResultDayItemCard/>
                            <br/>
                            <ResultDayItemCard/>
                            <br/>
                            <ResultDayItemCard/>
                            <br/>
                            <ResultDayItemCard/>
                        </Col>
                    </Card>
                    <Card style={{ width: '20rem' }}>
                        <Col> Day 3 
                            <ResultDayItemCard/>
                            <br/>
                            <ResultDayItemCard/>
                            <br/>
                            <ResultDayItemCard/>
                            <br/>
                            <ResultDayItemCard/>
                        </Col>
                    </Card>
                </Row>
            </Container>
            </div>
        )
    }
}