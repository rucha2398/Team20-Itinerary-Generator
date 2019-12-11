import React from 'react'

import ResultDayItemCard from '../components/ResultDayItemCard'

import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Nav from 'react-bootstrap/Nav'
import Col from 'react-bootstrap/Col'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'



export default class UserRequirements extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Tab.Container id="days" defaultActiveKey="first">
                        <Row>
                            <Col>
                                <Nav variant="pills" className="flex-row">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Day 1</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Day 2</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                          
                        </Row>
                    
                        <Row>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <ResultDayItemCard></ResultDayItemCard>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Col>
                                        <ResultDayItemCard></ResultDayItemCard>
                                        <ResultDayItemCard></ResultDayItemCard>
                                    </Col>
                                </Tab.Pane>
                            </Tab.Content>
                        </Row>
                </Tab.Container>
            </div>
        )
    }
}