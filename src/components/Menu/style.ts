import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Container = styled(Animated.View) `
    z-index : 4;
    position : absolute;
    top : 0;
    left : 0;
    width : 100%;
    height : 100%;
    background : ${ props => props.theme.colors.primary };
    display : flex;
    align-items : center;
    justify-content : center;
    
`;