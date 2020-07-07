import React, { useState, useEffect, useContext } from 'react';

import Header from '../../components/Header';

import {
    Container,
    ProductItemContainer,
    ContainerContent,
    ProductItemMainContent,
    ProductImage,
    ProductInformationRightSide,
    ProductLabelTitle,
    ProductLabelExtraInformation,
    ProductLabelExtraText,
    ProductLavelExtraTextBottom,
    ProductQuantityContainer,
    ProductQuantityTitle,
    ProductQuantityRowContainer,
    ProductQuantitySwitchContainer,
    ProductQuantitySwitchItemTouchable,
    ProductQuatitySwitchNumberLabel,
    ProductQuantitySwitchItemContainer,
    ProductQuantityPriceContainer,
    ProductQuantityPriceMainText,
    ProductQuantityPriceDiscount,
    ProductExtraItemsContainer,
    ProductExtraMainText,
    ProductExtraSecondaryText,
    ProductExtraColumn,
    ProductSubtotalContainer,
    ProductSubtotalButton,
    ProductSubtotalLabel,
    ProductSubtotalNumberContainer,
    ProductSubtotalMiniLabel,
    ProductCalculateValueContainer,
    ProductPriceSubtotalBolder,
    ProductPriceSubtotalNormal,
    ProductAddMoreButtonContainer,
    ProductContinueButton,
    ProductContinueLabel,
    ProductAddMoreButton,
    AddMoreItemsToBagContainer,
    AddMoreItemsToBagContent,

    CarouselSuggestionCard,
    ProductSuggestionItemContainer,
    Item,
    ProductImageSuggestionCard,
    ProductLegend,
    ProductAccuracy,
    ProductPrice,
    ProductPricePeace,
    ProductStarComponent,
    ProductCircle,
    ProductCircleTop,
    CarouselSuggestionCardExtraInformation,
    SuggestionTitleText,
    AddSuggestionToBagButton,
    AddSuggestionToBagContent,
    AddSuggestionToBagLabel
} from './style';

import { Feather } from '@expo/vector-icons';
import { Checkbox } from 'react-native-paper';
import { 
    ThemeContext
} from 'styled-components/native';

import {
    Alert,
    ActivityIndicator, 
    View
} from 'react-native';
import { WebView } from 'react-native-webview';

import SignIn from '../../components/SignIn';

import { AppContext } from '../../context';

type Props = {
    navigation : any;
}
type State = {
    title : string;
}

const Bag = ( { navigation } : Props ) => {
    const [showCheckout, setShowCheckout] = useState(false);

    const { state } = useContext(AppContext);
    const { colors } = useContext(ThemeContext);

    const stateChange = (state : State) => {
        switch (state.title) {
            case 'success':
                Alert.alert("Pagamento aprovado!", `Recebemos seu pagamento de`);
                break;
            case 'pending':
                
                Alert.alert("Pagamento pendente!", `Seu pagamento de está pendente de processamento, assim que for processado seguiremos com o pedido!`)
                break;
            case 'failure':
                Alert.alert("Pagamento não aprovado!", 'Verifique os dados e tente novamente');
                break;
        }
    }


    return (
        !state.logged ?
            <SignIn
                navigate={navigation.navigate}
            />
        :
            !showCheckout ?
                <Container>
                    <Header navigation={ navigation.toggleDrawer }/>
                    <ContainerContent>
                        <ProductItemContainer>
                            <ProductItemMainContent>
                                <ProductImage
                                    source=
                                        { { 
                                            uri : 'https://p.kindpng.com/picc/s/91-910946_jordan-jumpman-hustle-sneakers-hd-png-download.png' 
                                        } }
                                />
                                <ProductInformationRightSide>
                                    <ProductLabelTitle numberOfLines={2}>
                                        Smartphone Samsung Galaxy A10s 32GB Preto - 4G 2GB RAM 6,2" Câmera
                                    </ProductLabelTitle>

                                    <ProductLabelExtraInformation>
                                        <Feather name="shopping-bag" size={12} color={colors.text}/>
                                        <ProductLabelExtraText>
                                            Vendido e entrege por 
                                            <ProductLavelExtraTextBottom>
                                                AnchorShop
                                            </ProductLavelExtraTextBottom>
                                        </ProductLabelExtraText>
                                    </ProductLabelExtraInformation>

                                </ProductInformationRightSide>
                            </ProductItemMainContent>

                            <ProductQuantityContainer>
                                <ProductQuantityTitle>
                                    Quantidade : 
                                </ProductQuantityTitle>
                                <ProductQuantityRowContainer>
                                    <ProductQuantitySwitchContainer>
                                        <ProductQuantitySwitchItemTouchable>
                                            <ProductQuantitySwitchItemContainer>
                                                <Feather name="minus" size={18} color="red"/>
                                            </ProductQuantitySwitchItemContainer>
                                        </ProductQuantitySwitchItemTouchable>

                                        <ProductQuantitySwitchItemContainer>
                                            <ProductQuatitySwitchNumberLabel>
                                                1
                                            </ProductQuatitySwitchNumberLabel>
                                        </ProductQuantitySwitchItemContainer>

                                        <ProductQuantitySwitchItemTouchable>
                                            <ProductQuantitySwitchItemContainer>
                                                <Feather name="plus" size={18} color="green"/>
                                            </ProductQuantitySwitchItemContainer>
                                        </ProductQuantitySwitchItemTouchable>
                                    </ProductQuantitySwitchContainer>

                                    <ProductQuantityPriceContainer>
                                        <ProductQuantityPriceMainText>
                                            R$ 999,90 ou
                                        </ProductQuantityPriceMainText>
                                        <ProductQuantityPriceDiscount>
                                            R$ 929,07 à vista
                                        </ProductQuantityPriceDiscount>
                                    </ProductQuantityPriceContainer>


                                </ProductQuantityRowContainer>

                            </ProductQuantityContainer>

                            <ProductExtraItemsContainer>
                                <Checkbox
                                    status='checked'
                                />
                                <ProductExtraColumn>
                                    <ProductExtraMainText>
                                        ADICIONAR GARANTIA ESTENDIDA
                                    </ProductExtraMainText>
                                    <ProductExtraSecondaryText>
                                        A partir de R$ 149,85
                                    </ProductExtraSecondaryText>
                                </ProductExtraColumn>
                            </ProductExtraItemsContainer>

                            <ProductExtraItemsContainer>
                                <Checkbox
                                    status='checked'
                                />
                                <ProductExtraColumn>
                                    <ProductExtraMainText>
                                        ADICIONAR GARANTIA ESTENDIDA
                                    </ProductExtraMainText>
                                    <ProductExtraSecondaryText>
                                        A partir de R$ 149,85
                                    </ProductExtraSecondaryText>
                                </ProductExtraColumn>
                                
                            </ProductExtraItemsContainer>

                        </ProductItemContainer>

                        <ProductSubtotalContainer>
                            <ProductSubtotalButton>
                                <ProductSubtotalLabel>
                                    CALCULAR FRETE E PRAZO DE ENTREGA
                                </ProductSubtotalLabel>
                            </ProductSubtotalButton>
                            
                            <ProductSubtotalNumberContainer>
                                <ProductSubtotalMiniLabel>
                                    Subtotal:
                                </ProductSubtotalMiniLabel>
                                <ProductCalculateValueContainer>
                                    <ProductPriceSubtotalBolder>
                                        R$ 999,00
                                    </ProductPriceSubtotalBolder>
                                    <ProductPriceSubtotalNormal>
                                        R$ 929,07 à vista
                                    </ProductPriceSubtotalNormal>
                                </ProductCalculateValueContainer>
                            </ProductSubtotalNumberContainer>

                        </ProductSubtotalContainer>
                        
                        <ProductAddMoreButtonContainer>
                            <ProductContinueButton>
                                <ProductContinueLabel 
                                    onPress={ () => {
                                        //setShowCheckout(true);
                                    } }
                                >
                                    CONTINUAR
                                </ProductContinueLabel>
                            </ProductContinueButton>

                            <ProductAddMoreButton>
                                <ProductSubtotalLabel>
                                    COMPRAR MAIS PRODUTOS
                                </ProductSubtotalLabel>
                            </ProductAddMoreButton>
                        </ProductAddMoreButtonContainer>
                        <SuggestionTitleText>
                            Aproveite e adicione à sua sacola : 
                        </SuggestionTitleText>
                        <AddMoreItemsToBagContainer
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            pagingEnabled
                        >
                            <AddMoreItemsToBagContent>
                                
                                <CarouselSuggestionCardExtraInformation>
                                    <CarouselSuggestionCard>
                                        <ProductSuggestionItemContainer onPress={ () => {} } rippleColor="#ddd">
                                            <Item>
                                                <ProductImageSuggestionCard source={{
                                                        uri : 'https://p.kindpng.com/picc/s/190-1902655_grey-shoes-that-look-futuristic-nike-moon-boots.png'
                                                    }} 
                                                />
                                                <ProductLegend maxFontSizeMultiplier={2} numberOfLines={2}>
                                                    SmartPhone Motorola G8 Play  kljdsalkfj sdkjflak jfdklajf
                                                </ProductLegend>
                                                <ProductAccuracy>
                                                    <Feather name="anchor" size={12} color={colors.text}/>
                                                    <Feather name="anchor" size={12} color={colors.text}/>
                                                    <Feather name="anchor" size={12} color={colors.text}/>
                                                    <Feather name="anchor" size={12} color={colors.text}/>
                                                    <Feather name="anchor" size={12} color={colors.text}/>
                                                </ProductAccuracy>
                                                <ProductPrice>
                                                    R$ 200,00
                                                </ProductPrice>
                                                <ProductPricePeace>
                                                    10x de R$ 99,90
                                                </ProductPricePeace>

                                                <ProductStarComponent rippleColor="transparent" onPress={() => {}}>
                                                    <Feather name="star" size={20} color={colors.text}/>
                                                </ProductStarComponent>
                                                <ProductCircle/>
                                                <ProductCircleTop/>
                                            </Item>
                                        </ProductSuggestionItemContainer>
                                    </CarouselSuggestionCard>
                                    
                                    <AddSuggestionToBagButton>
                                        <AddSuggestionToBagContent>
                                            <Feather name="shopping-bag" size={20} color={colors.text}/>

                                            <AddSuggestionToBagLabel>
                                                ADICIONAR
                                            </AddSuggestionToBagLabel>
                                        </AddSuggestionToBagContent>
                                    </AddSuggestionToBagButton>
                                            
                                </CarouselSuggestionCardExtraInformation>


                                <CarouselSuggestionCardExtraInformation>
                                    <CarouselSuggestionCard>
                                        <ProductSuggestionItemContainer onPress={ () => {} } rippleColor="#ddd">
                                            <Item>
                                                <ProductImageSuggestionCard source={{
                                                        uri : 'https://p.kindpng.com/picc/s/91-910946_jordan-jumpman-hustle-sneakers-hd-png-download.png'
                                                    }} 
                                                />
                                                <ProductLegend maxFontSizeMultiplier={2} numberOfLines={2}>
                                                    SmartPhone Motorola G8 Play  kljdsalkfj sdkjflak jfdklajf
                                                </ProductLegend>
                                                <ProductAccuracy>
                                                    <Feather name="anchor" size={12} color={colors.text}/>
                                                    <Feather name="anchor" size={12} color={colors.text}/>
                                                    <Feather name="anchor" size={12} color={colors.text}/>
                                                    <Feather name="anchor" size={12} color={colors.text}/>
                                                    <Feather name="anchor" size={12} color={colors.text}/>
                                                </ProductAccuracy>
                                                <ProductPrice>
                                                    R$ 200,00
                                                </ProductPrice>
                                                <ProductPricePeace>
                                                    10x de R$ 99,90
                                                </ProductPricePeace>

                                                <ProductStarComponent rippleColor="transparent" onPress={() => {}}>
                                                    <Feather name="star" size={20} color={colors.text}/>
                                                </ProductStarComponent>
                                                <ProductCircle/>
                                                <ProductCircleTop/>
                                            </Item>
                                        </ProductSuggestionItemContainer>
                                    </CarouselSuggestionCard>
                                    
                                    <AddSuggestionToBagButton>
                                        <AddSuggestionToBagContent>
                                            <Feather name="shopping-bag" size={20} color={colors.text}/>

                                            <AddSuggestionToBagLabel>
                                                ADICIONAR
                                            </AddSuggestionToBagLabel>
                                        </AddSuggestionToBagContent>
                                    </AddSuggestionToBagButton>
                                            
                                </CarouselSuggestionCardExtraInformation>


                                <CarouselSuggestionCardExtraInformation>
                                    <CarouselSuggestionCard>
                                        <ProductSuggestionItemContainer onPress={ () => {} } rippleColor="#ddd">
                                            <Item>
                                                <ProductImageSuggestionCard source={{
                                                        uri : 'https://p.kindpng.com/picc/s/192-1927941_transparent-charles-barkley-png-sneakers-png-download.png'
                                                    }} 
                                                />
                                                <ProductLegend maxFontSizeMultiplier={2} numberOfLines={2}>
                                                    SmartPhone Motorola G8 Play  kljdsalkfj sdkjflak jfdklajf
                                                </ProductLegend>
                                                <ProductAccuracy>
                                                    <Feather name="anchor" size={12} color={colors.text}/>
                                                    <Feather name="anchor" size={12} color={colors.text}/>
                                                    <Feather name="anchor" size={12} color={colors.text}/>
                                                    <Feather name="anchor" size={12} color={colors.text}/>
                                                    <Feather name="anchor" size={12} color={colors.text}/>
                                                </ProductAccuracy>
                                                <ProductPrice>
                                                    R$ 200,00
                                                </ProductPrice>
                                                <ProductPricePeace>
                                                    10x de R$ 99,90
                                                </ProductPricePeace>

                                                <ProductStarComponent rippleColor="transparent" onPress={() => {}}>
                                                    <Feather name="star" size={20} color={colors.text}/>
                                                </ProductStarComponent>
                                                <ProductCircle/>
                                                <ProductCircleTop/>
                                            </Item>
                                        </ProductSuggestionItemContainer>
                                    </CarouselSuggestionCard>
                                    
                                    <AddSuggestionToBagButton>
                                        <AddSuggestionToBagContent>
                                            <Feather name="shopping-bag" size={20} color={colors.text}/>

                                            <AddSuggestionToBagLabel>
                                                ADICIONAR
                                            </AddSuggestionToBagLabel>
                                        </AddSuggestionToBagContent>
                                    </AddSuggestionToBagButton>
                                            
                                </CarouselSuggestionCardExtraInformation>

                            </AddMoreItemsToBagContent>
                        </AddMoreItemsToBagContainer>

                    </ContainerContent>
                </Container>
            :
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <WebView
                        source={{ 
                            uri: `http://localhost:3333/orders/payments`,
                            headers : {
                                authorization : '1'
                            }
                        }}
                        onNavigationStateChange={(state : State) => stateChange(state)}
                        startInLoadingState={true}
                        renderLoading={() => <ActivityIndicator></ActivityIndicator>}
                    />
                </View>
    );
}

export default Bag;