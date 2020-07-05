import styled from 'styled-components/native';

import { Animated } from 'react-native';

export const ErrorAdviceBox = styled(Animated.View) `
    position : absolute;
    top : 30px;
    width : 300px;
    height : 34px;
    background : #f24c;
    padding : 5px;
    z-index : 2;
`;
export const ErrorContentRow = styled.View `
    background : #fff;
    border-radius : 2px;
    display : flex;
    flex-direction : row;
    padding : 2px;
    align-items : center;
`;

export const ErrorLabel = styled.Text `
    color : #000;
    font-family : 'Nunito_600SemiBold';
    margin-left : 10px;
`;