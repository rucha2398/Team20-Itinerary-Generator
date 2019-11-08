import React from 'react'
import CardDeck from '../components/CardDeck'

export default class ActivityDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid">
                <h1>More details</h1>
                <div className="row">
                    <div className="text-left col-10">
                        <button className="btn btn-primary">
                            <i class="fa fa-arrow-left">&nbsp;Go back</i>
                        </button>
                    </div>
                    <div className="text-right col-2 row">
                        <button className="btn btn-success mr-1 col-5">Edit</button>
                        <button className="btn btn-danger col-5">Delete</button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6">
                        <h3>{this.props.activity}</h3>
                        <CardDeck />
                    </div>

                    <div className="col-6">
                        <h3>More details:</h3>
                        <ul className="list-group">
                            <li className="list-group-item text-left">Name: </li>
                            <li className="list-group-item text-left">Location: </li>
                            <li className="list-group-item text-left">Website: </li>
                            <li className="list-group-item text-left">Operating hours: </li>
                            <li className="list-group-item text-left">Phone Number: </li>
                            </ul>

                    </div>
                </div>
            </div>
        )
    }

}

