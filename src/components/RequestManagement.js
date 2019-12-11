import React from 'react';
import Request from '../constants/Request'
import NavBar from './NavBar'
import RequestService from '../services/RequestService';
import UserService from '../services/UserService';
import { Link } from "react-router-dom";


export default class RequestManagement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        let userService = UserService.getInstance();
        this.userService = userService;
        userService.findUserByUsername(this.props.match.params.username).then(user => {
            let requestService = RequestService.getInstance();
            this.requestService = requestService;
            this.requests = requestService.findRequestsByUserId(user.id);
            this.requests.then(requests => this.setState({ requests: requests }));
        })
    }


    render() {
        return (
            <div >
                <NavBar currentUser={this.props.match.params.username}></NavBar>

                <h5>Requests in Progress</h5>  

                <ul className="list-group">
                {this.state.requests && 
                this.state.requests.map(request =>
                    //where we need to pass the itineraryId
                    <Link className='mx-3' to={`/itinerary/234`}>
                    <Request title={request.location} isCompleted={request.pending}/>
                    </Link>)
                }
                </ul>
            </div>
        )
    }
}