import React from 'react'
import NavBar from '../components/NavBar'

export default class TravelAgentDashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <NavBar></NavBar>

                <div className="row mx-lg-5 mt-lg-5">
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">Pending User Requests:</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="clickable-row" data-href='../components/ItineraryGenerator'>
                            <td>UserXYZ</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
