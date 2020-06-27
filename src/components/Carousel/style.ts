import styled from 'styled-components/native';

import { Animated } from 'react-native';

import { 
    TouchableRipple,
    Text 
} from 'react-native-paper';

import { Dimensions } from 'react-native';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export const ContainerScroll = styled.ScrollView `
    display : flex;
    flex : 1;
    height : 100%;
    flex-direction : row;
    width : 100%;
`;

export const ContainerWrapper = styled.View `
    flex : 1;
    height : 1360px;
    flex-direction : row;
    display : flex;
`;

/** Visão Geral */

export const ContainerVerticalScroll = styled.ScrollView `
    flex : 1;
    display : flex;
    width : ${ DEVICE_WIDTH }px;
    height : ${ Math.floor( DEVICE_HEIGHT ) }px;
    flex-direction : column;
`;


export const ContentContainerVertical = styled.View `
    flex : 1;
    display : flex;
    background : #dddddd;
    height : 1500px;
`;
export const ShowProductsImagesContainer = styled.View `
    height : 300px;
    width : 100%;
    position : relative;
    display : flex;
`;
export const CarouselImages = styled(Animated.View) `
    height : 100%;
    display : flex;
    width : 100%;
    z-index : 10;
`;
export const CarouselImagesWrapper = styled.ScrollView `
    height : 100%;
    display : flex;
    flex-direction : row;
    width : 100%;
`;
export const CarouselContainerFixed = styled.View `
    display : flex;
    flex-direction : row;
    flex-wrap : wrap;
    height : 100%;
    width : 100%;
    position : relative;
`;

export const CarouselImage = styled(Animated.View) `
    width : ${DEVICE_WIDTH}px;
    height : 100%;
    background :  #fff;
`;

export const ImageIntoCarousel = styled.Image `
    width : 100%;
    height : 100%;
`;

export const ShowInfoProductContainer = styled.View `
    height : 480px;
    width : 100%;
    background :  #fff;
    display : flex;
    flex-direction : column;
`;

export const InfoProductContainer  = styled.View `
    height : 100%;
    width : 100%;
    display : flex;
    flex-direction : column;
    padding : 10px;
`;

export const InfoProductTitle = styled.Text `
    font-family : 'Nunito_900Black_Italic';
    font-size : 15px;
    color : #210124;
`;
export const InfoProductFeedbackText = styled.Text `
    font-size : 11px;
    color : #777;
    font-family : 'Nunito_600SemiBold';
    margin-left : 10px;
`;
export const InfoProductFeedbackTextBolder = styled.Text `
    font-size : 11px;
    color : #111;
    font-family : 'Nunito_600SemiBold';
`;
export const InfoProductExtraText = styled.Text `
    font-size : 11px;
    color : #aaa;
    font-family : 'Nunito_600SemiBold';
`;

export const InfoProductExtraInformation = styled.View `
    display : flex;
    width : 100%;
    height : 50px;
    flex-direction : row;
`;

export const InfoProductFeedbackContainer = styled.View `
    display : flex;
    flex-direction : row;
    align-items : center;
    width : 100%;
    height : 50px;
`;


export const InfoProductIconsContainer = styled.View `
    display : flex;
    flex-direction : row;
    justify-content : space-between;
    width : 60px;
    height : 60px;
    align-items : center;
`;


export const InfoProductStatusBar = styled.View `
    display : flex;
    flex-direction : row;
    justify-content : space-between;
    width : 80%;
    height : 60px;
`;

export const InfoProductPriceContainer = styled.View `
    display : flex;
    flex-direction : column;
    height : 300px;
    width : 100%;
`;
export const InfoProductLineThroughText = styled.Text `
    font-size : 11px;
    color : #aaa;
    font-family : 'Nunito_600SemiBold';
    text-decoration : line-through;
`;
export const InfoProductNormalText = styled.Text `
    font-size : 13px;
    color : #210124;
    font-family : 'Nunito_600SemiBold';
`;
export const InfoProductPriceMainText = styled.Text `
    font-size : 28px;
    color : #210124;
    font-family : 'Nunito_900Black_Italic';
`;
export const PurchaseProductButton = styled(TouchableRipple) `
    background :  #0f0;
    border-radius : 10px;
    height : 50px;
    width : 100%;
    display : flex;
    flex-direction : row;
    align-items : center;
    justify-content : center;
    margin : 5px 0;
`;

export const PurchaseButtonContent = styled.View `
    border-radius : 10px;
    height : 50px;
    width : 100%;
    display : flex;
    flex-direction : row;
    align-items : center;
    justify-content : center;
`;

export const InfoProductPurchaseText = styled.Text `
    font-size : 15px;
    color : #fff;
    font-family : 'Nunito_600SemiBold';
    margin-left : 15px;
`;

export const AddBagProductButton = styled(TouchableRipple) `
    background :  #fff;
    border-radius : 10px;
    height : 50px;
    width : 100%;
    display : flex;
    flex-direction : row;
    border-width : 1px;
    border-color : #0f0;
    align-items : center;
    justify-content : center;
    margin : 5px 0;
`;

export const InfoProductAddBagText = styled.Text `
    font-size : 15px;
    color : #0f0;
    font-family : 'Nunito_600SemiBold';
    margin-left : 15px;
`;

export const ReceiveWithoutFreteButton = styled(TouchableRipple) `
    background :  #07f;
    border-radius : 10px;
    height : 50px;
    width : 100%;
    display : flex;
    flex-direction : row;
    align-items : center;
    justify-content : center;
    margin : 5px 0;
`;

export const ShowMatchProducts = styled.View `
    width : 100%;
    height : 225px;
    background : #fff;
    display : flex;
    position : relative;
    flex-direction : column;
`;

export const CarouselSuggestionCard = styled(Animated.View) `
    width : ${DEVICE_WIDTH / 2}px;
    display : flex;
`;

export const SuggestionTitleText = styled(Text) `
    font-size : 18px;
    color : #999;
    background : #fff;
    margin-top : 20px;
    padding : 10px;
    font-family : 'Nunito_600SemiBold';
`;



/**Depois botar em um componente diferente */

export const ProductItemContainer = styled(TouchableRipple) `
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
    height : 100%;
    display : flex;
    flex-direction : column;
    position : relative;
    align-items : center;
`;

export const ProductImage = styled.Image `
    width : 92%;
    height : 100px;
    margin : 5px;
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
`;

/**Component 2 */

export const SpecsContainerGeneral = styled.View `
    height : ${ Math.floor(DEVICE_HEIGHT) }px;
    width : ${ DEVICE_WIDTH }px;
`;
export const SpecsContainerScroll = styled.ScrollView `
    width : 100%;
    height : 100%;
`;
export const SpecsContainerFixed = styled.View `
    width : 100%;
    height : 65%;
`;

export const SpecsOfferAddProductToBagOrPurchase = styled.View `
    height : 20%;
    width : 100%;
    display : flex;
    flex-direction : row;
    background : #fff;
    padding-top : 5px;
`;
export const SpecsOfferButtonAddToBag = styled(TouchableRipple) `
    flex : 1;
    background : #fff;
    border-width : 1px;
    border-color :  #1f9;
    margin : 4px;
    height : 50px;
    align-items : center;
    justify-content : center;
`;

export const SpecsOfferButtonPurchase = styled(TouchableRipple) `
    flex : 1;
    height : 50px;
    background : #1f9;
    margin : 4px;
    align-items : center;
    justify-content : center;
`;

export const PurchaseText = styled.Text `
    font-family : 'Nunito_900Black_Italic';
    font-size : 14px;
    color : #fff;
`;
export const AddProductBagText = styled.Text `
    font-family : 'Nunito_900Black_Italic';
    font-size : 14px;
    color : #1f9;
`;

export const SpecsContainer = styled.View `
    height : 1360px;
    width : 100%;
    background : #fff;
    display : flex;
    flex-direction : column;
`;
export const SpecsTitleProp = styled(Text) `
    background : #dddddf;
    font-size : 13px;
    color : #210124;
    padding : 5px;
    font-family : 'Nunito_900Black_Italic';
`;

export const SpecsValue = styled(Text) `
    font-size : 13px;
    color : #aaa;
    padding : 5px;
    font-family : 'Nunito_600SemiBold';
`;

export const SpecsValueWithBorderTop = styled.View `
    border-top-width : ${ StyleSheet.hairlineWidth }px;
    border-top-color : #ccc;
    color : #ccc;
    display : flex;
    flex-direction :  row;
    justify-content : space-between;
    font-family : 'Nunito_600SemiBold';
`;


/**Component 3 */

export const FeedbacksContainer = styled.View `
    height : ${ Math.floor(DEVICE_HEIGHT) }px;
    width : ${ DEVICE_WIDTH }px;
`;

export const FeedbacksContainerFixed = styled.View `
    width : 100%;
    height : 65%;
`; 

export const FeedbacksContainerScroll = styled.ScrollView `
    width : 100%;
    height : 100%;
`;
export const FeedbackContentContainer = styled.View `
    display : flex;
    flex-direction : column;
    width : 100%;
    height : 100%;
    background : #DCDCDC;
`;

export const MainFeedbackContainer = styled.View `
    display : flex;
    flex-direction : row;
    width : 100%;
    background : #fff;
    height : 90px;
`;
export const MainFeedbackTextContainer = styled.View `
    width : 45%;
    height : 100%;
    display : flex;
    justify-content : center;
    align-items : center;
`; 
export const MainFeedbackText = styled.Text `
    font-family : 'Nunito_900Black_Italic';
    font-size : 55px;
    color : #24f;
`;
export const QuantFeedbacksText = styled.Text `
    font-family : 'Nunito_600SemiBold';
    font-size : 18px;
    color : #ccc;
    margin-bottom : 10px;
`;
export const ShowFeedbacksIconsContainer = styled.View `
    display : flex;
    flex-direction : column;
    height : 100%;
    width : 55%;
`;
export const ShowFeedbacksIconsRow = styled.View `
    display : flex;
    flex : 1;
    flex-direction : row;
    align-items : center;
`;

export const QualityBarContainer = styled.View `
    width : 100%;
    height : 80px;
    display : flex;
    flex-direction : column;
    margin : 5px 0;
`;
export const QualityLineContainer = styled.View `
    display : flex;
    flex-direction : row;
    justify-content : space-between;
    align-items : center;
    height : 50%;
    width : 100%;
`;

export const QualityText = styled.Text `
    font-family : 'Nunito_600SemiBold';
    font-size : 18px;
    color : #555;
    margin : 10px;
`;

export const BarsContainer = styled.View `
    width : 100px;
    height : 5px;
    display : flex;
`;

export const FiltersContainer = styled(TouchableRipple) `
    height : 50px;
    background  : #fff;
    width : 100%;
`;
export const FiltersContent = styled.View `
    display : flex;
    flex-direction : row;
    height : 50px;
    width : 100%;
    align-items : center;
    padding : 25px;
`;
export const FiltersText = styled.Text `
    font-family : 'Nunito_600SemiBold';
    font-size : 16px;
    color : #555;
    margin-left : 10px;
`;

export const BehindModalContainer = styled(TouchableRipple) `
    flex : 1;
    background : #000000aa;
`;
export const ModalContainerContent = styled.View `
    display : flex;
    flex-direction : column;
    margin : 50px;
    
`;
export const ModalItemContainer = styled.View `
    width : 100%;
    height : 300px;
    display : flex;
    border-radius : 20px;
    background : #fff;
    padding : 20px;
`;
export const ModalItem = styled(TouchableRipple) `
    width : 100%;
    height : 50px;
`;
export const ModalItemRow = styled.View `
    width : 100%;
    height : 50px;
    flex-direction : row;
    background : #fff;
    align-items : center;
    padding : 20px;
`;
export const ModalMainText = styled.Text `
    font-family : 'Nunito_900Black_Italic';
    font-size : 18px;
    color : #444;
`;
export const ModalSecondaryText = styled.Text `
    font-family : 'Nunito_600SemiBold';
    font-size : 16px;
    color : #555;
    margin-left : 10px;
`;

export const CommentsContainer = styled.View `
    width : 100%;
    height : 100%;
    display : flex;
    flex-direction : column;
    padding-bottom : 230px;
    background : #fff;
`;

import {
    StyleSheet
} from 'react-native';

export const CommentsItemContainer = styled.View `
    flex : 1;
    position : relative;
    border-top-width : ${ StyleSheet.hairlineWidth }px;
    border-top-color : #ccc;
    padding : 10px;
`;

export const CommentsText = styled.Text `
    font-family : 'Nunito_600SemiBold';
    font-size : 16px;
    color : #bbb;
    margin : 10px 0;
`;
export const CommentsMainPhrase = styled.Text `
    font-family : 'Nunito_900Black_Italic';
    font-size : 20px;
    color : #000;
    margin : 10px 0;
`;
export const CommentsPositiveFeedback = styled.Text `
    font-family : 'Nunito_600SemiBold';
    font-size : 16px;
    color : #5d5;
    margin : 10px 0;
`;
export const CommentsNegativeFeedback = styled.Text `
    font-family : 'Nunito_600SemiBold';
    font-size : 16px;
    color : #e55;
    margin : 10px 0;
`;
export const CommentsDate = styled.Text `
    position : absolute;
    top : 50px;
    right : 20px;
`;


export const WriteNewFeedbackContainer = styled.View `
    height : 20%;
    width : 100%;
    display : flex;
    flex-direction : row;
    background : #fff;
    padding-top : 5px;
    border-top-width : ${StyleSheet.hairlineWidth}px;
    border-top-color : #ccc;
`;

export const WriteNewFeedbackButton = styled(TouchableRipple) `
    flex : 1;
    height : 50px;
    background : #45f;
    margin : 4px;
    align-items : center;
    justify-content : center;
    elevation : 2;
`;

export const WriteNewFeedBackText = styled.Text `
    font-family : 'Nunito_900Black_Italic';
    font-size : 14px;
    color : #dddddd;
`;


/**Component 4 */

export const PurchaseTogetherContainer = styled.View `
    height : ${ Math.floor(DEVICE_HEIGHT) }px;
    width : ${ DEVICE_WIDTH }px;
`;

export const PurchaseTogetherContainerFixed = styled.View `
    width : 100%;
    height : 65%;
`; 

export const PurchaseTogetherContainerScroll = styled.ScrollView `
    width : 100%;
    height : 100%;
`;
export const PurchaseTogetherContentContainer = styled.View `
    display : flex;
    flex-direction : column;
    width : 100%;
    height : 100%;
    background : #DCDCDC55;
    padding : 10px;
`;

export const PurchaseTogetherItem = styled.View `
    flex : 1;
    height : 150px;
    background : #fff;
    flex-direction : row;
    position : relative;
    align-items : center;
    elevation : 2;
`;
export const PurchaseTogetherItemImage = styled.Image `
    width : 100px;
    height : 100px;
    margin : 10px;
`;

export const PurchaseTogetherProductInfo = styled.View `
    display : flex;
    flex-direction : column;
    width : 170px;
`;
export const PurchaseTogetherCheckContainer = styled.View `
    width : 30px;
    height : 30px;
    display : flex;
    align-items : center;
    position : absolute;
    top : 20px;
    right : 15px;
`;

export const PurchaseTogetherStarProductContainer = styled.View `
    width : 30px;
    height : 30px;
    display : flex;
    align-items : center;
    position : absolute;
    bottom : 15px;
    right : 15px;
`;
export const PurchaseTogetherProductTitle = styled.Text `
    font-family : 'Nunito_600SemiBold';
    font-size : 15px;
    color : #888;
    margin : 5px 0;
`;

export const PurchaseTogetherProductIconsRowContainer = styled.View `
    display : flex;
    flex-direction : row;
    align-items : center;
`;
export const PurchaseTogetherProductPriceText = styled.Text `
    font-family : 'Nunito_600SemiBold';
    font-size : 16px;
    color : #111;
    margin : 5px 0;
`;
export const PurchaseTogetherProductLabelAvista = styled.Text `
    font-family : 'Nunito_600SemiBold';
    font-size : 10px;
    color : #111;
    margin : 0 5px;
`;

export const PurchaseTogetherRowText = styled.View `
    display : flex;
    flex-direction : row;
    align-items : center;
`;

export const PurchaseTogetherProductPriceTextPeaces = styled.Text `
    font-family : 'Nunito_600SemiBold';
    font-size : 12px;
    color : #555;
    margin : 5px 0;
`;

export const PurchaseTogetherMainText = styled.Text `
    font-family : 'Nunito_900Black_Italic';
    font-size : 18px;
    color : #555;
`;

export const PurchaseButtonContainer = styled.View `
    height : 20%;
    width : 100%;
    display : flex;
    flex-direction : row;
    background : #fff;
    padding-top : 5px;
    border-top-width : ${StyleSheet.hairlineWidth}px;
    border-top-color : #ccc;
`;

export const PurchaseButton = styled(TouchableRipple) `
    flex : 1;
    height : 50px;
    background : #7e4;
    margin : 4px;
    align-items : center;
    justify-content : center;
    elevation : 2;
`;

export const PurchaseButtonText = styled.Text `
    font-family : 'Nunito_900Black_Italic';
    font-size : 14px;
    color : #fff;
`;