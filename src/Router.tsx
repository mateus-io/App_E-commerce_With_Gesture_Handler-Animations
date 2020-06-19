import React from 'react';

import {
    createDrawerNavigator
} from '@react-navigation/drawer';

import { NavigationContainer } from '@react-navigation/native';

import Home from './pages/Home';
import Contacts from './pages/Contacts';
import DashBoard from './pages/DashBoard';

const Drawer = createDrawerNavigator();

const { Navigator, Screen } = Drawer;

const Router = () => {
    return (
        <NavigationContainer>
            <Navigator initialRouteName="Home">
                <Screen name="Home" component={ 
                    Home                    
                }/>
                <Screen name="Contacts" component={
                    Contacts
                }/>
                <Screen name="DashBoard" component={
                    DashBoard
                }/>
            </Navigator>
        </NavigationContainer>
        
    );
}

export default Router;
