import React, { useRef, useEffect, useState } from 'react';

import {
    Container,
    Menu,
    MenuItem,
    AnimationBar,
    ContentContainer,
    MenuContent,
    MenuItemContainer,
    MenuItemContent
} from './style';

import Header from '../../components/Header';

import { Animated } from 'react-native';

type Props = {
    navigation : any;
}
import { ScrollView } from 'react-native';

import ImperativeScrollView, { ImperativeScrollViewHandles } from '../../utils/ImperativeScrollView';



const ViewProduct = ( { navigation }: Props ) => {
    const translateXAnim = useRef(new Animated.Value(0)).current
    const [positionX, setPositionX] = useState(0);
    const scrollViewRef = useRef<ImperativeScrollViewHandles>(null);
    useEffect( () => {
        Animated.timing(
            translateXAnim,
            {
                toValue: positionX,
                duration: 500,
            }
        ).start();
    }, [positionX] );
    return (
        <Container>
            <Header navigation={ navigation.toggleDrawer }/>
            <Menu horizontal showsHorizontalScrollIndicator={false}  >
                
                <MenuContent>
                    <MenuItem/>
                    <MenuItem/>
                    
                    <MenuItemContainer onPress={
                        () => {
                            setPositionX(300);
                            //scrollViewRef.current.scrollTo({x: 0, animated: true});
                        }} 
                        rippleColor="#000"
                    >
                        <MenuItemContent>

                        </MenuItemContent>
                    </MenuItemContainer>
                    
                    <MenuItem/>
                    <AnimationBar style={ { left : translateXAnim } } />
                </MenuContent>
            </Menu>
            <ContentContainer>

            </ContentContainer>
        </Container>
    );
}

export default ViewProduct;