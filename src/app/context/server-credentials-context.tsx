'use client'; // Mark as client component since we're using hooks like useState

import React, { createContext, useContext, useState } from 'react';

export type ServerCredentialsContextType = {
    serverIp: string;
    setServerIp: (value: string) => void;
    apiPassword: string;
    setApiPassword: (value: string) => void;
};

// Create the context
const ServerCredentialsContext = createContext<ServerCredentialsContextType | undefined>(undefined);

// Create a provider component
export const ServerCredentialsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [serverIp, setServerIp] = useState('');
    const [apiPassword, setApiPassword] = useState('');

    return (
        <ServerCredentialsContext.Provider
            value={{
                serverIp,
                setServerIp,
                apiPassword,
                setApiPassword,
            }}
        >
            {children}
        </ServerCredentialsContext.Provider>
    );
};

// Custom hook to simplify consuming the context
export const useServerCredentials = (): ServerCredentialsContextType => {
    const context = useContext(ServerCredentialsContext);
    if (!context) {
        throw new Error("useServerCredentials must be used within a ServerCredentialsProvider");
    }
    return context;
};
