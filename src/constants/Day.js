import ResultDayItemCard from '../components/ResultDayItemCard'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import React from 'react';

const Day = (eventKey, title) =>
    <Tab eventKey={eventKey} title={title}>
        <ResultDayItemCard></ResultDayItemCard>
    </Tab> 

export default Day;