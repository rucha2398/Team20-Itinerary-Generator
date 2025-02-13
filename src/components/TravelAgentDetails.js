import React from 'react'
import NavBar from './NavBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

export default class TravelAgentDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <NavBar></NavBar>
                <div className = "mx-lg-5 mt-lg-5">
                    <div class="form-group row">
                        <div class="col-sm-4">
                            <h1> Travel Agent Information: </h1>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-4 text-left ml-lg-5 pl-lg-5">
                            <h3> Username: </h3>
                        </div>
                        <div class="col-sm-4 text-left">
                            <label htmlFor="location"><h3>Rucha</h3></label>
                        </div>
                        <div class="col-sm-2 text-left">
                            <button id="edit"> <FontAwesomeIcon icon={faPencilAlt}/> </button>
                        </div>
                    </div>
                    <div class="form-group row text-left">
                        <div class="col-sm-4 text-left ml-lg-5 pl-lg-5">
                            <h3> Password: </h3>
                        </div>
                        <div class="col-sm-4 text-left">
                            <label htmlFor="location"><h3>***********</h3></label>
                        </div>
                        <div class="col-sm-2">
                            <button id="edit"> <FontAwesomeIcon icon={faPencilAlt}/> </button>
                        </div>
                    </div>
                    <div class="form-group row text-left">
                        <div class="col-sm-4 text-left ml-lg-5 pl-lg-5">
                            <h3> Email: </h3>
                        </div>
                        <div class="col-sm-4 text-left">
                            <label htmlFor="location"><h3>ruchalya@gmail.com</h3></label>
                        </div>
                        <div class="col-sm-2">
                            <button id="edit"> <FontAwesomeIcon icon={faPencilAlt}/> </button>
                        </div>
                    </div>
                    <div class="form-group row ml-lg-5 mt-lg-5">
                        <div class="col-sm-2">
                        <a class="btn btn-info btn-block wbdv-logout" 
                            href="../components/Login.js" 
                            role="button">Log Out</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}