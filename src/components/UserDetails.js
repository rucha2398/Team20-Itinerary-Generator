import React from 'react'
import NavBar from './NavBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faHeart } from "@fortawesome/free-solid-svg-icons";
import UserService from '../services/UserService'

export default class UserDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false
        }
        let userService = UserService.getInstance();
        this.userService = userService;
        this.users = userService.findAllUsers();
        this.users.then(result => this.setState({ users: result }));
        this.user = userService.findUserByUsername(this.props.match.params.username);
        this.user.then(result => this.setState({ user: result }));
        this.editFields = this.editFields.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.renderSuccess = this.renderSuccess.bind(this);
        this.renderError = this.renderError.bind(this);

    }
    updateUser = e => {

        let user = {
            "firstName": this.state.firstName,
            "lastName": this.state.lastName,
            "username": this.state.username,
            "password": this.state.password,
            "email": this.state.email
        }
        if (this.state.user) {
            this.userService.updateUser(this.state.user.id, user).then(res => this.setState({ success: true }));
            e.preventDefault();



        }
    }

    renderSuccess = () => {
        if (this.state.success) {
            return <div class="alert alert-success row" role="alert">
                <p>User successfully updated</p>
            </div>
        }

    }

    renderError = () => {
        if (this.state.error) {
            return <div class="alert alert-danger row" role="alert">
                <p>Passwords need to be the same.</p>
            </div>
        }

    }
    editFields = () => {
        if (!this.state.editMode) {
            return <div className='my-3 mx-auto'><div class="form-group row">
                <div class="col-sm-4 text-left ml-lg-5 pl-lg-5">
                    <h3> First Name: </h3>
                </div>
                <div class="col-sm-4 text-left">
                    <label><h3>{this.state.user && this.state.user.firstName}</h3></label>
                </div>
            </div>
                <div class="form-group row">
                    <div class="col-sm-4 text-left ml-lg-5 pl-lg-5">
                        <h3> Last Name: </h3>
                    </div>
                    <div class="col-sm-4 text-left">
                        <label><h3>{this.state.user && this.state.user.lastName}</h3></label>
                    </div>

                </div>
                <div class="form-group row">
                    <div class="col-sm-4 text-left ml-lg-5 pl-lg-5">
                        <h3> Username: </h3>
                    </div>
                    <div class="col-sm-4 text-left">
                        <label><h3>{this.state.user && this.state.user.username}</h3></label>
                    </div>

                </div>
                <div class="form-group row text-left">
                    <div class="col-sm-4 text-left ml-lg-5 pl-lg-5">
                        <h3> Password: </h3>
                    </div>
                    <div class="col-sm-4 text-left">
                        <label><h3>{this.state.user && this.state.user.password}</h3></label>
                    </div>

                </div>
                <div class="form-group row text-left">
                    <div class="col-sm-4 text-left ml-lg-5 pl-lg-5">
                        <h3> Email: </h3>
                    </div>
                    <div class="col-sm-4 text-left">
                        <label><h3>{this.state.user && this.state.user.email}</h3></label>
                    </div>

                </div>
            </div>
        } else {
            return <div className="my-3 mx-auto">
                <form onSubmit={this.updateUser}>
                    <div class="form-group row">
                        <div class="col-sm-4 text-left ml-lg-5 pl-lg-5">
                            <h3> First Name: </h3>
                        </div>
                        <div class="col-sm-4 text-left">
                            <input className="form-control"
                                required
                                defaultValue={this.state.user && this.state.user.firstName}
                                onChange={(e) => this.setState({ firstName: e.target.value })} />
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-4 text-left ml-lg-5 pl-lg-5">
                            <h3> Last Name: </h3>
                        </div>
                        <div class="col-sm-4 text-left">
                            <input className="form-control"
                                required
                                defaultValue={this.state.user && this.state.user.lastName}
                                onChange={(e) => this.setState({ lastName: e.target.value })} />
                        </div>

                    </div>
                    <div class="form-group row">
                        <div class="col-sm-4 text-left ml-lg-5 pl-lg-5">
                            <h3> Username: </h3>
                        </div>
                        <div class="col-sm-4 text-left">
                            <input className="form-control"
                                required
                                disabled
                                defaultValue={this.state.user && this.state.user.username}
                                onChange={(e) => this.setState({ username: e.target.value })} />
                        </div>

                    </div>
                    <div class="form-group row text-left">
                        <div class="col-sm-4 text-left ml-lg-5 pl-lg-5">
                            <h3> Password: </h3>
                        </div>
                        <div class="col-sm-4 text-left">
                            <input className="form-control"
                                required
                                defaultValue={this.state.user && this.state.user.password}
                                onChange={(e) => this.setState({ password: e.target.value })} />
                        </div>

                    </div>
                
                    <div class="form-group row text-left">
                        <div class="col-sm-4 text-left ml-lg-5 pl-lg-5">
                            <h3> Email: </h3>
                        </div>
                        <div class="col-sm-4 text-left">
                            <input className="form-control"
                                required
                                defaultValue={this.state.user && this.state.user.email}
                                onChange={(e) => this.setState({ email: e.target.value })} />
                        </div>

                    </div>
                    <button className='btn btn-primary'
                        type='submit'>Submit Changes</button>
                </form>


            </div>
        }
    }






    render() {
        return (
            <div>
                <NavBar isAdmin={this.props.match.path == "/admin/profile"} currentUser={this.props.match.params.username}></NavBar>
                <div className='container'>
                    {this.renderSuccess()}
                    {this.renderError()}

                    <div class="row">
                        <h1 > User Information: </h1>
                        <button id="edit1" className='btn btn-primary' onClick={() => this.setState({ editMode: !this.state.editMode })}> Toggle Edit </button>
                    </div>

                    {this.editFields()}

                </div>

            </div>
        )
    }
}