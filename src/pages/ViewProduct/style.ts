import styled from 'styled-components/native';
import { Animated } from 'react-native';

import {
    TouchableRipple
} from 'react-native-paper';

export const Container = styled.View `
    flex : 1;
    display : flex;
    background : white;
    position : relative;
`;
export const Menu = styled.ScrollView `
    margin-top : 90px;
`;
export const MenuContent = styled.View `
    display : flex;
    flex-direction : row;
    position : relative;
    width : 100%;
    height : 50px;
`;
export const MenuItem = styled.View `
    width : 150px;
    height : 50px;
    background : #dfe;
    border : 1px;
`;
export const AnimationBar = styled(Animated.View) `
    height : 4px;
    background : blue;
    width : 150px;
    position : absolute;
    bottom : 0;
    left : 0;
`;
export const ContentContainer = styled.View `
    height : 76%;
    background : #bef;
    max-width : 400px;
    margin : 0 auto;
    width : 100%;
`;
export const MenuItemContainer = styled(TouchableRipple) `
    width : 150px;
    height : 50px;
    border : 1px;
    background : #f23;
`;
export const MenuItemContent = styled.View `
    height : 100%;
    width : 100%;
`;
