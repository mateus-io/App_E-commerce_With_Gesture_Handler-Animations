import React, {
    useRef,
    useImperativeHandle,
    forwardRef,
    ForwardRefRenderFunction,
    PropsWithChildren,
    useEffect,
    useState,
    RefObject
} from "react";
import { ScrollView, ScrollViewProps, Dimensions } from "react-native";

import {
    MenuContent,
    Menu,
    MenuItem,
    MenuItemContainer,
    MenuItemContent,
    MenuItemTitle,
    AnimationBar
} from './style';

import { Animated } from 'react-native';

export interface ImperativeScrollViewHandles {
    scrollToStart(options?: { animated: boolean }): void;
    scrollToEnd(options?: { animated: boolean }): void;
    scrollTo(options: { x?: number; y?: number; animated?: boolean }): void;
}

interface ImperativeScrollProps {
    positionX : number;
    setPositionX(positionX : number) : void;
    setIndexView(indexView : number) : void;
    setOffsetX(offsetX : number) : void;
    carousel : RefObject<ImperativeScrollViewHandles>;
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DIFFERENCE = 1;

const ImperativeScrollView: ForwardRefRenderFunction<
    ImperativeScrollViewHandles,
    ImperativeScrollProps
> = ({ 
    setPositionX, 
    positionX, 
    carousel, 
    setIndexView,
    setOffsetX
}, ref) => {
    const scrollViewRef = useRef<ScrollView>(null);
    const translateXAnim = useRef(new Animated.Value(0)).current

    useEffect( () => {
        Animated.timing(
            translateXAnim,
            {
                toValue: positionX,
                duration: 200,
            }
        ).start();
    }, [positionX] );

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
        <Menu 
            ref={scrollViewRef} 
            horizontal 
            showsHorizontalScrollIndicator={false} 
        >
            <MenuContent>
                <MenuItem>
                    <MenuItemContainer
                        onPress={ () => { 
                            setPositionX(0);
                            setIndexView(0);
                            setOffsetX(DEVICE_WIDTH * 0);
                            

                            if(carousel.current){
                                carousel.current.scrollTo({
                                    x : (DEVICE_WIDTH * 0) + DIFFERENCE, 
                                    animated : true
                                });
                            }
                            
                        } } 
                        rippleColor="transparent"
                    >
                        <MenuItemContent>
                            <MenuItemTitle>
                                VISÃO GERAL
                            </MenuItemTitle>
                        </MenuItemContent>
                    </MenuItemContainer>
                </MenuItem>

                <MenuItem>
                    <MenuItemContainer 
                        onPress={ () => {
                            setPositionX(150);
                            setIndexView(1);
                            setOffsetX(DEVICE_WIDTH * 1);
                            
                            if(scrollViewRef.current){
                                scrollViewRef.current.scrollTo({
                                    x: 0, 
                                    animated: true
                                });
                            }
                            
                                if(carousel.current){
                                    carousel.current.scrollTo({
                                        x : (DEVICE_WIDTH * 1) + DIFFERENCE, 
                                        animated : true
                                    });
                                }
                            
                                
                            
                            
                            
                        } } 
                        rippleColor="transparent"
                    >
                        <MenuItemContent>
                            <MenuItemTitle>
                                INFORMAÇÕES
                            </MenuItemTitle>
                        </MenuItemContent>
                    </MenuItemContainer>
                </MenuItem>

                <MenuItem>
                    <MenuItemContainer 
                        onPress={ () => { 
                            setPositionX(300);
                            setIndexView(2);
                            setOffsetX(DEVICE_WIDTH * 2);
                            
                            if(scrollViewRef.current){
                                scrollViewRef.current.scrollTo({
                                    x: 300, 
                                    animated: true
                                });
                            }
                            
                            if(carousel.current){
                                carousel.current.scrollTo({
                                    x : (DEVICE_WIDTH * 2) + DIFFERENCE, 
                                    animated : true
                                });
                            }
                            
                        } } 
                        rippleColor="transparent"
                    >
                        <MenuItemContent>
                            <MenuItemTitle>
                                AVALIAÇÕES
                            </MenuItemTitle>
                        </MenuItemContent>
                    </MenuItemContainer>
                </MenuItem>


                <MenuItem>
                    <MenuItemContainer
                        onPress={ () => { 
                            setPositionX(450);
                            setIndexView(3);
                            setOffsetX(DEVICE_WIDTH * 3);

                            if(carousel.current){
                                carousel.current.scrollTo({
                                    x : (DEVICE_WIDTH * 3) + DIFFERENCE, 
                                    animated : true
                                });
                            }

                        } } 
                        rippleColor="transparent"
                    >
                        <MenuItemContent>
                            <MenuItemTitle>
                                COMPRE JUNTO
                            </MenuItemTitle>
                        </MenuItemContent>
                    </MenuItemContainer>
                </MenuItem>

                <AnimationBar style={ { left : translateXAnim } } />
            </MenuContent>
        </Menu>
    );
};

export default forwardRef(ImperativeScrollView);