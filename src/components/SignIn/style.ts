import styled from 'styled-components/native';

import { Dimensions } from 'react-native';

import { StyleSheet, Animated } from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export const Container = styled.TouchableWithoutFeedback `
    flex : 1;
`;
export const ContentContainer = styled.View `
    height : ${ Math.floor(height) }px;
    width : ${ Math.floor(width) }px;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    position : relative;
`;

export const SignInBox = styled(Animated.View) `
    height : 300px;
    max-width : ${ Math.floor(width) }px;
    width : 100%;
    display : flex;
    flex-direction : column;
    justify-content : center;
    border-top-width : ${ StyleSheet.hairlineWidth }px;
    border-top-color : #ccc;
`;


export const SignInSocialRow = styled.View `
    height: 42px;
    max-width : ${ Math.floor(width) }px;
    width : 100%;
    display : flex;
    flex-direction : row;
    justify-content : space-between;
    align-items :  center;
    margin : 10px 0;
`;

export const SignInSocial = styled.TouchableOpacity.attrs({
    activeOpacity : .7
}) `
    display : flex;
    flex-direction : row;
    height : 100%;
    width : 180px;
    margin-right : 2px;
`;
export const SignInWithGoogleContent = styled.View `
    height : 100%;
    width : 100%;
    display : flex;
    flex-direction : row;
    position : relative;
    justify-content : center;
    align-items : center;
    background : #f23;
    border-radius : 3px;
    elevation : 5;
`;

export const SignInWithFacebookContent = styled.View `
    height : 100%;
    width : 100%;
    display : flex;
    flex-direction : row;
    position : relative;
    justify-content : center;
    align-items : center;
    background : #24f;
    border-radius : 3px;
    elevation : 5;
`;

export const SignInIconContainer = styled.View `
    background: #fff;
    border-radius : 2px;
    width: 40px;
    height: 40px;
    position: absolute;
    top : 1px;
    left : 1px;
    display : flex;
    align-items : center;
    justify-content : center;
`;


export const SignInIcon = styled.Image `
    width: 25px;
    height: 25px;
`;
export const SignInText = styled.Text `
    color: #fff;
    font-size: 14px;
    letter-spacing : 0.2px;
    font-family : 'Nunito_600SemiBold';
    margin-left : 35px;
`;

export const SignUpContainer = styled.TouchableWithoutFeedback `
    width : 300px;
    height : 20px;
`;
export const SignUpLabel = styled.Text `
    color: #24f;
    font-size: 11px;
    letter-spacing : 0.2px;
    font-family : 'Nunito_600SemiBold';
    text-align : center;
    padding-bottom : 10px;
    border-bottom-width : ${ StyleSheet.hairlineWidth }px;
    border-bottom-color : #ccc;
`;

export const Loading = styled.ActivityIndicator.attrs({
    size : 'small',
    color : '#999'
}) `
    margin : 30px 0;
`;




