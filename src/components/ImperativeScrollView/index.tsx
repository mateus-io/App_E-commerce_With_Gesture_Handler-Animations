import React, {
    useRef,
    useImperativeHandle,
    forwardRef,
    ForwardRefRenderFunction,
    PropsWithChildren,
    useEffect,
    useState
} from "react";
import { ScrollView, ScrollViewProps } from "react-native";

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
}

const ImperativeScrollView: ForwardRefRenderFunction<
    ImperativeScrollViewHandles,
    ImperativeScrollProps
> = ({ setPositionX, positionX }, ref) => {
    const scrollViewRef = useRef<ScrollView>(null);
    const translateXAnim = useRef(new Animated.Value(0)).current

    useEffect( () => {
        Animated.timing(
            translateXAnim,
            {
                toValue: positionX,
                duration: 500,
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
                            if(scrollViewRef.current){
                                scrollViewRef.current.scrollTo({x: 0, animated: true});
                            } 
                        } } 
                        rippleColor="transparent"
                    >
                        <MenuItemContent>
                            <MenuItemTitle>
                                1º
                            </MenuItemTitle>
                        </MenuItemContent>
                    </MenuItemContainer>
                </MenuItem>

                <MenuItem>
                    <MenuItemContainer 
                        onPress={ () => {
                            setPositionX(150);
                            if(scrollViewRef.current){
                                scrollViewRef.current.scrollTo({x: 150, animated: true});
                            }
                        } } 
                        rippleColor="transparent"
                    >
                        <MenuItemContent>
                            <MenuItemTitle>
                                2º
                            </MenuItemTitle>
                        </MenuItemContent>
                    </MenuItemContainer>
                </MenuItem>

                <MenuItem>
                    <MenuItemContainer 
                        onPress={ () => { 
                            setPositionX(300);
                            if(scrollViewRef.current){
                                scrollViewRef.current.scrollTo({x: 300, animated: true});
                            }
                        } } 
                        rippleColor="transparent"
                    >
                        <MenuItemContent>
                            <MenuItemTitle>
                                3º
                            </MenuItemTitle>
                        </MenuItemContent>
                    </MenuItemContainer>
                </MenuItem>


                <MenuItem>
                    <MenuItemContainer
                        onPress={ () => { 
                            setPositionX(450);
                            if(scrollViewRef.current){
                                scrollViewRef.current.scrollTo({x: 450, animated: true});
                            }
                        } } 
                        rippleColor="transparent"
                    >
                        <MenuItemContent>
                            <MenuItemTitle>
                                4º
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