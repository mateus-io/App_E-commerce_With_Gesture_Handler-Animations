import styled from 'styled-components/native';

export const HomeView = styled.ScrollView `
    background : ${ props => props.theme.colors.primary };
    position : relative;
    display : flex;
    height : 100%;
`;