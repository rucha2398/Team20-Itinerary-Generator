import React from 'react';
import Card from '../constants/Card'

export default class CardDeck extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card-deck">
                <Card title="Title" body="Sample body" />
                <Card title="Title" body="Sample body" />
                <Card title="Title" body="Sample body" />
            </div>
            )
    }
}

