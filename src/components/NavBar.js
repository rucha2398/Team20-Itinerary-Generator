import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShare, faHeart, faUser, faList } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


export default class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.renderNavComponents = this.renderNavComponents.bind(this);
    }

    renderNavComponents = () => {

        if (this.props.currentUser && this.props.currentUser != 'admin') {
            return <ul className="navbar-nav ml-auto">
                <Link className="nav-item nav-link active" to={`/username/${this.props.currentUser}`}><FontAwesomeIcon icon={faHome} /></Link>
                <Link className="nav-item nav-link" to={`/username/${this.props.currentUser}/requests`}><FontAwesomeIcon icon={faList} /></Link>
                <Link className="nav-item nav-link" to={`/username/${this.props.currentUser}/social`}><FontAwesomeIcon icon={faShare} /></Link>
                <Link className="nav-item nav-link" to={`/username/${this.props.currentUser}/favorites`}><FontAwesomeIcon icon={faHeart} /></Link>
                <Link className="nav-item nav-link" to={`/username/${this.props.currentUser}/profile`} ><FontAwesomeIcon icon={faUser} /></Link>
            </ul>
        } else if (this.props.currentUser && this.props.currentUser == 'admin' || this.props.isAdmin) {
            return <ul className="navbar-nav ml-auto">
                <Link className="nav-item nav-link active" to={`/admin`}><FontAwesomeIcon icon={faHome} /></Link>
                <Link className="nav-item nav-link" to={`/admin/profile`} ><FontAwesomeIcon icon={faUser} /></Link>
            </ul>

        } else {
            return <Link className='ml-auto' to='/login'>
                <button className="text-light btn btn-primary" >Login</button>
            </Link>
        }


    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
                <a className="navbar-brand" href="#">Itinerary Generator</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                    {this.renderNavComponents()}
                </div>
            </nav>
        )
    }
}