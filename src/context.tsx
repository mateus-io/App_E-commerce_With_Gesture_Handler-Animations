import React, { createContext, useState } from 'react';

import { getData } from './utils/useAsyncStorage';

type InitialStateType = {
    logged: boolean;
    setLogged(value : boolean) : void;
}

const initializeUser = async () => {
    const token = await getData('token');
    return token;
}

const initialState = {
    logged: String(initializeUser()) !== "null",
    setLogged : () => {}
}

const AppContext = createContext<{
    state: InitialStateType;
}>({
    state: initialState
});

const AppProvider: React.FC = ({ children }) => {
    const [logged, setLogged] = useState(String(initializeUser()) !== "null");

    
    const state = {
        logged: logged,
        setLogged : setLogged
    }

    return (
        <AppContext.Provider value={{ state }}>
            {children}
        </AppContext.Provider>
    );
}

export { AppProvider, AppContext };
