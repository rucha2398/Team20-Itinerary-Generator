export default class RequestService {


    static myInstance = null;

    static getInstance() {
        if (RequestService.myInstance == null) {
            RequestService.myInstance =
                new RequestService();
        }
        return this.myInstance;
    }

    findAllRequests = () => (
        fetch("http://localhost:8080/api/requests", {
            method: "GET",
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin': true
            }
        }).then(response => response.clone().json())
            .then(data => {
                let requests = data;
                return requests;
            })
    )

    createRequest = request => (
        fetch("http://localhost:8080/api/requests", {
            method: "POST",
            body: JSON.stringify(request),
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin': true
            }
        })
            .then(function (response) {
                // let responseBody = response.clone().json()
                // return responseBody;
                return response.clone().json()
            })
    )

    findRequestById = requestId => (
        fetch(`http://localhost:8080/api/requests/${requestId}`, {
            method: "GET",
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin': true
            }
        }).then(response => response.clone().json())
            .then(data => {
                let request = data;
                return request;
            })
    )

    updateRequest = (requestId, newRequest) => (
        fetch(`http://localhost:8080/api/requests/${requestId}`, {
            method: "PUT",
            body: JSON.stringify(newRequest),
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin': true
            }
        })
            .then(function (response) {
                let responseBody = response.clone().json()
                return responseBody;
            })
    )

    deleteRequest = requestId => (
        fetch(`http://localhost:8080/api/requests/${requestId}`, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin': true
            }
        })
            .then(function (response) {
                let responseBody = response.clone().json()
                return responseBody;
            })
    )
}