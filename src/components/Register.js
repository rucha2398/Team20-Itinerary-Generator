import React from 'react';
import { Link } from 'react-router-dom';
import UserService from '../services/UserService';


export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateFirstName = this.updateFirstName.bind(this);
        this.updateLastName = this.updateLastName.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
        this.updateUsername = this.updateUsername.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.updateVerifyPassword = this.updateVerifyPassword.bind(this);
        this.renderAlert = this.renderAlert.bind(this);
        let userService = UserService.getInstance();
        this.userService = userService;

    }

    updateFirstName = e => this.setState({ firstName: e.target.value })
    updateLastName = e => this.setState({ lastName: e.target.value })
    updateUsername = e => this.setState({ username: e.target.value })
    updateEmail = e => this.setState({ email: e.target.value })
    updatePassword = e => this.setState({ password: e.target.value })
    updateVerifyPassword = e => this.setState({ verifyPassword: e.target.value })

    renderAlert = () => {
        if (this.state.passwordsMatch == false) {
            return <div class="alert alert-danger row" role="alert">
                <p>Passwords do not match. Please try again.</p>
            </div>
        }
    }



    handleSubmit = (e) => {
        if (this.state.password != this.state.verifyPassword) {
            this.setState({ passwordsMatch: false })
        }

        if (this.state.password == this.state.verifyPassword) {
            let user = {
                "firstName": this.state.firstName,
                "lastName": this.state.lastName,
                "username": this.state.username,
                "password": this.state.password,
                "email": this.state.email
            }
            this.userService.createUser(user);
            e.preventDefault();
            this.props.history.push(`/success`)


        }
    }
    render() {
        return (
            <div className="container">
                {this.renderAlert()}

                <div className="form-group row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4">
                        <h1> Register </h1>
                    </div>
                </div>

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4">
                            <div className="block">
                                <label htmlFor="first name"> First Name: </label>
                                <input className="form-control form-inline wbdv-field wbdv-firstName"
                                    id="firstNameFld"
                                    placeholder="Jane"
                                    onChange={this.updateFirstName}
                                    required />
                            </div>
                        </div>
                    </div>




                    <div className="form-group row">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4">
                            <label htmlFor="last name"> Last Name: </label>
                            <input className="form-control wbdv-field wbdv-lastName"
                                id="lastNameFld"
                                placeholder="Doe"
                                onChange={this.updateLastName}
                                required />
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4">
                            <label htmlFor="email"> Email: </label>
                            <input className="form-control wbdv-field wbdv-email"
                                id="emailFld"
                                placeholder="jane@gmail.com"
                                onChange={this.updateEmail}
                                type='email'
                                required
                            />
                        </div>
                    </div>


                    <div className="form-group row">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4">
                            <label htmlFor="username"> Username: </label>
                            <input className="form-control wbdv-field wbdv-username"
                                id="usernameFld"
                                placeholder="Username"
                                onChange={this.updateUsername}
                                required />
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4">
                            <label htmlFor="password"> Password: </label>
                            <input type="password"
                                className="form-control wbdv-field wbdv-password"
                                id="passwordFld"
                                placeholder="Password"
                                onChange={this.updatePassword}
                                required />
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4">
                            <label htmlFor="confirm_password"> Confirm Password: </label>
                            <input type="password"
                                className="form-control wbdv-field wbdv-password"
                                id="verifyPasswordFld"
                                placeholder="Verify Password"
                                onChange={this.updateVerifyPassword}
                                required />
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4">
                            <button
                                className="btn btn-primary btn-block wbdv-login"
                                id="registerBtn"
                                type='submit'
                            >Sign Up</button>
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4">
                            <Link to='/login'>Login</Link>
                        </div>
                    </div>
                </form>
            </div>
        )




    }
}