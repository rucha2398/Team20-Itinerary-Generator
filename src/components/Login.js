import React from 'react';

export default class Login extends React.Component {

    render() {
        return(
            <div>
            <h2>Itinerary Generator</h2>

            <div class="form-group row">
                <div class="col-sm-4"></div>
                <div class="col-sm-4">
                    <h1> Login </h1>
                </div>
            </div>


            <div class="form-group row">
                <div class="col-sm-4"></div>
                <div class="col-sm-4">
                <input type="username" 
                        class="form-control wbdv-field wbdv-username"
                        id="username" 
                        placeholder="Username"/>
            </div>
            </div>

            <div class="form-group row">
                <div class="col-sm-4"></div>
                <div class="col-sm-4">
                <input type="password" 
                        class="form-control wbdv-field wbdv-password"
                        id="password" 
                        placeholder="Password"/>
                <a href="https://www.w3schools.com/html/"
                    id="wbdv-link wbdv-forgot-password">Forgot Password?</a>
            </div>
            </div>
   
            <div class="form-group row">
                <div class="col-sm-4"></div>
                <div class="col-sm-4">
                <a class="btn btn-primary btn-block wbdv-login" 
                    href="../profile/profile.template.client.html" 
                    role="button">Sign in</a>
                </div>
            </div>

            <div class="form-group row">
                <div class="col-sm-4"></div>
                <div class="col-sm-4">
                <br/>
                
            </div>
   </div>
   </div>

    )
    }

}
