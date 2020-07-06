import React, { useContext } from 'react';

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
import Favorites from './pages/Favorites';
import DrawerContent from './components/DrawerContent';

import { ThemeProvider } from 'styled-components/native';
import light from './styles/themes/light';

import { AppContext } from './context';


const Drawer = createDrawerNavigator();

const { Navigator, Screen } = Drawer;

const Router = () => {
    const { state } = useContext(AppContext);
    return (
        
            <ThemeProvider theme={state.theme}>
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
                        <Screen name="Favorites" component={
                            Favorites
                        }/>
                    </Navigator>
                </NavigationContainer>
            </ThemeProvider>
        
    );
}

export default Router;
