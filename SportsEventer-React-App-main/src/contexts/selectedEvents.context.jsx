import { createContext, useState } from 'react';

export const SelectedEventsContext = createContext({
    selectedEvents: [],
    setSelectedEvents: () => null,
    isEventClashing: false,
    setIsEventClashing: () => null,
});

export const SelectedEventsProvider = ({ children }) => {
    const [selectedEvents, setSelectedEvents] = useState([]);
    const [isEventClashing, setIsEventClashing] = useState(false);
    
    const value = { 
        selectedEvents, 
        setSelectedEvents, 
        isEventClashing, 
        setIsEventClashing 
    };

    return (
        <SelectedEventsContext.Provider value={value}>
            {children}
        </SelectedEventsContext.Provider>
    );
};