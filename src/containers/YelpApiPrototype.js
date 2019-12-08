import React from 'react';
import axios from 'axios';
import HomePage from '../components/HomePage.js';
import YelpProto from '../styles/YelpProto.css';
import UserService from '../services/UserService'

const user1 = 
    {
        "id": "234",
        "email": "mounica@gmail.com",
        "first_name": "Mounica",
        "last_name": "Kamesam",
        "password": "pass123",
        "username": "mounicaLikesCats"
      }


// const users = userService.findAllUsers();
// // const users2 = userService.createUser(user1);

// console.log(users);
// console.log(users2);

    
export default class YelpApiPrototype extends React.Component {

    constructor(props) {
        super(props)
        // this.state = {
        //     businesses: [],
        //     business: {
        //         Name: ''
        //     },
        //     users: []
        // }
        this.componentDidMount = this.componentDidMount.bind(this);
        this.searchLocation = this.searchLocation.bind(this);
        this.findRestaurauntByLocation = this.findRestaurauntByLocation.bind(this);
        this.selectBusiness = this.selectBusiness.bind(this);
        // this.getUsers = this.getUsers.bind(this);

        let userService = UserService.getInstance();
        this.users = userService.findAllUsers();

        this.state = {
            businesses: [],
            business: {
                Name: ''
            },
            users: this.users
        }
    }

    componentDidMount() {
        this.findRestaurauntByLocation("Boston")
    }

    searchLocation = searchLocationChanged =>
        this.findRestaurauntByLocation(searchLocationChanged)

    findRestaurauntByLocation = location => {   
        axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${location}`, {
            headers: {
                Authorization: `Bearer gdm9arC6maslC6J-rpr6AtwsmJbY9XnwzPMVsUI7Kwn7-v_b9rIkfgoN9sDcBJrVg7qij10jCTbW4tDqpWWQJRGSHuJkF_xhWHZEAEaF7ESIWZ31g-AFRB2LFt_FXXYx`
            }
        })
        .then(response => {
            this.setState({
                businesses: response.data.businesses
            })
            console.log("after set state", this.state.businesses)
        })
        .catch((err) => {
            console.log ('error', err)
        })
    }

    selectBusiness = businessId =>
        axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/${businessId}`, {
            headers: {
                Authorization: `Bearer gdm9arC6maslC6J-rpr6AtwsmJbY9XnwzPMVsUI7Kwn7-v_b9rIkfgoN9sDcBJrVg7qij10jCTbW4tDqpWWQJRGSHuJkF_xhWHZEAEaF7ESIWZ31g-AFRB2LFt_FXXYx`
            }
        })
        .then(business => {
            console.log(business)
            this.setState({
                business: business
            })
        })

    // getUsers = () => userService.findAllUsers();

    render() {
        return (
            <div>
                {/* {console.log(getUsers())} */}

                {console.log("printing user state", this.state.users)}
                <h1>Yelp API Prototype</h1>

                <div>
                {console.log("second print", this.state.userService.findAllUsers())}
                {/* {userService.findAllUsers().map(user =>
                        <h1>{user.id}</h1>
                    )
                } */}
                </div>

                <div className="row">
                        <div className="col-xl-12">
                        <HomePage
                            searchLocation={this.searchLocation}
                            selectBusiness={this.selectBusiness}
                                    businesses={this.state.businesses} />
                    </div>
                    </div>
                </div>
        )
    }
}