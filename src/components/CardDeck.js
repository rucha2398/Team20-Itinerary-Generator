import React from 'react';
import Card from '../constants/Card'

export default class CardDeck extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card-deck col-lg-4 col-md-4 col-sm-12 col-12">
                <Card title="Title" body="Sample body" />
                <Card title="Title" body="Sample body" />
                <Card title="Title" body="Sample body" />
            </div>
            )
    }
}

