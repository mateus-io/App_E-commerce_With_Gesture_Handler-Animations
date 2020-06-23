import styled from 'styled-components/native';

import { Animated } from 'react-native';


import { Dimensions } from 'react-native';
const DEVICE_WIDTH = Dimensions.get('window').width;

export const ContainerScroll = styled.ScrollView `
    display : flex;
    flex : 1;
    height : 100%;
    flex-direction : row;
    width : 100%;
`;

export const ContainerWrapper = styled.View `
    flex : 1;
    flex-direction : row;
    display : flex;
`;

/** Visão Geral */

export const ContainerVerticalScroll = styled.ScrollView `
    flex : 1;
    background : #fff;
    display : flex;
`;

export const ContentContainerVertical = styled.View `
    flex : 1;
    display : flex;
`;
export const ShowProductsImagesContainer = styled.View `
    height : 300px;
    width : 100%;
    position : relative;
    display : flex;
`;
export const CarouselImages = styled(Animated.View) `
    height : 100%;
    display : flex;
    width : 100%;
    z-index : 10;
`;
export const CarouselImagesWrapper = styled.ScrollView `
    height : 100%;
    display : flex;
    flex-direction : row;
    width : 100%;
`;
export const CarouselContainerFixed = styled.View `
    display : flex;
    flex-direction : row;
    flex-wrap : wrap;
    height : 100%;
    width : 100%;
    position : relative;
`;

export const CarouselImage = styled(Animated.View) `
    width : ${DEVICE_WIDTH}px;
    height : 100%;
    background :  #fff;
`;

export const ImageIntoCarousel = styled.Image `
    width : 100%;
    height : 100%;
`;

export const ShowInfoProductContainer = styled.View `
    height : 100%;
    width : 100%;
    background :  #fff;
    display : flex;
    flex-direction : column;
`;

export const InfoProductContainer  = styled.View `
    height : 100%;
    width : 100%;
    display : flex;
    flex-direction : column;
    padding : 10px;
`;

export const InfoProductTitle = styled.Text `
    font-family : 'Nunito_900Black_Italic';
    font-size : 15px;
    color : #210124;
`;
export const InfoProductFeedbackText = styled.Text `
    font-size : 11px;
    color : #777;
    font-family : 'Nunito_600SemiBold';
    margin-left : 10px;
`;
export const InfoProductFeedbackTextBolder = styled.Text `
    font-size : 11px;
    color : #111;
    font-family : 'Nunito_600SemiBold';
`;
export const InfoProductExtraText = styled.Text `
    font-size : 11px;
    color : #aaa;
    font-family : 'Nunito_600SemiBold';
`;

export const InfoProductExtraInformation = styled.View `
    display : flex;
    width : 100%;
    height : 50px;
    flex-direction : row;
`;

export const InfoProductFeedbackContainer = styled.View `
    display : flex;
    flex-direction : row;
    align-items : center;
    width : 100%;
    height : 50px;
`;


export const InfoProductIconsContainer = styled.View `
    display : flex;
    flex-direction : row;
    justify-content : space-between;
    width : 60px;
    height : 60px;
    align-items : center;
`;


export const InfoProductStatusBar = styled.View `
    display : flex;
    flex-direction : row;
    justify-content : space-between;
    width : 80%;
    height : 60px;
`;