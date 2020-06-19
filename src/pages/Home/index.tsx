import React from 'react';

import { View } from 'react-native';
import NavigationProps from '../../utils/Navigationable';
import { HomeView } from './style';
import Header from '../../components/Header';
import styled from 'styled-components/native';
import WelcomeContainer from '../../components/WelcomeContainer';

type Props = {
    navigation : any;
}

const Home = ( { navigation }: Props ) => {
    return (
        <HomeView>
            <Header navigation={navigation.toggleDrawer}/>
            <WelcomeContainer/>
        </HomeView>
    );
}
export default Home;
