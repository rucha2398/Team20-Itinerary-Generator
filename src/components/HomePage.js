import React from 'react';
import '../styles/HomePage.css';
import { Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default class HomePage extends React.Component {
    render() {
        return(
            <div class="container">
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-2">
                        <i> <FontAwesomeIcon icon={faSearch}/> </i>
                        </div>
                        <div class="form-group col-md-10">
                            <input type="search" class="form-control" id="searchBar" placeholder="search"></input>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="location">Location</label>
                        <input type="text" class="form-control" id="location" placeholder="Amsterdam"></input>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="startDate">Start</label>
                            <input type="date" class="form-control" id="startDate" placeholder="Start Date"></input>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="endDate">End</label>
                            <input type="date" class="form-control" id="endDate" placeholder="End Date"></input>
                        </div>
                    </div>
                    <label>User Preferences</label>
                    <div class="form-group">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="shoppingCheck"></input>
                            <label class="form-check-label" for="gridCheck">Shopping</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="nightLifeCheck"></input>
                            <label class="form-check-label" for="gridCheck">Nightlife</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="siteSeeingCheck"></input>
                            <label class="form-check-label" for="gridCheck">Siteseeing</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="foodCheck"></input>
                            <label class="form-check-label" for="gridCheck">Food</label>
                        </div>
                    </div>

                    <button type="submit" class="btn btn-primary">Let's Go!</button>
                </form>
            </div>
        )
    }
}