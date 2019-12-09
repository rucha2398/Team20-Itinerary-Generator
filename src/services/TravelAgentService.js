export default class TravelAgentService {


    static myInstance = null;

    static getInstance() {
        if (TravelAgentService.myInstance == null) {
            TravelAgentService.myInstance =
                new TravelAgentService();
        }
        return this.myInstance;
    }

    findAllTravelAgents = () => (
        fetch("http://localhost:8080/api/travel_agents", {
            method: "GET",
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin': true
            }
        }).then(response => response.clone().json())
            .then(data => {
                let travelAgents = data;
                return travelAgents;
            })
    )

    createTravelAgent = travelAgent => (
        fetch("http://localhost:8080/api/travel_agents", {
            method: "POST",
            body: JSON.stringify(travelAgent),
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

    findTravelAgentById = travelAgentId => (
        fetch(`http://localhost:8080/api/travel_agents/${travelAgentId}`, {
            method: "GET",
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin': true
            }
        }).then(response => response.clone().json())
            .then(data => {
                let travelAgent = data;
                return travelAgent;
            })
    )

    updateTravelAgent = (travelAgentId, newTravelAgent) => (
        fetch(`http://localhost:8080/api/travel_agents/${travelAgentId}`, {
            method: "PUT",
            body: JSON.stringify(newTravelAgent),
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

    deleteTravelAgent = travelAgentId => (
        fetch(`http://localhost:8080/api/travel_agents/${travelAgentId}`, {
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