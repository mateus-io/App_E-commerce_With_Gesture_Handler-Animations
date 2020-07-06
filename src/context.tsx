import React, { createContext, useState, useEffect } from 'react';

import { getData } from './utils/useAsyncStorage';
import light from './styles/themes/light';

type InitialStateType = {
    logged: boolean;
    setLogged(value : boolean) : void;
    theme : any;
    setTheme(value : any) : void;
}

const initializeUser = async () => {
    return await getData('token');
}

const initialState = {
    logged: String(initializeUser()) !== "null",
    setLogged : () => {},
    theme : "",
    setTheme : () => {}
}

const AppContext = createContext<{
    state: InitialStateType;
}>({
    state: initialState
});

const AppProvider: React.FC = ({ children }) => {
    const [logged, setLogged] = useState(false);
    const [theme, setTheme] = useState(light);
    
    useEffect( () => {
        const response = initializeUser();
        response.then( resp => { 
            setLogged(JSON.stringify(resp) !== JSON.stringify("null"));
        } );
    }, [] );
    
    const state = {
        logged: logged,
        setLogged : setLogged,
        theme : theme,
        setTheme : setTheme
    }

    return (
        <AppContext.Provider value={{ state }}>
            {children}
        </AppContext.Provider>
    );
}

export { AppProvider, AppContext };
