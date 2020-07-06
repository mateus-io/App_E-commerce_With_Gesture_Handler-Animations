import styled from 'styled-components/native';

import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import {
    Feather
} from '@expo/vector-icons';

import {
    Text,
    Title,
    Drawer,
    Caption
} from 'react-native-paper';

import {
    StyleSheet
} from 'react-native';

import { SvgXml } from 'react-native-svg';

export const CustomIcon = styled(Feather) `
    color : ${ props => props.theme.colors.label };
`;

export const ContainerScroll = styled(DrawerContentScrollView) `
    width : 100%;
    display :  flex;
    position: relative;
`;
export const Container = styled.View `
    background : ${ props => props.theme.colors.secundary };
    flex : 1;
    display :  flex;
`;
export const Wave = styled(SvgXml) `
    position : absolute;
    top : 0;
    bottom : 0;
    height : 300px;
    width : 100%;
    z-index : -1;
`;

export const Section = styled(Drawer.Section) `
    height : 50px;
    width : 100%;
    align-items : center;
    display : flex;
    margin : 0;
    flex-direction : row;
    position : relative;
    border-top-width : ${StyleSheet.hairlineWidth}px;
    border-top-color : ${ props => props.theme.colors.labelButton };
`;

export const SectionPreferences = styled(Drawer.Section) `
    height : 50px;
    width : 50px;
    align-items : center;
    display : flex;
    justify-content : center;
    position : absolute;
    left : 220px;
`;

export const PreferencesContainer = styled.View `
    display : flex;
    flex-direction : column;
    justify-content : center;
    flex : 1;
    align-items : flex-start;
    padding : 2px;
`;


export const Item = styled(DrawerItem) `
    width : 100%;
    margin : 0;
    
`; 

export const MainText = styled(Text) `
    font-size : 13px;
    font-family : 'Nunito_900Black_Italic';
    color : ${ props => props.theme.colors.text};
    text-align : justify;
`;

export const CustomTitle = styled(Title) `
    font-size : 13px;
    font-family : 'Nunito_600SemiBold';
    color : ${ props => props.theme.colors.label };
`;

export const NumberCaption = styled(Caption) `
    font-size : 13px;
    font-family : 'Nunito_900Black_Italic';
    color : ${ props => props.theme.colors.text };
`;

export const Content = styled.View `
    flex : 1;
    display : flex;
    
`;

export const UserInfoContainer = styled.View `
    flex : 1;
    display : flex;
    align-items : center;
    flex-direction : row;
`
export const ProfilePictureContainer = styled.View `
    background : ${ props => props.theme.colors.primary };
    width : 80px;
    height : 80px;
    margin : 10px 15px;
    border-radius : 50px;
    display : flex;
    align-items : center;
    justify-content : center;
`;
export const InfoContainer = styled.View `
    flex : 1;
    display : flex;
    align-items : flex-start;
    justify-content : flex-start;
    flex-direction : column;
`;

export const DetailInfoContainer = styled.View `
    display : flex;
    flex-direction : row;
    align-items : flex-start;
    justify-content : flex-start;
    flex : 1;
    padding : 0;
    margin : 5px;
`;

export const NameContainer = styled.View `
    display : flex;
    flex-direction : column;
    align-items : flex-start;
    justify-content : flex-start;
    flex : 1;
    padding : 0;
    margin-top : 20px;
`;