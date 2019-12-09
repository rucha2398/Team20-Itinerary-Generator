export default class ItineraryService {


    static myInstance = null;

    static getInstance() {
        if (ItineraryService.myInstance == null) {
            ItineraryService.myInstance =
                new ItineraryService();
        }
        return this.myInstance;
    }

    findAllItineraries = () => (
         fetch("http://localhost:8080/api/itineraries", {
            method: "GET",
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin': true
            }
        }).then(response => response.clone().json())
        .then(data => {
            let itineraries = data;
            return itineraries;
        })
        )

    createItineraries = itinerary => {
        fetch("http://localhost:8080/api/itineraries", {
            method: "POST",
            body: JSON.stringify(itinerary),
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
    }

    findItineraryById = itineraryId => {
        fetch("http://localhost:8080/api/itineraries/{itineraryId}", {
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

    updateItinerary = (itineraryId, newItinerary) => {
        fetch("http://localhost:8080/api/itineraries/{itineraryId}/{newItinerary}", {
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

    deleteItinerary = itineraryId => {
        fetch("http://localhost:8080/api/itineraries/{itineraryId}", {
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