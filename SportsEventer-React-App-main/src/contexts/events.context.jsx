import { createContext, useState } from 'react';

// Sample sports events data
const INITIAL_EVENTS = [
    {
        id: 1,
        event_name: "Basketball Championship",
        event_category: "Basketball",
        start_time: "09:00",
        end_time: "11:00"
    },
    {
        id: 2,
        event_name: "Football League Match",
        event_category: "Football",
        start_time: "14:00",
        end_time: "16:00"
    },
    {
        id: 3,
        event_name: "Swimming Competition",
        event_category: "Swimming",
        start_time: "10:00",
        end_time: "12:00"
    },
    {
        id: 4,
        event_name: "Tennis Tournament",
        event_category: "Tennis",
        start_time: "16:30",
        end_time: "18:30"
    },
    {
        id: 5,
        event_name: "Cricket Match",
        event_category: "Cricket",
        start_time: "13:00",
        end_time: "17:00"
    },
    {
        id: 6,
        event_name: "Volleyball Game",
        event_category: "Volleyball",
        start_time: "11:30",
        end_time: "13:30"
    }
];

export const EventContext = createContext({
    allEvents: [],
    setAllEvents: () => null,
});

export const EventProvider = ({ children }) => {
    const [allEvents, setAllEvents] = useState(INITIAL_EVENTS);
    const value = { allEvents, setAllEvents };

    return (
        <EventContext.Provider value={value}>
            {children}
        </EventContext.Provider>
    );
};