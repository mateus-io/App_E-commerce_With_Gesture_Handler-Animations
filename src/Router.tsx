import React from 'react';

import {
    createDrawerNavigator
} from '@react-navigation/drawer';

import { NavigationContainer } from '@react-navigation/native';

import Home from './pages/Home';
import Contacts from './pages/Contacts';
import DashBoard from './pages/DashBoard';
import Categories from './pages/Categories';
import ViewProduct from './pages/ViewProduct';
import Bag from './pages/Bag';
import DrawerContent from './components/DrawerContent';

const Drawer = createDrawerNavigator();

const { Navigator, Screen } = Drawer;

const Router = () => {
    return (
        <NavigationContainer>
            <Navigator drawerContent={ (props : any) => <DrawerContent {...props} /> } initialRouteName="Home">
                <Screen name="Home" component={ 
                    Home                    
                }/>
                <Screen name="Contacts" component={
                    Contacts
                }/>
                <Screen name="DashBoard" component={
                    DashBoard
                }/>
                <Screen name="Categories" component={
                    Categories
                }/>
                <Screen name="ViewProduct" component={
                    ViewProduct
                }/>
                <Screen name="Bag" component={
                    Bag
                }/>
            </Navigator>
        </NavigationContainer>
        
    );
}

export default Router;
