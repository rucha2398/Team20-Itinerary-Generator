import React from 'react'
import CardDeck from '../components/CardDeck'

export default class ActivityDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid">
                {console.log(this.props)}
                <h1>{this.props.match.params.name}</h1>
                <div className="row">
                    <div className="text-left col-10">
                        <button className="btn btn-primary">
                            <i className="fa fa-arrow-left">&nbsp;Go back</i>
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
                            <li className="list-group-item text-left">Address: {this.props.match.params.addy1}, {this.props.match.params.addy2}</li>
                            <li className="list-group-item text-left">Phone Number: {this.props.match.params.phone}</li>
                            <li className="list-group-item text-left">Rating: {this.props.match.params.rating} out of 5</li>
                            <li className="list-group-item text-left">Price: {this.props.match.params.price}</li>
                            </ul>

                    </div>
                </div>
            </div>
        )
    }

}

