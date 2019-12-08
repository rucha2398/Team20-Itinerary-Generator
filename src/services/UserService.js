import React from 'react';

export default class UserService {


    static myInstance = null;

    static getInstance() {
        if (UserService.myInstance == null) {
            UserService.myInstance =
                new UserService();
        }
        return this.myInstance;
    }

    findAllUsers = () => (
         fetch("http://localhost:8080/api/users", {
            method: "GET",
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin': true
            }
        }).then(response => response.clone().json())
        .then(data => {
            let users = data;
            return users;
        })
        )

    createUser = user => {
        fetch(`http://localhost:8080/api/users/{user}`, {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin': true
            }
        })
            .then(function(response) {
                // let responseBody = response.clone().json()
                // return responseBody;
                return response.json()
            })
    }

    findUserById = userId => {
        fetch(`http://localhost:8080/api/users/{userId}`, {
            method: "GET",
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin': true
            }
        })
            .then(function(response) {
                let responseBody = response.clone().json()
                return responseBody;
            })
    }

    updateUser = (userId, newUser) => {
        fetch(`http://localhost:8080/api/users/{userId}/{newUser}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin': true
            }
        })
            .then(function(response) {
                let responseBody = response.clone().json()
                return responseBody;
            })
    }

    deleteUser = userId => {
        fetch(`http://localhost:8080/api/users/{userId}`, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin': true
            }
        })
            .then(function(response) {
                let responseBody = response.clone().json()
                return responseBody;
            })
    }
}