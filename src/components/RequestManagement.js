import React from 'react';
import Request from '../constants/Request'
import NavBar from './NavBar'
import RequestService from '../services/RequestService';

export default class RequestManagement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        let requestService = RequestService.getInstance();
        this.requestService = requestService;
        this.requests = requestService.findAllRequests(); //pass the User's id that is logged in;
        this.requests.then(requests => this.setState({ requests: requests }));
        
    }



    render() {
        return (
            <div >
                <NavBar currentUser={this.props.match.params.username}></NavBar>

                <h5>Requests in Progress</h5>  

                {console.log(this.state.requests)}

                <ul className='list-group'>
                    <Request title="Sample Request" isCompleted={true} />
                    <Request title="Sample Request" isCompleted={true} />
                    <Request title="Sample Request" isCompleted={false} />
                    <Request title="Sample Request" isCompleted={false} />
                    <Request title="Sample Request" isCompleted={false} />
                    <Request title="Sample Request" isCompleted={false} />
                    <Request title="Sample Request" isCompleted={false} />
                </ul>

            </div>
        )
    }
}