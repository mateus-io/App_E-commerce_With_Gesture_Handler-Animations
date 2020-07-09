import React, { createContext, useState, useEffect } from 'react';

import { getData } from './utils/useAsyncStorage';
import light from './styles/themes/light';

type Product = {
    id : number;
    title : string;
    main_image_url : string;
    images_url : string;
    assessments : number;
    price : number;
    plots : string;
}

type InitialStateType = {
    logged: boolean;
    setLogged(value : boolean) : void;
    theme : any;
    setTheme(value : any) : void;
    orders : Product[],
    setOrders(value : Product[]) : void; 
}

const initializeUser = async () => {
    return await getData('token');
}

const initialState = {
    logged: String(initializeUser()) !== "null",
    setLogged : () => {},
    theme : "",
    setTheme : () => {},
    orders : [],
    setOrders : () => {},
}

const AppContext = createContext<{
    state: InitialStateType;
}>({
    state: initialState
});

const AppProvider: React.FC = ({ children }) => {
    const [logged, setLogged] = useState(false);
    const [theme, setTheme] = useState(light);
    const [orders, setOrders] = useState<Product[]>([]);
    
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
        setTheme : setTheme,
        orders : orders,
        setOrders : setOrders
    }

    return (
        <AppContext.Provider value={{ state }}>
            {children}
        </AppContext.Provider>
    );
}

export { AppProvider, AppContext };
