import styled from 'styled-components/native';
//
export const Container = styled.ScrollView `
    flex : 1;
    display : flex;
    background : ${ props => props.theme.colors.background };
    position : relative;
    flex-direction : column;
`;

export const ContentContainer = styled.View `
    height : 100%;
    background : #bef;
    max-width : 400px;
    margin : 0 auto;
    width : 100%;
`;


