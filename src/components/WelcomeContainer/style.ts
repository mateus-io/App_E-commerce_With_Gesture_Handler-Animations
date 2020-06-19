import styled from 'styled-components/native';
import { Animated } from 'react-native';


export const Container = styled.View `
    display : flex;
    flex-direction : row;
    flex-wrap : wrap;
    height : 200px;
    background : #bef;
    margin-top : 100px;
`;


export const WelcomeImageContainerWrapper = styled(Animated.View) `
    flex : 1;
    background : #dff;
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
    background : #bef;

`;
export const WelcomeMainText = styled.Text `
    font-family : 'Nunito_900Black_Italic';
    font-size : 20px;
    color : #210124;
    text-align : center;
`;



export const MainTextContainerReverse = styled.View `
    background : #bef;
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
    background : #DFF;
    margin : 10px 0;
`;

export const WrapperContainerCards = styled.View `
    display : flex;
    height : 200px;
    flex-direction : row;
    flex-wrap : wrap;
    
`;

export const CardItem = styled.View `
    height : 150px;
    width : 150px;
    background : #fff;
    border-radius : 20px;
    margin : 10px;
`;

export const MenuText = styled.Text `
    font-family : 'Nunito_900Black_Italic';
    font-size : 20px;
    color : #210124;
`;
