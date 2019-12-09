import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShare, faHeart, faUser } from "@fortawesome/free-solid-svg-icons";

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
         <nav class="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
            <a class="navbar-brand" href="#">Itinerary Generator</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
                if (loggedIn) {
                    <ul class="navbar-nav ml-auto">
                    <a class="nav-item nav-link active" href="#"><FontAwesomeIcon icon={faHome}/><span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link" href="#"><FontAwesomeIcon icon={faShare}/></a>
                    <a class="nav-item nav-link" href="#"><FontAwesomeIcon icon={faHeart}/></a>
                    <a class="nav-item nav-link" href="#"><FontAwesomeIcon icon={faUser}/></a>
                </ul>
                }

                if (!loggedIn) {
                    <a class="nav-item nav-link" href="#">Login/></a>
                }
            </div>
        </nav>
        )
    }
}