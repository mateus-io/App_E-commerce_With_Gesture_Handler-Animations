import React, { 
    useState, 
    useEffect, 
    RefObject, 
    ForwardRefRenderFunction, 
    useRef,
    forwardRef,
    useImperativeHandle
} from 'react';



import { View, Dimensions, TouchableOpacity, ScrollView, Animated } from 'react-native';

import {
    ContainerScroll,
    ContainerWrapper,
    ContainerVerticalScroll,
    ContentContainerVertical,
    ShowProductsImagesContainer,
    CarouselImages,
    CarouselImage,
    CarouselContainerFixed,
    ImageIntoCarousel,
    ShowInfoProductContainer,
    InfoProductStatusBar,
    InfoProductContainer,
    InfoProductTitle,
    InfoProductFeedbackText,
    InfoProductIconsContainer,
    InfoProductFeedbackContainer,
    InfoProductFeedbackTextBolder,
    InfoProductExtraInformation,
    InfoProductExtraText
} from './style';

import { Feather } from '@expo/vector-icons';

import { ImperativeScrollViewHandles } from '../../components/ImperativeScrollView';

const DEVICE_WIDTH = Dimensions.get('window').width;

import { PanGestureHandler, State } from 'react-native-gesture-handler';

import ImagesWrapper from '../ImagesWrapper';

const Component1 : React.FC = () => {
    const scrollViewRef = useRef<ImperativeScrollViewHandles>(null);
    const [indexImage, setIndexImage] = useState(0);

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
            console.log(indexImage);
            console.log(translationX);
            if(translationX > 0 && indexImage > 0 ) {
                setIndexImage(indexImage - 1);
                if(scrollViewRef.current){
                    scrollViewRef.current.scrollTo({
                        x : DEVICE_WIDTH * (indexImage - 1),
                        animated : true
                    });
                }
            }
            if(translationX < 0 && indexImage < 2 ){
                setIndexImage( indexImage + 1 );
                if(scrollViewRef.current){
                    scrollViewRef.current.scrollTo({
                        x : DEVICE_WIDTH * (indexImage + 1),
                        animated : true
                    });
                }
            }
            translateX.setOffset(offset);
            translateX.setValue(0);
        }
    }

    return(
        <ContainerVerticalScroll style={{
            width : DEVICE_WIDTH
        }}>
            <ContentContainerVertical>
                <ShowProductsImagesContainer>
                    <PanGestureHandler
                        onGestureEvent={animateEvent}
                        onHandlerStateChange={onHandlerStateChanged}
                    >
                        <CarouselImages>
                            <ImagesWrapper 
                                ref={scrollViewRef}
                            >
                                <CarouselContainerFixed>
                                    <CarouselImage>
                                        <ImageIntoCarousel
                                            source={ {uri : 'https://p.kindpng.com/picc/s/190-1902655_grey-shoes-that-look-futuristic-nike-moon-boots.png'} }
                                        />
                                    </CarouselImage>

                                    <CarouselImage>
                                        <ImageIntoCarousel
                                            source={ {uri : 'https://p.kindpng.com/picc/s/91-910946_jordan-jumpman-hustle-sneakers-hd-png-download.png'} }
                                        />
                                    </CarouselImage>

                                    <CarouselImage>
                                        <ImageIntoCarousel
                                            source={ {uri : 'https://p.kindpng.com/picc/s/192-1927941_transparent-charles-barkley-png-sneakers-png-download.png'} }
                                        />
                                    </CarouselImage>
                                </CarouselContainerFixed>
                            </ImagesWrapper>

                        </CarouselImages>
                    </PanGestureHandler>
                    
                </ShowProductsImagesContainer>

                <ShowInfoProductContainer>
                    <InfoProductContainer>
                        <InfoProductTitle>
                            Smartphone Samsung Galaxy A30s 64GB Branco 4G - 4GB RAM Tela 6,4" Câm. Tripla + Câm Selfie 16MP
                        </InfoProductTitle>
                        <InfoProductStatusBar>

                            <InfoProductFeedbackContainer>
                                <Feather name="anchor" size={12} color="black"/>
                                <Feather name="anchor" size={12} color="black"/>
                                <Feather name="anchor" size={12} color="black"/>
                                <Feather name="anchor" size={12} color="black"/>
                                <Feather name="anchor" size={12} color="black"/>
                                <InfoProductFeedbackText>
                                    3.7(87)
                                </InfoProductFeedbackText>
                            </InfoProductFeedbackContainer>

                            <InfoProductIconsContainer>
                                <Feather name="share" size={20} color="black"/>
                                <Feather name="star" size={20} color="black"/>
                            </InfoProductIconsContainer>

                        </InfoProductStatusBar>

                        <InfoProductExtraInformation>
                            <InfoProductExtraText>
                                Vendido e entregue por
                                <InfoProductFeedbackTextBolder>
                                    AnchorShop
                                </InfoProductFeedbackTextBolder>
                            </InfoProductExtraText>
                            
                        </InfoProductExtraInformation>
                    

                    </InfoProductContainer>


                </ShowInfoProductContainer>

            </ContentContainerVertical>

        </ContainerVerticalScroll>
    );
}

const Component2 : React.FC = () => {
    return(
        <View style={{
            flex : 1,
            height : 500,
            width : DEVICE_WIDTH,
            backgroundColor : '#bfa' 
        }}>
        </View>
    );
}
const Component3 : React.FC = () => {
    return(
        <View style={{
            flex : 1,
            height : 500,
            width : DEVICE_WIDTH,
            backgroundColor : '#adf' 
        }}>
        </View>
    );
}

const vector = [Component1,Component2,Component3];


interface CarouselProps {
    setPositionX(positionX : number) : void;
    imperativeScrollView : RefObject<ImperativeScrollViewHandles>
}

const Carousel :    ForwardRefRenderFunction<
                    ImperativeScrollViewHandles,
                    CarouselProps> = 
( { setPositionX, imperativeScrollView } , ref ) => {
    const scrollViewRef = useRef<ScrollView>(null);

    const [indexView, setIndexView] = useState<number>(0);
    const [offsetX, setOffsetX] = useState<number>(0);
    

    useEffect( () => {
        setPositionX( indexView * 150 );
    }, [indexView] );


    useImperativeHandle(ref, () => ({
        scrollToStart: options => {
            if (scrollViewRef.current) {
                scrollViewRef.current.scrollTo({
                    x: 0,
                    y: 0,
                    animated: options ? options.animated : true,
                });
            }
        },
        scrollToEnd: options => {
            if (scrollViewRef.current) {
                scrollViewRef.current.scrollToEnd(options);
            }
        },
        scrollTo: options => {
            if (scrollViewRef.current) {
                scrollViewRef.current.scrollTo(options);
            }
        },
    }));

    return (
        <ContainerScroll onScroll={ (event) => {
            console.log(event);
            if(event.nativeEvent.contentOffset.x % DEVICE_WIDTH === 0){

                if( Number(event.nativeEvent.contentOffset.x) < Number(offsetX)){
                    setIndexView( indexView - 1 );
                }

                if( Number(event.nativeEvent.contentOffset.x) > Number(offsetX) ){
                    setIndexView( indexView + 1 );
                }
                    
                
                setOffsetX(event.nativeEvent.contentOffset.x);
                
                if(event.nativeEvent.contentOffset.x === (DEVICE_WIDTH * 1) ){
                    setTimeout( () => {
                        if(imperativeScrollView.current){
                            imperativeScrollView.current.scrollTo({x: 0, animated : true});
                        }
                    }, 200 );
                }
                if(event.nativeEvent.contentOffset.x === (DEVICE_WIDTH * 2)){
                    setTimeout( () => {
                        if(imperativeScrollView.current){
                            imperativeScrollView.current.scrollTo({x: 300, animated : true});
                        }
                    }, 200 );
                }
            }
                
        } } 
            horizontal 
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            ref={scrollViewRef}
        >
            <ContainerWrapper>
            {
                vector.map( Component => (
                    <Component key={Component.toString()}/>
                ) )
            }
            </ContainerWrapper>
                
        </ContainerScroll>
    );
}

export default forwardRef(Carousel);