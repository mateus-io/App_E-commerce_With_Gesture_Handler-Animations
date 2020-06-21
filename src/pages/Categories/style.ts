import styled from 'styled-components/native';

import {
    TextInput,
    TouchableRipple,
    Text
} from 'react-native-paper';


export const SearchInputContainer = styled.View `
    height : 60px;
    width : 80%;
    margin : 0 auto;
    margin-top : 25px;
    margin-left : 60px;
    display : flex;
    flex-direction : row;
    align-items : center;
    padding : 5px;
    
`;

export const SearchButtonRipple = styled(TouchableRipple)`
    flex : .2;
    height : 52px;
    background : #ccc;
    display : flex;
    align-items : center;
    justify-content : center;
    border-bottom-right-radius : 20px;
`;

export const SearchInput = styled(TextInput) `
    flex : 1;
    justify-content : center;
    background : #fff;
    border-top-left-radius : 20px;
    border-color : transparent;
    height : 50px;
`;
export const Container = styled.View `
    flex : 1;
    display : flex;
    background : white;
    position : relative;
`;


export const ContainerProdutos = styled.ScrollView `
    flex : 1;
    display : flex;
    background : white;
    position : relative;
    max-width : 350px;
    width : 100%;
    margin : 5px auto;
    flex-direction : column;
`;

export const ProductContainer = styled.View `
    flex : .4;
    margin : 5px;
    background : transparent;
    height : 220px;
    border-radius : 6px;
    display : flex;
    flex-direction : row;
    flex-wrap : wrap;
`;

export const ProductItemContainer = styled(TouchableRipple) `
    flex : 1;
    margin : 5px;
    background : white;
    elevation : 5;
    height : 210px;
    border-radius : 20px;
    display : flex;
    position : relative;
`;
export const Item = styled.View `
    width : 100%;
    height : 100%;
    border-radius : 20px;
    display : flex;
    flex-direction : column;
    position : relative;
    align-items : center;
`;

export const ProductImage = styled.Image `
    width : 92%;
    height : 100px;
    margin : 5px;
    border-radius : 20px;
`;

export const ProductLegend = styled(Text) `
    font-family : 'Nunito_900Black_Italic';
    font-size : 13px;
    color : #888;
    margin : 0 10px;
`;

export const ProductAccuracy = styled.View `
    width : 100%;
    padding-right : 10px;
    height : 20px;
    display : flex;
    margin-left : 0;
    justify-content : flex-end;
    align-items : center;
    flex-direction : row;
`;

export const ProductPriceContainer = styled.View `
    
`;

export const ProductPrice = styled(Text) `
    font-family : 'Nunito_900Black_Italic';
    font-size : 14px;
    color : #210124;
    align-self : flex-start;
    margin-left : 10px;
`;

export const ProductPricePeace = styled(Text) `
    font-family : 'Nunito_600SemiBold';
    font-size : 12px;
    color : #888;
    align-self : flex-start;
    margin-left : 10px;
`;

export const ProductStarComponent = styled(TouchableRipple) `
    position : absolute;
    bottom : 10px;
    right : 10px;
`;

export const ProductCircle = styled.View `
    position : absolute;
    bottom : 0;
    right : 0;
    width : 100%;
    height : 65px;
    border-radius : 100px;
    border-bottom-right-radius : 20px;
    border-bottom-left-radius : 20px;
    background : #bef;
    border : 2px;
    border-color : #bff;
    z-index : -1;
`;
export const ProductCircleTop = styled.View `
    position : absolute;
    top : 0;
    left : 0;
    width : 100%;
    height : 100px;
    border-radius : 100px;
    border-top-right-radius : 20px;
    border-top-left-radius : 20px;
    background : #def;
    border : 2px;
    border-color : #ccc;
    z-index : -1;
`


