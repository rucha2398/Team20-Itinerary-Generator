import React from 'react';

export default class Login extends React.Component {

    render() {
        return(
            <div class="container">
                <div class="form-group row">
                    <div class="col-sm-4"></div>
                    <div class="col-sm-4">
                    <h1> Register </h1>
                    </div>
                </div>

            <div class="form-group row">
                <div class="col-sm-4"></div>
                <div class="col-sm-4">
                <input class="form-control wbdv-field wbdv-username"
                                id="usernameFld"
                                placeholder="Username"/>
                </div>
            </div>

            <div class="form-group row">
                <div class="col-sm-4"></div>
                <div class="col-sm-4">
                <input type="password" 
                        class="form-control wbdv-field wbdv-password"
                        id="passwordFld" 
                        placeholder="Password"/>
                </div>
            </div>

            <div class="form-group row">
                <div class="col-sm-4"></div>
                <div class="col-sm-4">
                <input type="password" 
                        class="form-control wbdv-field wbdv-password"
                        id="verifyPasswordFld" 
                        placeholder="Verify Password"/>
                </div>
            </div>

            <div class="form-group row">
                <div class="col-sm-4"></div>
                <div class="col-sm-4">
                <button class="btn btn-primary btn-block wbdv-login"
                        id="registerBtn">Sign Up</button>
                </div>
            </div>

            <div class="form-group row">
                <div class="col-sm-4"></div>
                <div class="col-sm-4">
                <a href="https://www.w3schools.com/html/"
                    id="wbdv-link wbdv-login">Login</a>
                </div>
            </div>
</div>
        )




    }
}