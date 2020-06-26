import styled from 'styled-components/native';

import { Dimensions } from 'react-native';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export const Container = styled.View `
    flex : 1;
    display : flex;
    background : #ffffff;
    position : relative;
    flex-direction : column;
`;
export const ContainerContent = styled.ScrollView `
    width : ${DEVICE_WIDTH}px;
    height : ${DEVICE_HEIGHT}px;
    margin-top : 100px;
`;

export const ProductItemContainer = styled.View `
    display : flex;
    flex-direction : column;
    height : 300px;
    width : 97%;
    background : #fff;
    elevation : 5;
    margin : 5px;
`;

export const ProductItemMainContent = styled.View `
    width : 100%;
    display : flex;
    flex-direction : row;
    height : 125px;
    align-items : center;
    
`;

export const ProductImage = styled.Image `
    width : 100px;
    height : 100px;
    elevation : 2;
    margin : 0 5px;
`;
