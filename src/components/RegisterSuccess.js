import React from 'react';
import { Link } from 'react-router-dom';
import UserService from '../services/UserService';


export default class RegisterSuccess extends React.Component {
    render() {
        return (
            <div>
                <h1>You have successfully created an account</h1>
                <Link to={`/login`}>
                    <button className='btn btn-primary'>Log-in</button>
                </Link>
            </div>)
    }
}