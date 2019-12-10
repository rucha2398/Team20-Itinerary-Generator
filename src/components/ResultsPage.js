import React from 'react';
import { Link } from "react-router-dom";

//displaying the api

export default class ResultsPage extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props, "props")
    }


    render() {
        return(
            <div>
                {
                    this.props.businesses.map(business =>
                        <li onClick={() => this.props.selectBusiness(business.businessId)}
                            className="list-group-item"
                            key={business.businessId}>
                            <div className="row">
                                <div className="col-6">
                                    <Link to={`${business.name}/${business.display_phone}/${business.location.display_address[0]}/${business.location.display_address[1]}/${business.rating}/${business.price}`}>
                                        <h2>{business.name}</h2>
                                    </Link>
                                </div>
                                <div className="col-6">
                                    <img src={business.image_url} style={{ width: 200 }} />
                                </div>
                            </div>

                        </li>
                    )
                }
            </div>
        )
    }
}