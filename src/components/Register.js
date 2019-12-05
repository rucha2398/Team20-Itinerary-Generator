import React from 'react';
import Register from '../styles/Register.css';

export default class Login extends React.Component {

    render() {
        return(
            
            <div className="container">
                <div className="form-group row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4">
                    <h1> Register </h1>
                    </div>
                </div>

            <div className="form-group row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                <div className="block">
                    <label htmlFor="first name"> First Name: </label>
                    <input className="form-control form-inline wbdv-field wbdv-firstName"
                                    id="firstNameFld"
                                    placeholder="Jane"/>
                </div>
                </div>
            </div>

            <form>                      
                <div className="form-group form-inline">       
                <div className="col-sm-4"></div>
                    <label htmlFor="exampleInputEmail1" className="email">Email address: </label>
                        <input id="emailFld"
                        type="email" 
                        className="form-control" 
                        id="exampleInputEmail1" 
                        placeholder="Email"/>
                </div>
            </form>

            <div className="form-group row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                    <label htmlFor="last name"> Last Name: </label>
                    <input className="form-control wbdv-field wbdv-lastName"
                                    id="lastNameFld"
                                    placeholder="Doe"/>
                </div>
            </div>

            <div className="form-group row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                <label htmlFor="email"> Email: </label>
                    <input className="form-control wbdv-field wbdv-email"
                                    id="emailFld"
                                    placeholder="jane@gmail.com"/>
                </div>
            </div>

            <div className="form-group row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                <label htmlFor="role"> Role: </label>
                <select id="roleFld" className="form-control wbdv-field wbdv-role">
                    <option> Traveler </option>
                    <option> Travel Agent </option>
                </select>
                </div>
            </div>

            <div className="form-group row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                <label htmlFor="username"> Username: </label>
                <input className="form-control wbdv-field wbdv-username"
                                id="usernameFld"
                                placeholder="Username"/>
            </div>
            </div>

            <div className="form-group row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                <label htmlFor="password"> Password: </label>
                <input type="password" 
                        className="form-control wbdv-field wbdv-password"
                        id="passwordFld" 
                        placeholder="Password"/>
                </div>
            </div>

            <div className="form-group row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                <label htmlFor="confirm_password"> Confirm Password: </label>
                <input type="password" 
                        className="form-control wbdv-field wbdv-password"
                        id="verifyPasswordFld" 
                        placeholder="Verify Password"/>
                </div>
            </div>

            <div className="form-group row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                <button className="btn btn-primary btn-block wbdv-login"
                        id="registerBtn">Sign Up</button>
                </div>
            </div>

            <div className="form-group row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                <a href="https://www.w3schools.com/html/"
                    id="wbdv-link wbdv-login">Login</a>
                </div>
            </div>
        </div>
        )




    }
}