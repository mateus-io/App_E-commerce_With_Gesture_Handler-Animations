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

export const ProductItemContainer = styled.View `
    display : flex;
    flex-direction : column;
    height : 310px;
    width : 97%;
    background : ${ props => props.theme.colors.background };
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
    margin : 0 5px;
`;

export const ProductInformationRightSide = styled.View `
    display : flex;
    flex-direction : column;
    width : 65%;
`;
export const ProductLabelTitle = styled.Text `
    font-size : 15px;
    color : ${ props => props.theme.colors.label };
    font-family : 'Nunito_600SemiBold';
    margin : 20px 0; 
`;

export const ProductLabelExtraInformation = styled.View `
    display : flex;
    flex-direction : row;
    align-items : center;
`;
export const ProductLabelExtraText = styled.Text `
    font-size : 11px;
    color : ${ props => props.theme.colors.label };
    font-family : 'Nunito_600SemiBold';
    margin : 0 5px;
`;
export const ProductLavelExtraTextBottom = styled.Text `
    font-size : 11px;
    color : ${ props => props.theme.colors.text };
    font-family : 'Nunito_600SemiBold';
`;

export const ProductQuantityContainer = styled.View `
    display : flex;
    flex-direction : column;
    height : 80px;
    width : 100%;
`;
export const ProductQuantityTitle = styled.Text `
    font-size : 14px;
    color : ${ props => props.theme.colors.label };
    font-family : 'Nunito_600SemiBold';
    margin : 0 5px;
`;
export const ProductQuantityRowContainer = styled.View `
    display : flex;
    flex-direction : row;
    justify-content : space-between;
    padding : 5px;
    align-items : center;
`;

export const ProductQuantitySwitchContainer = styled.View `
    display : flex;
    flex-direction : row;
    height : 50px;
    width : 125px;
    background : ${ props => props.theme.colors.background };
    border-width : ${ StyleSheet.hairlineWidth }px;
    border-color : ${ props => props.theme.colors.label };
`;
export const ProductQuantitySwitchItemContainer = styled.View `
    display : flex;
    flex-direction : row;
    align-items : center;
    justify-content : center;
    flex : 1;
`;
export const ProductQuantitySwitchItemTouchable = styled(TouchableRipple) `
    display : flex;
    flex-direction : row;
    flex : 1;
`;
export const ProductQuatitySwitchNumberLabel = styled.Text `
    font-size : 17px;
    color : ${ props => props.theme.colors.text };
    font-family : 'Nunito_600SemiBold';
`;

export const ProductQuantityPriceContainer = styled.View `
    display : flex;
    flex-direction : column;
    height : 50px;
    width : 150px;
    align-items : flex-end;
    justify-content : center;
    border-bottom-width : ${ StyleSheet.hairlineWidth }px;
    border-bottom-color : ${ props => props.theme.colors.labelButton };
    border-top-width : ${ StyleSheet.hairlineWidth }px;
    border-top-color : ${ props => props.theme.colors.labelButton };
`;
export const ProductQuantityPriceMainText = styled.Text `
    font-size : 16px;
    color : ${ props => props.theme.colors.text };
    font-family : 'Nunito_600SemiBold';
`;
export const ProductQuantityPriceDiscount = styled.Text `
    font-size : 14px;
    color : ${ props => props.theme.colors.label };
    font-family : 'Nunito_600SemiBold';
`;

export const ProductExtraItemsContainer = styled.View `
    border-top-width : ${ StyleSheet.hairlineWidth }px;
    border-top-color : ${ props => props.theme.colors.labelButton };
    width : 100%;
    height : 50px;
    display : flex;
    flex-direction : row;
    padding : 5px;
    align-items : center;
`;
export const ProductExtraMainText = styled.Text `
    font-size : 14px;
    color : ${ props => props.theme.colors.text };
    font-family : 'Nunito_600SemiBold';
`;
export const ProductExtraSecondaryText = styled.Text `
    font-size : 14px;
    color : ${ props => props.theme.colors.label };
    font-family : 'Nunito_600SemiBold';
`;
export const ProductExtraColumn = styled.View `
    display : flex;
    flex-direction : column;
`;

export const ProductSubtotalContainer = styled.View `
    display : flex;
    flex-direction : column;
    height : 150px;
    width : 97%;
    background : ${ props => props.theme.colors.background };
    elevation : 5;
    margin : 5px;
    justify-content : center;
    padding : 10px;
`;
export const ProductSubtotalButton = styled(TouchableRipple) `
    width : 100%;
    height : 50px;
    background : ${ props => props.theme.colors.background };
    elevation : 2;
    border-width : 2px;
    display : flex;
    flex-direction: row;
    align-items : center;
    border-color : ${ props => props.theme.colors.buy };
`;
export const ProductSubtotalLabel = styled.Text `
    font-family : 'Nunito_900Black_Italic';
    font-size : 16px;
    color : ${ props => props.theme.colors.buy };
`;
export const ProductSubtotalNumberContainer = styled.View `
    display : flex;
    flex-direction : row;
    justify-content : space-between;
    width : 100%;
    height : 50px;
    margin : 5px 0;
`;
export const ProductSubtotalMiniLabel = styled.Text `
    font-size : 18px;
    color : ${ props => props.theme.colors.text };
    font-family : 'Nunito_600SemiBold';
`;
export const ProductCalculateValueContainer = styled.View `
    display : flex;
    flex-direction : column;
    width : 150px;
    height : 50px;
    align-items : flex-end;
`;
export const ProductPriceSubtotalBolder = styled.Text `
    font-size : 15px;
    color : ${ props => props.theme.colors.otherButtons };
    font-family : 'Nunito_600SemiBold';
`;
export const ProductPriceSubtotalNormal = styled.Text `
    font-size : 13px;
    color : ${ props => props.theme.colors.otherButtons };
    font-family : 'Nunito_600SemiBold';
`;

export const ProductAddMoreButtonContainer = styled.View `
    display : flex;
    flex-direction : column;
    width : 100%;
    height : 150px;
    background :  transparent;
    margin : 5px 0;
    align-items : center;
    justify-content : center;
    padding : 5px;
`;
export const ProductContinueButton = styled(TouchableRipple) `
    width : 100%;
    height : 50px;
    background : ${ props => props.theme.colors.buy };
    display : flex;
    flex-direction : row;
    align-items : center;
    justify-content : center;
    elevation : 2;
`;

export const ProductContinueLabel = styled.Text `
    font-family : 'Nunito_900Black_Italic';
    font-size : 16px;
    color : ${ props => props.theme.colors.background };
`;

export const ProductAddMoreButton = styled(TouchableRipple) `
    width : 100%;
    height : 50px;
    background : transparent;
    display : flex;
    flex-direction : row;
    align-items : center;
    justify-content : center;
`;

export const AddMoreItemsToBagContainer = styled.ScrollView `
    height : 300px;
    width : 100%;
    display : flex;
    flex-direction : row;
`;

export const AddMoreItemsToBagContent = styled.View `
    display : flex;
    flex-direction : row;
    width : 100%;
    flex-wrap : wrap;
    height : 100%;
`;

export const CarouselSuggestionCardExtraInformation = styled.View `
    width : ${DEVICE_WIDTH / 2}px;
    display : flex;
    height : 275px;
    elevation : 2;
    background : ${ props => props.theme.colors.background };
    position : relative;
    align-items : center;
`;

export const SuggestionTitleText = styled(Text) `
    font-size : 18px;
    color : ${ props => props.theme.colors.label };
    background : ${ props => props.theme.colors.background };
    margin-top : 20px;
    padding : 10px;
    font-family : 'Nunito_600SemiBold';
`;

export const AddSuggestionToBagButton = styled(TouchableRipple) `
    width : 90%;
    height : 50px;
    margin : 5px;
    background : ${ props => props.theme.colors.buy };
    position : absolute;
    bottom : 0;
    border-radius : 5px;
    
`;
export const AddSuggestionToBagContent = styled.View `
    display : flex;
    flex-direction : row;
    align-items : center;
    justify-content : center;
    height : 100%;
`;
export const AddSuggestionToBagLabel = styled.Text `
    font-family : 'Nunito_900Black_Italic';
    font-size : 13px;
    color : ${ props => props.theme.colors.background };
`;

/**Depois botar em um component diferente */

export const CarouselSuggestionCard = styled.View `
    width : ${DEVICE_WIDTH / 2}px;
    display : flex;
`;


export const ProductSuggestionItemContainer = styled(TouchableRipple) `
    flex : 1;
    margin : 5px;
    background : white;
    elevation : 5;
    height : 210px;
    display : flex;
    position : relative;
`;
export const Item = styled.View `
    width : 100%;
    height : 210px;
    display : flex;
    flex-direction : column;
    position : relative;
    align-items : center;
`;

export const ProductImageSuggestionCard = styled.Image `
    width : 92%;
    height : 100px;
    margin : 5px;
`;

export const ProductLegend = styled(Text) `
    font-family : 'Nunito_900Black_Italic';
    font-size : 13px;
    color : ${ props => props.theme.colors.label };
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

export const ProductPrice = styled(Text) `
    font-family : 'Nunito_900Black_Italic';
    font-size : 14px;
    color : ${ props => props.theme.colors.text };
    align-self : flex-start;
    margin-left : 10px;
`;

export const ProductPricePeace = styled(Text) `
    font-family : 'Nunito_600SemiBold';
    font-size : 12px;
    color : ${ props => props.theme.colors.label };
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
    background : ${ props => props.theme.colors.primary };
    border : 2px;
    border-color : ${ props => props.theme.colors.quaternary };
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
    background : ${ props => props.theme.colors.secundary};
    border : 2px;
    border-color : ${ props => props.theme.colors.labelButton };
    z-index : -1;
`;
