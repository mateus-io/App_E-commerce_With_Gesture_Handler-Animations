import React from 'react';

import { 
    Container, 
    WelcomeImageContainerWrapper,
    WelcomeImageContainer,
    WrapperContainer,
    MainTextContainerReverse,
    CardItem,
    WrapperContainerCards,
    MenuText,
    WelcomeMainText
} from './style';

import Menu from '../Menu';
import WelcomeTextContainer from '../WelcomeTextContainer';

import { Feather } from '@expo/vector-icons';
import { Animated } from 'react-native';
const { ScrollView } = Animated;
import { PanGestureHandler, State } from 'react-native-gesture-handler';

const WelcomeContainer : React.FC = () => {
    let offset = 0;
    const translateX = new Animated.Value(0);

    const animateEvent = Animated.event(
        [
            {
                nativeEvent : {
                    translationX : translateX,
                }
            }
        ],
        { useNativeDriver : true },
    )
    function onHandlerStateChanged ( event : any) {
        if(event.nativeEvent.oldState === State.ACTIVE){
            const { translationX } = event.nativeEvent;
            offset += translationX;

            translateX.setOffset(offset);
            translateX.setValue(0);
        }
    }

    return (
        <>
            <Container>
                <WelcomeTextContainer translateX={translateX}/>
                <WelcomeImageContainer>
                    <PanGestureHandler
                        onGestureEvent={animateEvent}
                        onHandlerStateChange={onHandlerStateChanged}
                    >
                        <WelcomeImageContainerWrapper style={ { transform : [{
                            translateX : translateX.interpolate({
                                inputRange : [ -800 ,-190, 0],
                                outputRange : [ -50, -190, 0],
                                extrapolate : 'clamp',
                            }),
                        }] } } >
                            
                        </WelcomeImageContainerWrapper>
                    </PanGestureHandler>
                    <Menu translateX={translateX}>
                        <MenuText>
                            Alguma coisa aqui
                        </MenuText>
                    </Menu>
                </WelcomeImageContainer>
            </Container>

            <WrapperContainer>
                <MainTextContainerReverse>
                    <Feather
                        name="anchor"
                        size={40}
                    />
                    <WelcomeMainText>
                        Shop
                    </WelcomeMainText>
                    <Feather
                        name="anchor"
                        size={40}
                    />
                </MainTextContainerReverse>
                <ScrollView horizontal>
                    <WrapperContainerCards>
                        <CardItem>
                        </CardItem>
                        <CardItem>
                        </CardItem>
                        <CardItem>
                        </CardItem>
                        <CardItem>
                        </CardItem>
                        <CardItem>
                        </CardItem>
                    </WrapperContainerCards>
                </ScrollView>
            </WrapperContainer>
        </>
    );
}

export default WelcomeContainer;