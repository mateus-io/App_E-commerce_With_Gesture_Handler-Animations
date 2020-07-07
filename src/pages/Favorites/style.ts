import styled from 'styled-components/native';

import { Dimensions, StyleSheet } from 'react-native';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

import {
    TouchableRipple,
    Text
} from 'react-native-paper';

export const Container = styled.View `
    flex : 1;
    display : flex;
    background : ${ props => props.theme.colors.background };
    position : relative;
    flex-direction : column;
`;
export const ContainerContent = styled.ScrollView `
    width : ${DEVICE_WIDTH}px;
    height : ${DEVICE_HEIGHT}px;
    margin-top : 100px;
`;

export const FavoriteCardContainer = styled.View `
    display : flex;
    flex-direction : row;
    height : 200px;
    width : 97%;
    align-items : center;
    border-top-width : ${ StyleSheet.hairlineWidth }px;
    border-top-color : ${ props => props.theme.colors.labelButton };
    border-bottom-width : ${ StyleSheet.hairlineWidth }px;
    border-bottom-color : ${ props => props.theme.colors.labelButton };
    position : relative;
    padding : 5px;
    background : ${ props => props.theme.colors.background };
    margin : 0 auto;
`;
export const FavoriteCardImage = styled.Image `
    width : 120px;
    height : 120px;
    margin : 2px;
`;
export const FavoriteCardInfo = styled.View `
    display : flex;
    flex : 1;
    flex-direction : column;
    max-width : 200px;
    width : 100%;
    margin-left : 10px;
`;
export const FavoriteCardTitle = styled.Text `
    font-size : 18px;
    color : ${ props => props.theme.colors.label };
    font-family : 'Nunito_600SemiBold';
`;
export const FavoriteCardIconsRow = styled.View `
    display : flex;
    flex-direction : row;
    height : 50px;
    width : 100%;
    margin-top : 10px;
    align-items : center;
`;
export const FavoriteCardMainPrice = styled.Text `
    font-size : 16px;
    color : ${ props => props.theme.colors.otherButtons };
    font-family : 'Nunito_600SemiBold';
`;
export const FavoriteCardSecondaryPrice = styled.Text `
    font-size : 13px;
    color : ${ props => props.theme.colors.otherButtons };
    font-family : 'Nunito_600SemiBold';
`;

export const FavoriteCardStar = styled.View `
    display : flex;
    align-items : center;
    justify-content : center;
    position : absolute;
    bottom : 20px;
    right : 20px;
`;