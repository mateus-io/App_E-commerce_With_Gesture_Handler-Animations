import styled from 'styled-components/native';
import { Animated } from 'react-native';


export const Container = styled(Animated.View) `
    flex : 1;
    background : #bef;
    height : 100%;
`;

export const SecondaryTextContainer = styled.View `
    margin : 5px 5px auto 40px;
    background : #dff;
    border-radius : 20px;
    padding : 10px;
`;
export const SecondaryText = styled.Text `
    font-family : 'Nunito_600SemiBold';
    font-size : 13px;
    color : #210124;
    text-align : center;
`;

export const MainTextContainer = styled.View `
    background : #dff;
    border-radius : 20px;
    margin : 5px;
`;

export const WelcomeMainText = styled.Text `
    font-family : 'Nunito_900Black_Italic';
    font-size : 20px;
    color : #210124;
    text-align : center;
`;