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
    WelcomeMainText,
    BottomWave,
    BubbleBigger,
    ShopItemContainer,
    ShopItemImage,
    ShopTextContainer,
    ShopTextTitle,
    ShopTextSubTitle
} from './style';

import LottieView from "lottie-react-native";

import Menu from '../Menu';
import WelcomeTextContainer from '../WelcomeTextContainer';

import { Feather } from '@expo/vector-icons';
import { Animated } from 'react-native';
const { ScrollView } = Animated;
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { TouchableRipple } from 'react-native-paper';

const xml =  `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -120 1440 320">
        <path fill="#beef" d="M0,64L24,80C48,96,96,128,144,122.7C192,117,240,75,288,80C336,85,384,139,432,170.7C480,203,528,213,576,181.3C624,149,672,75,720,58.7C768,43,816,85,864,90.7C912,96,960,64,1008,69.3C1056,75,1104,117,1152,128C1200,139,1248,117,1296,96C1344,75,1392,53,1416,42.7L1440,32L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path>
    </svg>
`;

interface WelcomeContainerProps {
    navigation : any;
}

const WelcomeContainer : React.FC<WelcomeContainerProps> = ({ navigation }) => {
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
                        <LottieView 
                            source={require('../../../assets/animations/octupus1.json')}
                            autoPlay
                            loop 
                        />
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
                        <TouchableRipple onPress={() => navigation.navigate('Categories')}>
                            <CardItem>
                                <BottomWave xml={xml} />
                                <BubbleBigger />
                                <ShopItemContainer>
                                    <ShopItemImage source={{ uri : 'https://images.unsplash.com/photo-1569605803663-e9337d901ff9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80' }} />
                                </ShopItemContainer>
                                <ShopTextContainer>
                                    <ShopTextTitle>
                                        Outra coisa
                                    </ShopTextTitle>
                                    <ShopTextSubTitle>
                                        Lançamento
                                    </ShopTextSubTitle>
                                </ShopTextContainer>
                            </CardItem>
                        </TouchableRipple>

                        <TouchableRipple onPress={() => navigation.navigate('Categories')}>
                            <CardItem>
                                <BottomWave xml={xml} />
                                <BubbleBigger />
                                <ShopItemContainer>
                                    <ShopItemImage source={{ uri : 'https://images.unsplash.com/photo-1569605803663-e9337d901ff9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80' }} />
                                </ShopItemContainer>
                                <ShopTextContainer>
                                    <ShopTextTitle>
                                        Verificar
                                    </ShopTextTitle>
                                    <ShopTextSubTitle>
                                        Lançamento
                                    </ShopTextSubTitle>
                                </ShopTextContainer>
                            </CardItem>
                        </TouchableRipple>
                        <TouchableRipple onPress={() => navigation.navigate('Categories')}>
                            <CardItem>
                                <BottomWave xml={xml} />
                                <BubbleBigger />
                                <ShopItemContainer>
                                    <ShopItemImage source={{ uri : 'https://images.unsplash.com/photo-1569605803663-e9337d901ff9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80' }} />
                                </ShopItemContainer>
                                <ShopTextContainer>
                                    <ShopTextTitle>
                                        Texto maior
                                    </ShopTextTitle>
                                    <ShopTextSubTitle>
                                        Lançamento
                                    </ShopTextSubTitle>
                                </ShopTextContainer>
                            </CardItem>
                        </TouchableRipple>

                        <TouchableRipple onPress={() => navigation.navigate('Categories')}>
                            <CardItem>
                                <BottomWave xml={xml} />
                                <BubbleBigger />
                                <ShopItemContainer>
                                    <ShopItemImage source={{ uri : 'https://images.unsplash.com/photo-1569605803663-e9337d901ff9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80' }} />
                                </ShopItemContainer>
                                <ShopTextContainer>
                                    <ShopTextTitle>
                                        Outro algo
                                    </ShopTextTitle>
                                    <ShopTextSubTitle>
                                        Lançamento
                                    </ShopTextSubTitle>
                                </ShopTextContainer>
                            </CardItem>
                        </TouchableRipple>

                        <TouchableRipple onPress={() => navigation.navigate('Categories')}>
                            <CardItem>
                                <BottomWave xml={xml} />
                                <BubbleBigger />
                                <ShopItemContainer>
                                    <ShopItemImage source={{ uri : 'https://images.unsplash.com/photo-1569605803663-e9337d901ff9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80' }} />
                                </ShopItemContainer>
                                <ShopTextContainer>
                                    <ShopTextTitle>
                                        Algo
                                    </ShopTextTitle>
                                    <ShopTextSubTitle>
                                        Lançamento
                                    </ShopTextSubTitle>
                                </ShopTextContainer>
                            </CardItem>
                        </TouchableRipple>

                    </WrapperContainerCards>
                </ScrollView>
            </WrapperContainer>
        </>
    );
}

export default WelcomeContainer;