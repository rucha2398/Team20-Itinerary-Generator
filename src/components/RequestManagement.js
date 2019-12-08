import React from 'react';
import Request from '../constants/Request'

export default class RequestManagement extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">

                <h5>Requests in Progress</h5>  

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