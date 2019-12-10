import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShare, faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


export default class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.renderNavComponents = this.renderNavComponents.bind(this);
        console.log(this.props);   
    }

    renderNavComponents = () => {

        if (this.props.currentUser) {
            return <ul class="navbar-nav ml-auto">
                <a class="nav-item nav-link active" href="#"><FontAwesomeIcon icon={faHome} /><span class="sr-only">(current)</span></a>
                <Link className="nav-item nav-link" to={`/username/${this.props.currentUser}/social`}><FontAwesomeIcon icon={faShare} /></Link>
                <Link className="nav-item nav-link" to={`/username/${this.props.currentUser}/favorites`}><FontAwesomeIcon icon={faHeart} /></Link>
                <Link className="nav-item nav-link" to={`/username/${this.props.currentUser}/profile`} ><FontAwesomeIcon icon={faUser} /></Link>
            </ul>
        } else {
            return <Link className='ml-auto'to='/login'>
                     <button className="text-light btn btn-primary" >Login</button>
                </Link>
        }
        

    }

    render() {
        return (
         <nav class="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
            <a class="navbar-brand" href="#">Itinerary Generator</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
                <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
                    {this.renderNavComponents()}
            </div>
        </nav>
        )
    }
}