import styled from 'styled-components/native';
import { Animated } from 'react-native';


export const Container = styled.View `
    display : flex;
    flex-direction : row;
    flex-wrap : wrap;
    height : 200px;
    background : ${ props => props.theme.colors.primary };
    margin-top : 100px;
`;


export const WelcomeImageContainerWrapper = styled(Animated.View) `
    flex : 1;
    background : ${ props => props.theme.colors.secundary };
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    position : absolute;
    top : 0;
    left : 0;
    height : 100%;
    width : 100%;
    z-index : 5;
    border-radius : 20px;

`;
export const WelcomeImageContainer = styled.View `
    flex : 1;
    height : 100%;
    display : flex;
    position : relative;
    background : ${ props => props.theme.colors.primary };

`;
export const WelcomeMainText = styled.Text `
    font-family : 'Nunito_900Black_Italic';
    font-size : 20px;
    color : ${ props => props.theme.colors.text };
    text-align : center;
`;



export const MainTextContainerReverse = styled.View `
    background : ${ props => props.theme.colors.primary };
    border-radius : 20px;
    padding : 10px;
    margin : 10px;
    display : flex;
    flex-direction : row;
    justify-content : space-between;
`;

export const WrapperContainer = styled.View `
    display : flex;
    height : 100%;
    background : ${ props => props.theme.colors.secundary };
    margin : 10px 0;
`;

export const WrapperContainerCards = styled.View `
    display : flex;
    height : 200px;
    flex-direction : row;
    flex-wrap : wrap;
    
`;


import { SvgXml } from 'react-native-svg';

export const BottomWave = styled(SvgXml) `
    position : absolute;
    bottom : 0;
    left : 0;
    height : 100px;
    width : 100%;
`;

export const CardItem = styled.View `
    height : 150px;
    width : 150px;
    background : ${ props => props.theme.colors.background };
    border-radius : 20px;
    margin : 10px;
    position : relative;
    display : flex;
    align-items : center;
    justify-content : center;
    elevation : 10;
    border-bottom-width : 10px ;
    border-bottom-color : ${ props => props.theme.colors.primary };
    box-shadow : 10px 5px 5px  black;
`;

export const BubbleBigger = styled.View `
    position : absolute;
    top : -55px;
    right : 0;
    overflow : hidden;
    width : 150px;
    height : 150px;
    background : ${ props => props.theme.colors.primary };
    border-radius : 75px;
`;

export const ShopItemContainer = styled.View `
    width : 100px;
    height : 100px;
    border-radius : 20px;
    elevation : 5;
    padding : 20px;
`;

export const ShopItemImage = styled.Image `
    width : 100%;
    height : 100%;
    border-radius : 20px;
`;

export const ShopTextContainer = styled.View `
    position : absolute;
    bottom : -2px;
    width : 150px;
    height : 50px;
    left : 0;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
`;

import { 
    Text 
} from 'react-native-paper';



export const ShopTextTitle = styled(Text) `
    font-family : 'Nunito_900Black_Italic';
    font-size : 20px;
    color : ${ props => props.theme.colors.text };
    text-align : center;
`;
export const ShopTextSubTitle = styled(Text) `
    font-size : 13px;
    font-family : 'Nunito_900Black_Italic';
    color : ${ props => props.theme.colors.label };
    text-align : center;
`;

export const MenuText = styled.Text `
    font-family : 'Nunito_900Black_Italic';
    font-size : 20px;
    color : ${ props => props.theme.colors.text };
`;
