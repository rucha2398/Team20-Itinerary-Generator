import React from 'react';
import { Link } from 'react-router-dom';
import UserService from '../services/UserService';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.updateUsername.bind(this);
        this.updatePassword.bind(this);
        this.submitForm.bind(this);
        this.renderAlert.bind(this);

        let userService = UserService.getInstance();
        this.userService = userService;
        this.users = userService.findAllUsers();
        this.users.then(users => this.setState({ users: users }));
        


    }

    updateUsername = e => {

        this.setState({
            username: e.target.value
        })
    }

    updatePassword = e => {
        this.setState({
            password: e.target.value
        })
    }

    submitForm = e => {
        this.state.users.map(user => {
            if (user.username == this.state.username && user.password == this.state.password) {
                e.preventDefault();
                this.props.history.push(`/username/${this.state.username}`)
            }
            else if (this.state.username == 'admin' && this.state.password == 'admin') {
                e.preventDefault();
                this.props.history.push(`/admin`);

            } else {
                this.setState({ validUser: false })
            }
        })
    }

    renderAlert = () => {

        if (this.state.validUser == false) {
            return <div class="alert alert-danger row" role="alert">
                <p className='col-10'>Incorrect username or password, please try again.</p>
            </div>
        }
    }

 


    render() {


        return (
            <div>
                {this.renderAlert()}


                <div className="form-group row">
                    <div class="col-sm-4"></div>
                    <div class="col-sm-4">
                        <h1> Login </h1>
                    </div>
                </div>

                <form onSubmit={this.submitForm}>


                    <div class="form-group row">
                        <div class="col-sm-4"></div>
                        <div class="col-sm-4">
                        <label htmlFor="username"> Username: </label>
                            <input
                                onChange={this.updateUsername}
                                type="username"
                                class="form-control wbdv-field wbdv-username"
                                id="username"
                                placeholder="Username"
                                required />
                        </div>
                    </div>

                    <div class="form-group row">
                        <div class="col-sm-4"></div>
                        <div class="col-sm-4">
                        <label htmlFor="password"> Password: </label>
                            <input type="password"
                                onChange={this.updatePassword}
                                class="form-control wbdv-field wbdv-password"
                                id="password"
                                placeholder="Password"
                                required />
                        </div>
                    </div>


                    <div class="row">
                        <div className="col-sm-4"></div>


                        <button
                            className='btn btn-primary col-sm-4'
                            type='submit'>
                            Log in
                            </button>
                    </div>
                    <div className='row'>
                        <div className='col-7'></div>
                        <Link className="col-1" to='/register'>Register</Link>
                        </div>

                </form>


            </div >

        )
    }

}

/**
 * 
 * `/username/${this.state.username}`
 * 
 * */