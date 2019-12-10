import React from 'react';
import Request from '../constants/Request'
import NavBar from './NavBar'
import RequestService from '../services/RequestService';
import UserService from '../services/UserService';


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

                {this.state.requests && console.log("requests", this.state.requests)}

                <h5>Requests in Progress</h5>  

                <ul className="list-group">
                {this.state.requests && 
                this.state.requests.map(request =>
                    <Request title={request.location} isCompleted={request.pending}/>)
                }
                </ul>

            </div>
        )
    }
}