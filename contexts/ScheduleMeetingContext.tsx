import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ScheduleMeetingContextType {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}

const ScheduleMeetingContext = createContext<ScheduleMeetingContextType | undefined>(undefined);

export const useScheduleMeeting = () => {
    const context = useContext(ScheduleMeetingContext);
    if (!context) {
        throw new Error('useScheduleMeeting must be used within a ScheduleMeetingProvider');
    }
    return context;
};

interface ScheduleMeetingProviderProps {
    children: ReactNode;
}

export const ScheduleMeetingProvider: React.FC<ScheduleMeetingProviderProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <ScheduleMeetingContext.Provider value={{ isOpen, openModal, closeModal }}>
            {children}
        </ScheduleMeetingContext.Provider>
    );
};

export default ScheduleMeetingContext;
