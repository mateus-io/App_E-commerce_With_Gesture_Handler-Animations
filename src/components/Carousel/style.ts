import styled from 'styled-components/native';

import { Dimensions } from 'react-native';
const DEVICE_HEIGHT = Dimensions.get('window').height;

export const Container = styled.View `
    flex : 1;
    display : flex;
    flex-direction : column;
    background : #f23;
    height : 100%;
    width : 100%;
`;
export const ContainerScroll = styled.ScrollView `
    display : flex;
    flex : 1;
    height : 100%;
    flex-direction : row;
    width : 100%;
`;

export const ContainerWrapper = styled.View `
    flex : 1;
    background : #f2a;
    height : 100%;
    flex-direction : row;
    width : 100%;
    display : flex;
`;
