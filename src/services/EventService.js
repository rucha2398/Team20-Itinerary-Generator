import events from './events.json';

export default class EventService {
    static myInstance = null;

    static getInstance() {
        if (EventService.myInstance == null) {
            EventService.myInstance =
                new EventService();
        }
        return this.myInstance;
    }

    createEvent = event => {
        events.push(event)
    }
    findAllEvents = () =>  {
        return events
    }
    findEventById = eventId => {
        return events.find(event => event.id == eventId)
    }
    updateEvent = (eventId, newEvent) => {
        events = events.map(event => event.id == eventId ? newEvent : event)
    }

    updateEvent = (eventId, newEvent) => {
        events = events.map(event => {
            if(event.id != eventId) {
                return event;
            } else {
                return newEvnet;
            }
        })
    }

    deleteEvent = eventId => {
        events = events.filter(event => event.id !== eventId)
    }

}