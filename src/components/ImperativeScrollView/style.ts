import styled from 'styled-components/native';

import { Animated } from 'react-native';

import {
    TouchableRipple
} from 'react-native-paper';

export const MenuContent = styled.View `
    display : flex;
    flex-direction : row;
    position : relative;
    width : 100%;
    height : 50px;
`;
export const Menu = styled.ScrollView `
    margin-top : 90px;
`;

export const MenuItem = styled.View `
    width : 150px;
    height : 50px;
    background : #dff;
    border-width : 1px;
    border-color : #def;
    border-top-left-radius : 25px;
    border-top-right-radius : 25px;
`;

export const MenuItemContainer = styled(TouchableRipple) `
    width : 100%;
    height : 100%;
    border-top-left-radius : 25px;
    border-top-right-radius : 25px;
`;

export const MenuItemContent = styled.View `
    height : 100%;
    width : 100%;
    display : flex;
    align-items : center;
    justify-content : center;
`;

export const MenuItemTitle = styled.Text `
    font-family : 'Nunito_600SemiBold';
    font-size : 15px;
    color : #999;
    text-align : center;
`;

export const AnimationBar = styled(Animated.View) `
    height : 4px;
    background : #ddd;
    width : 150px;
    position : absolute;
    bottom : 0px;
    left : 0;
`;
