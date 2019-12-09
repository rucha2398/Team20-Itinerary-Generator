export default class EventService {


    static myInstance = null;

    static getInstance() {
        if (EventService.myInstance == null) {
            EventService.myInstance =
                new EventService();
        }
        return this.myInstance;
    }

    findAllEvents = () => (
         fetch("http://localhost:8080/api/events", {
            method: "GET",
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin': true
            }
        }).then(response => response.clone().json())
        .then(data => {
            let events = data;
            return events;
        })
        )

    createEvent = event => (
        fetch("http://localhost:8080/api/events", {
            method: "POST",
            body: JSON.stringify(event),
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

    findEventById = eventId => (
        fetch(`http://localhost:8080/api/events/${eventId}`, {
            method: "GET",
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin': true
            }
        }).then(response => response.clone().json())
            .then(data => {
                let event = data;
                return event;
            })
    )

    updateEvent = (eventId, newEvent) => (
        fetch(`http://localhost:8080/api/events/${eventId}`, {
            method: "PUT",
            body: JSON.stringify(newEvent),
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

    deleteEvent = eventId => (
        fetch(`http://localhost:8080/api/events/${eventId}`, {
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