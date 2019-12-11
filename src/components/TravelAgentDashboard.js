import React from 'react'
import NavBar from '../components/NavBar'
import { Link } from "react-router-dom";


export default class TravelAgentDashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <NavBar currentUser='admin'></NavBar>


                <div className="row mx-lg-5 mt-lg-5">
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">Pending User Requests:</th>
                            </tr>
                        </thead>
                        <tbody className='list-group'>
                            <tr className="text-left clickable-row list-group-item" data-href='../components/ItineraryGenerator'>
                                <Link to='/admin/intinGenerator/mounica'>
                                    <td>Mounica</td>
                                    <span className='btn float-right text-light btn-warning'>Pending</span>
                                </Link>
                            </tr>
                            <tr className="text-left clickable-row list-group-item" data-href='../components/ItineraryGenerator'>
                                <Link to='/admin/intinGenerator/runcha'>
                                    <td>Runcha</td>
                                    <span className='btn float-right text-light btn-warning'>Pending</span>
                                </Link>
                            </tr>
                            <tr className="text-left clickable-row list-group-item" data-href='../components/ItineraryGenerator'>
                                <Link to='/admin/intinGenerator/sindu'>
                                    <td>Sindu</td>
                                    <span className='btn float-right text-light btn-warning'>Pending</span>
                                </Link>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
