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

    createUser = user => (
        fetch("http://localhost:8080/api/users", {
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
                return response.clone().json()
            })
    )

    findUserById = userId => (
        fetch(`http://localhost:8080/api/users/${userId}`, {
            method: "GET",
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin': true
            }
        }).then(response => response.clone().json())
            .then(data => {
                let user = data;
                return user;
            })
    )

    findUserByCredentials = (username, password) => (
        fetch(`http://localhost:8080/api/users/username/${username}/password/${password}`, {
            method: "GET",
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin': true
            }
        }).then(response => response.clone().json())
            .then(data => {
                let user = data;
                return user;
            })
        
    )

    findUserByUsername = (username) => (
        fetch(`http://localhost:8080/api/users/username/${username}`, {
            method: "GET",
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin': true
            }
        }).then(response => response.clone().json())
            .then(data => {
                let user = data;
                return user;
            })

    )

    updateUser = (userId, newUser) => (
        fetch(`http://localhost:8080/api/users/${userId}`, {
            method: "PUT",
            body: JSON.stringify(newUser),
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
    )

    deleteUser = userId => (
        fetch(`http://localhost:8080/api/users/${userId}`, {
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
    )
}