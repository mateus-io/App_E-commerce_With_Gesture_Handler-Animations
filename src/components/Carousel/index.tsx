import React, { 
    useState, 
    RefObject, 
    ForwardRefRenderFunction, 
    useRef,
    forwardRef,
    useImperativeHandle,
    useContext
} from 'react';



import { Dimensions, ScrollView, Animated } from 'react-native';

import {
    ContainerScroll,
    ContainerWrapper,
    ContainerVerticalScroll,
    ContentContainerVertical,
    ShowProductsImagesContainer,
    CarouselImages,
    CarouselImage,
    CarouselContainerFixed,
    ImageIntoCarousel,
    ShowInfoProductContainer,
    InfoProductStatusBar,
    InfoProductContainer,
    InfoProductTitle,
    InfoProductFeedbackText,
    InfoProductIconsContainer,
    InfoProductFeedbackContainer,
    InfoProductFeedbackTextBolder,
    InfoProductExtraInformation,
    InfoProductExtraText,
    InfoProductPriceContainer,
    InfoProductLineThroughText,
    InfoProductNormalText,
    InfoProductPriceMainText,
    PurchaseProductButton,
    InfoProductPurchaseText,
    PurchaseButtonContent,
    AddBagProductButton,
    InfoProductAddBagText,
    ReceiveWithoutFreteButton,
    ShowMatchProducts,
    CarouselSuggestionCard,
    ProductItemContainer,
    Item,
    ProductImage,
    ProductLegend,
    ProductAccuracy,
    ProductPrice,
    ProductPricePeace,
    ProductStarComponent,
    ProductCircle,
    ProductCircleTop,
    SuggestionTitleText
} from './style';

import { Feather } from '@expo/vector-icons';

import { ImperativeScrollViewHandles } from '../../components/ImperativeScrollView';

const DEVICE_WIDTH = Dimensions.get('window').width;

import { PanGestureHandler, State } from 'react-native-gesture-handler';

import ImagesWrapper from '../ImagesWrapper';

import { ThemeContext } from 'styled-components/native';

import api from '../../api/api';

import { getData } from '../../utils/useAsyncStorage';

type Product = {
    id : number;
    title : string;
    main_image_url : string;
    images_url : string;
    assessments : number;
    price : number;
    plots : string;
}

interface SpecProductProps {
    product : Product;
}

const Component1 : React.FC<SpecProductProps> = ({ product }) => {
    const scrollViewRef = useRef<ImperativeScrollViewHandles>(null);
    const scrollViewRefSuggestions = useRef<ImperativeScrollViewHandles>(null);
    const scrollViewRefLikedToo = useRef<ImperativeScrollViewHandles>(null);
    const [indexImage, setIndexImage] = useState(0);
    const [showCheckout, setShowCheckout] = useState(false);


    const { colors } = useContext(ThemeContext);
    const { state } = useContext(AppContext);

    let offset = 0;
    const translateX = new Animated.Value(0);

    const animateEvent = Animated.event(
        [
            {
                nativeEvent : {
                    translationX : translateX,
                }
            }
        ],
        { useNativeDriver : true },
    )
    function onHandlerStateChanged ( event : any) {
        if(event.nativeEvent.oldState === State.ACTIVE){
            const { translationX } = event.nativeEvent;
            offset += translationX;
            
            if(translationX > 0 && indexImage > 0 ) {
                setIndexImage(indexImage - 1);
                if(scrollViewRef.current){
                    scrollViewRef.current.scrollTo({
                        x : DEVICE_WIDTH * (indexImage - 1),
                        animated : true
                    });
                }
            }
            if(translationX < 0 && indexImage < 2 ){
                setIndexImage( indexImage + 1 );
                if(scrollViewRef.current){
                    scrollViewRef.current.scrollTo({
                        x : DEVICE_WIDTH * (indexImage + 1),
                        animated : true
                    });
                }
            }
            translateX.setOffset(offset);
            translateX.setValue(0);
        }
    }

    function onHandlerStateChangedScrollSuggestions ( event : any) {
        if(event.nativeEvent.oldState === State.ACTIVE){
            const { translationX } = event.nativeEvent;
            offset += translationX;
            
            if(translationX > 0 && indexImage > 0 ) {
                setIndexImage(indexImage - 1);
                if(scrollViewRefSuggestions.current){
                    scrollViewRefSuggestions.current.scrollTo({
                        x : DEVICE_WIDTH * (indexImage - 1),
                        animated : true
                    });
                }
            }
            if(translationX < 0 && indexImage < 2 ){
                setIndexImage( indexImage + 1 );
                if(scrollViewRefSuggestions.current){
                    scrollViewRefSuggestions.current.scrollTo({
                        x : DEVICE_WIDTH * (indexImage + 1),
                        animated : true
                    });
                }
            }
            translateX.setOffset(offset);
            translateX.setValue(0);
        }
    }

    function onHandlerStateChangedScrollLikedToo ( event : any) {
        if(event.nativeEvent.oldState === State.ACTIVE){
            const { translationX } = event.nativeEvent;
            offset += translationX;
            
            if(translationX > 0 && indexImage > 0 ) {
                setIndexImage(indexImage - 1);
                if(scrollViewRefLikedToo.current){
                    scrollViewRefLikedToo.current.scrollTo({
                        x : DEVICE_WIDTH * (indexImage - 1),
                        animated : true
                    });
                }
            }
            if(translationX < 0 && indexImage < 2 ){
                setIndexImage( indexImage + 1 );
                if(scrollViewRefLikedToo.current){
                    scrollViewRefLikedToo.current.scrollTo({
                        x : DEVICE_WIDTH * (indexImage + 1),
                        animated : true
                    });
                }
            }
            translateX.setOffset(offset);
            translateX.setValue(0);
        }
    }

    async function handleAddBag (id : number) {
        try {
            const token = await getData('token');
            
            const response = await api.post('/orders', {
                product_id : id
            }, {
                headers : {
                    Authorization : token
                }
            });
            state.setOrders([...state.orders, product]);
            console.log(response);
        } catch(e) {
            console.log(e);
        }
        
    }

    return(
        <ContainerVerticalScroll>
            <ContentContainerVertical>
                <ShowProductsImagesContainer>
                    <PanGestureHandler
                        onGestureEvent={animateEvent}
                        onHandlerStateChange={onHandlerStateChanged}
                    >
                        <CarouselImages>
                            <ImagesWrapper 
                                ref={scrollViewRef}
                            >
                                <CarouselContainerFixed>
                                    <CarouselImage>
                                        <ImageIntoCarousel
                                            source={ {uri : 'https://p.kindpng.com/picc/s/190-1902655_grey-shoes-that-look-futuristic-nike-moon-boots.png'} }
                                        />
                                    </CarouselImage>

                                    <CarouselImage>
                                        <ImageIntoCarousel
                                            source={ {uri : 'https://p.kindpng.com/picc/s/91-910946_jordan-jumpman-hustle-sneakers-hd-png-download.png'} }
                                        />
                                    </CarouselImage>

                                    <CarouselImage>
                                        <ImageIntoCarousel
                                            source={ {uri : 'https://p.kindpng.com/picc/s/192-1927941_transparent-charles-barkley-png-sneakers-png-download.png'} }
                                        />
                                    </CarouselImage>
                                </CarouselContainerFixed>
                            </ImagesWrapper>

                        </CarouselImages>
                    </PanGestureHandler>
                    
                </ShowProductsImagesContainer>

                <ShowInfoProductContainer>
                    <InfoProductContainer>
                        <InfoProductTitle>
                            {product.title}
                        </InfoProductTitle>
                        <InfoProductStatusBar>

                            <InfoProductFeedbackContainer>
                                {
                                
                                    product.assessments >= 1 ? <Feather name="anchor" size={20} color={colors.text}/> : <></>
                                }
                                {
                                    product.assessments >= 2 ? <Feather name="anchor" size={20} color={colors.text}/> : <></>
                                }
                                {
                                    product.assessments >= 3 ? <Feather name="anchor" size={20} color={colors.text}/> : <></>
                                }
                                {
                                    product.assessments >= 4 ? <Feather name="anchor" size={20} color={colors.text}/> : <></>
                                }
                                {
                                    product.assessments >= 5 ? <Feather name="anchor" size={20} color={colors.text}/> : <></>
                                }
                                <InfoProductFeedbackText>
                                    {`${product.assessments}`} (87)
                                </InfoProductFeedbackText>
                            </InfoProductFeedbackContainer>

                            <InfoProductIconsContainer>
                                <Feather name="share" size={25} color={colors.text}/>
                                <Feather name="star" size={25} color={colors.text}/>
                            </InfoProductIconsContainer>

                        </InfoProductStatusBar>

                        <InfoProductExtraInformation>
                            <InfoProductExtraText>
                                Vendido e entregue por
                                <InfoProductFeedbackTextBolder>
                                    AnchorShop
                                </InfoProductFeedbackTextBolder>
                            </InfoProductExtraText>
                            
                        </InfoProductExtraInformation>

                        <InfoProductPriceContainer>
                            <InfoProductLineThroughText>
                                R$ {`${product.price + 200}`}
                            </InfoProductLineThroughText>

                            <InfoProductNormalText>
                                R$ {`${product.price}`}
                            </InfoProductNormalText>

                            <InfoProductNormalText>
                                {`${product.plots}`} de R$ {`${
                                    Math.round(product.price * 1.0 / Number(product.plots.replace('x', '') )).toFixed(2).toString().replace('.', ',')
                                    }`} sem juros
                            </InfoProductNormalText>

                            <InfoProductPriceMainText>
                                R$ {`${product.price.toString().replace('.',',')}`} 
                                <InfoProductFeedbackTextBolder>
                                    à vista
                                </InfoProductFeedbackTextBolder>
                            </InfoProductPriceMainText>
                            
                            <PurchaseProductButton 
                                rippleColor="#999"
                                onPress={ () => {} }
                            >
                                <PurchaseButtonContent>
                                    <Feather name="shopping-bag" size={20} color={colors.background}/>

                                    <InfoProductPurchaseText>
                                        Comprar agora
                                    </InfoProductPurchaseText>
                                </PurchaseButtonContent>

                            </PurchaseProductButton>


                            <AddBagProductButton 
                                rippleColor="#999"
                                onPress={ () => handleAddBag(product.id)}
                            >
                                <PurchaseButtonContent>
                                    <Feather name="shopping-bag" size={20} color={colors.buy}/>

                                    <InfoProductAddBagText>
                                        Adicionar à sacola
                                    </InfoProductAddBagText>

                                </PurchaseButtonContent>
                            </AddBagProductButton>

                            <ReceiveWithoutFreteButton
                                rippleColor="#999"
                                onPress={ () => {} }
                            >

                                <InfoProductPurchaseText>
                                    Retirar na loja com frete grátis
                                </InfoProductPurchaseText>

                            </ReceiveWithoutFreteButton>

                        </InfoProductPriceContainer>

                    </InfoProductContainer>


                </ShowInfoProductContainer>

                <SuggestionTitleText>
                    Produtos similares
                </SuggestionTitleText>

                <ShowMatchProducts>
                    <PanGestureHandler
                        onGestureEvent={animateEvent}
                        onHandlerStateChange={onHandlerStateChangedScrollSuggestions}
                    >
                        <CarouselImages>
                            <ImagesWrapper 
                                ref={scrollViewRefSuggestions}
                            >
                                <CarouselContainerFixed>
                                    <CarouselSuggestionCard>
                                        <ProductItemContainer onPress={ () => {} } rippleColor="#ddd">
                                            <Item>
                                                <ProductImage source={{
                                                    uri : 'https://p.kindpng.com/picc/s/190-1902655_grey-shoes-that-look-futuristic-nike-moon-boots.png'
                                                }} />
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
                                        </ProductItemContainer>
                                    </CarouselSuggestionCard>

                                    <CarouselSuggestionCard>
                                        <ProductItemContainer onPress={ () => {} } rippleColor="#ddd">
                                            <Item>
                                                <ProductImage source={{
                                                    uri : 'https://p.kindpng.com/picc/s/91-910946_jordan-jumpman-hustle-sneakers-hd-png-download.png'
                                                }} />
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
                                        </ProductItemContainer>
                                    </CarouselSuggestionCard>

                                    <CarouselSuggestionCard>
                                        <ProductItemContainer onPress={ () => {} } rippleColor="#ddd">
                                            <Item>
                                                <ProductImage source={{
                                                    uri : 'https://p.kindpng.com/picc/s/192-1927941_transparent-charles-barkley-png-sneakers-png-download.png'
                                                }} />
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
                                        </ProductItemContainer>
                                    </CarouselSuggestionCard>
                                </CarouselContainerFixed>
                            </ImagesWrapper>

                        </CarouselImages>
                    </PanGestureHandler>
                </ShowMatchProducts>


                <SuggestionTitleText>
                    Quem viu esse produto, também viu 
                </SuggestionTitleText>

                <ShowMatchProducts>
                    <PanGestureHandler
                        onGestureEvent={animateEvent}
                        onHandlerStateChange={onHandlerStateChangedScrollLikedToo}
                    >
                        <CarouselImages>
                            <ImagesWrapper 
                                ref={scrollViewRefLikedToo}
                            >
                                <CarouselContainerFixed>
                                    <CarouselSuggestionCard>
                                        <ProductItemContainer onPress={ () => {} } rippleColor="#ddd">
                                            <Item>
                                                <ProductImage source={{
                                                    uri : 'https://p.kindpng.com/picc/s/190-1902655_grey-shoes-that-look-futuristic-nike-moon-boots.png'
                                                }} />
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
                                        </ProductItemContainer>
                                    </CarouselSuggestionCard>

                                    <CarouselSuggestionCard>
                                        <ProductItemContainer onPress={ () => {} } rippleColor="#ddd">
                                            <Item>
                                                <ProductImage source={{
                                                    uri : 'https://p.kindpng.com/picc/s/91-910946_jordan-jumpman-hustle-sneakers-hd-png-download.png'
                                                }} />
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
                                        </ProductItemContainer>
                                    </CarouselSuggestionCard>

                                    <CarouselSuggestionCard>
                                        <ProductItemContainer onPress={ () => {} } rippleColor="#ddd">
                                            <Item>
                                                <ProductImage source={{
                                                    uri : 'https://p.kindpng.com/picc/s/192-1927941_transparent-charles-barkley-png-sneakers-png-download.png'
                                                }} />
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
                                        </ProductItemContainer>
                                    </CarouselSuggestionCard>
                                </CarouselContainerFixed>
                            </ImagesWrapper>

                        </CarouselImages>
                    </PanGestureHandler>
                </ShowMatchProducts>

            </ContentContainerVertical>

        </ContainerVerticalScroll>
    );
}

import {
    SpecsContainer,
    SpecsTitleProp,
    SpecsValue,
    SpecsValueWithBorderTop,
    SpecsContainerScroll,
    SpecsContainerGeneral,
    SpecsOfferAddProductToBagOrPurchase,
    SpecsContainerFixed,
    SpecsOfferButtonAddToBag,
    SpecsOfferButtonPurchase,
    PurchaseText,
    AddProductBagText
} from './style';

const Component2 : React.FC<SpecProductProps> = ({ product }) => {
    return(
        <SpecsContainerGeneral>
            <SpecsContainerFixed>
                <SpecsContainerScroll>
                    <SpecsContainer>
                        <SpecsTitleProp>
                            Smartphone LG K40S 32GB Preto 4G Octa-core
                        </SpecsTitleProp>
                        <SpecsValue>
                            cod anchor.com 155566300
                        </SpecsValue>

                        <SpecsTitleProp>
                            Cor
                        </SpecsTitleProp>
                        <SpecsValue>
                            Preto
                        </SpecsValue>

                        <SpecsTitleProp>
                            Informações do produto
                        </SpecsTitleProp>
                        <SpecsValue>
                            Com o smartphone K40S da LG, você terá a tecnologia na palma da sua mão. Você poderá tirar fotos detalhadas, pois sua câmera dupla oferece resolução de 13MP + 5MP e conta com Inteligência Artificial, que identifica o que você vai fotografar e faz ajustes ideais para 8 cenários diferentes, como pessoas, pets e comida, para que você possa tirar as melhores fotos sem perder tempo. Além disso, suas selfies ficarão com máxima qualidade, pois ele possui uma câmera de 13MP e recursos como foto espelhada, flash frontal virtual, temporizador, foco e Cheese Shot. Para tornar sua experiência ainda melhor, conta com memória interna de 32GB e tem espaço para um cartão de memória Micro SD de até 2TB, dando mais liberdade para você armazenar o que for importante e necessário. Tem tecnologia 4G, processador Octa-Core 2.0GHz e memória RAM de 3GB, fazendo com que ele responda de maneira mais rápida aos seus comandos. Com sua tela de 6,1" HD+ FullVision Narrow Notch é possível ver vídeos e até mesmo assistir seus filmes e séries favoritas com todo o conforto e qualidade que você merece. Possui espaço para dual chip e está disponível na cor preta.
                        </SpecsValue>

                        <SpecsTitleProp>
                            Memória interna
                        </SpecsTitleProp>
                        <SpecsValue>
                            32GB (A memória disponível para uso do consumidor pode sofrer variações, conforme sistema operacional, aplicativos e/ou outros fatores)
                        </SpecsValue>

                        <SpecsTitleProp>
                            Memória RAM
                        </SpecsTitleProp>
                        <SpecsValue>
                            3GB
                        </SpecsValue>

                        <SpecsTitleProp>
                            Tamanho da tela
                        </SpecsTitleProp>
                        <SpecsValue>
                            6,1"
                        </SpecsValue>

                        <SpecsTitleProp>
                            Dimensões do produto
                        </SpecsTitleProp>
                        <SpecsValueWithBorderTop>
                            <SpecsValue>
                                Largura
                            </SpecsValue>
                            <SpecsValue>
                                7,39cm
                            </SpecsValue>
                        </SpecsValueWithBorderTop>

                        <SpecsValueWithBorderTop>
                            <SpecsValue>
                                Altura
                            </SpecsValue>
                            <SpecsValue>
                                15,63cm
                            </SpecsValue>
                        </SpecsValueWithBorderTop>

                        <SpecsValueWithBorderTop>
                            <SpecsValue>
                                Profundidade
                            </SpecsValue>
                            <SpecsValue>
                                0,86cm
                            </SpecsValue>
                        </SpecsValueWithBorderTop>
                        
                    </SpecsContainer>
                </SpecsContainerScroll>
            </SpecsContainerFixed>
            <SpecsOfferAddProductToBagOrPurchase>
                <SpecsOfferButtonAddToBag>
                    <AddProductBagText>
                        ADICIONAR À SACOLA
                    </AddProductBagText>
                </SpecsOfferButtonAddToBag>
                <SpecsOfferButtonPurchase>
                    <PurchaseText>
                        COMPRAR AGORA
                    </PurchaseText>
                </SpecsOfferButtonPurchase>
            </SpecsOfferAddProductToBagOrPurchase>
        </SpecsContainerGeneral>
    );
}

import {
    FeedbacksContainer,
    FeedbacksContainerFixed,
    FeedbacksContainerScroll,
    WriteNewFeedbackContainer,
    WriteNewFeedbackButton,
    WriteNewFeedBackText,
    FeedbackContentContainer,
    MainFeedbackContainer,
    ShowFeedbacksIconsContainer,
    QuantFeedbacksText,
    ShowFeedbacksIconsRow,
    MainFeedbackTextContainer,
    MainFeedbackText,
    QualityBarContainer,
    QualityLineContainer,
    QualityText,
    BarsContainer,
    FiltersContainer,
    FiltersContent,
    FiltersText,
    BehindModalContainer,
    ModalContainerContent,
    ModalItemContainer,
    ModalMainText,
    ModalItem,
    ModalSecondaryText,
    ModalItemRow,
    CommentsContainer,
    CommentsItemContainer,
    CommentsText,
    CommentsMainPhrase,
    CommentsPositiveFeedback,
    CommentsNegativeFeedback,
    CommentsDate
} from './style';

import { ProgressBar, Colors } from 'react-native-paper';

import { Modal } from 'react-native';

const Component3 : React.FC<SpecProductProps> = ({ product }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const { colors } = useContext(ThemeContext); 
    return(
        <FeedbacksContainer>
            <FeedbacksContainerFixed>
                <Modal
                    visible={modalOpen}
                    transparent={true}
                >
                    <BehindModalContainer
                        onPress={ () => setModalOpen(false) }
                        rippleColor="transparent"
                    >
                        <ModalContainerContent>
                            <ModalItemContainer>
                                <ModalMainText>
                                    Ordenar por
                                </ModalMainText>
                                <ModalItem
                                    onPress={ () => {} }
                                    rippleColor="#ccc"
                                >
                                    <ModalItemRow>
                                        <Feather name="check-circle" size={16} color={colors.otherButtons}/>
                                        <ModalSecondaryText>
                                            Relevância
                                        </ModalSecondaryText>
                                    </ModalItemRow>
                                </ModalItem>
                                <ModalItem
                                    onPress={ () => {} }
                                    rippleColor="#ccc"
                                >
                                    <ModalItemRow>
                                        <Feather name="circle" size={16} color={colors.labelButton}/>
                                        <ModalSecondaryText>
                                            Mais úteis
                                        </ModalSecondaryText>
                                    </ModalItemRow>
                                </ModalItem>

                                <ModalItem
                                    onPress={ () => {} }
                                    rippleColor="#ccc"
                                >
                                    <ModalItemRow>
                                        <Feather name="circle" size={16} color={colors.labelButton}/>
                                        <ModalSecondaryText>
                                            Mais recentes
                                        </ModalSecondaryText>
                                    </ModalItemRow>
                                </ModalItem>
                                <ModalItem
                                    onPress={ () => {} }
                                    rippleColor="#ccc"
                                >
                                    <ModalItemRow>
                                        <Feather name="circle" size={16} color={colors.labelButton}/>
                                        <ModalSecondaryText>
                                            Melhores avaliações
                                        </ModalSecondaryText>
                                    </ModalItemRow>
                                </ModalItem>

                                <ModalItem 
                                    onPress={ () => {} }
                                    rippleColor="#ccc"
                                >
                                    <ModalItemRow>
                                        <Feather name="circle" size={16} color={colors.labelButton}/>
                                        <ModalSecondaryText>
                                            Piores avaliações
                                        </ModalSecondaryText>
                                    </ModalItemRow>
                                </ModalItem>
                            </ModalItemContainer>
                        </ModalContainerContent>
                    </BehindModalContainer>
                </Modal>

                <FeedbacksContainerScroll>

                    <FeedbackContentContainer>
                        <MainFeedbackContainer>
                            <MainFeedbackTextContainer>
                                <MainFeedbackText>
                                    3,7
                                </MainFeedbackText>
                            </MainFeedbackTextContainer>
                            <ShowFeedbacksIconsContainer>
                                <ShowFeedbacksIconsRow>
                                    <Feather name="anchor" size={30} color={colors.text}/>
                                    <Feather name="anchor" size={30} color={colors.text}/>
                                    <Feather name="anchor" size={30} color={colors.text}/>
                                    <Feather name="anchor" size={30} color={colors.text}/>
                                    <Feather name="anchor" size={30} color={colors.text}/>
                                </ShowFeedbacksIconsRow>
                                <QuantFeedbacksText>
                                    87 avaliações
                                </QuantFeedbacksText>
                            </ShowFeedbacksIconsContainer>
                        </MainFeedbackContainer>

                        <QualityBarContainer>
                            <QualityLineContainer>
                                <QualityText>
                                    Qualidade geral
                                </QualityText>
                                <BarsContainer>
                                    <ProgressBar progress={0.7} color={Colors.blue700} />
                                </BarsContainer>
                                <QualityText>
                                    3,9
                                </QualityText>
                            </QualityLineContainer>

                            <QualityLineContainer>
                                <QualityText>
                                    Custo-benefício
                                </QualityText>

                                <BarsContainer>
                                    <ProgressBar progress={0.5} color={Colors.blue700} />
                                </BarsContainer>

                                <QualityText>
                                    3,8
                                </QualityText>
                            </QualityLineContainer>
                        </QualityBarContainer>
                        
                        <FiltersContainer  
                            onPress={ () => setModalOpen(true) }
                            rippleColor="#999"
                        >
                            <FiltersContent>
                                <Feather name="align-left" size={20} color={colors.labelButton}/>
                                <FiltersText>
                                    Ordenar por : Relevância
                                </FiltersText>
                            </FiltersContent>
                        </FiltersContainer>

                        <CommentsContainer>
                            <CommentsItemContainer>
                                <ShowFeedbacksIconsRow>
                                    <Feather name="anchor" size={25} color={colors.text}/>
                                    <Feather name="anchor" size={25} color={colors.text}/>
                                    <Feather name="anchor" size={25} color={colors.text}/>
                                    <Feather name="anchor" size={25} color={colors.text}/>
                                    <Feather name="anchor" size={25} color={colors.text}/>
                                </ShowFeedbacksIconsRow>
                                <CommentsText>
                                    Mateu Apolinário da silva
                                </CommentsText>
                                <CommentsMainPhrase>
                                    Gostei muito!
                                </CommentsMainPhrase>
                                <CommentsText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec mattis lectus. In hac habitasse platea dictumst. Sed eu ante et erat elementum gravida. Maecenas pulvinar, justo sed condimentum tristique, sem odio vestibulum ante, lobortis interdum felis nisl eget libero. Proin feugiat nibh bibendum nulla ultricies commodo. Vestibulum dictum tortor nisi, sit amet lacinia libero volutpat finibus. Donec eu augue pulvinar, finibus orci non, maximus elit. Nullam volutpat auctor elit, sed lacinia mauris hendrerit ut. Nullam in dictum quam. Quisque sagittis nibh eu odio mollis, vitae dictum diam tristique. Integer metus lectus, ornare id dignissim quis, iaculis nec elit.
                                </CommentsText>
                                <CommentsPositiveFeedback>
                                    Recomendo esse produto
                                </CommentsPositiveFeedback>

                                <CommentsDate>
                                    23/06/2020
                                </CommentsDate>

                            </CommentsItemContainer>

                            <CommentsItemContainer>
                                <ShowFeedbacksIconsRow>
                                    <Feather name="anchor" size={25} color={colors.text}/>
                                    <Feather name="anchor" size={25} color={colors.text}/>
                                    <Feather name="anchor" size={25} color={colors.text}/>
                                    <Feather name="anchor" size={25} color={colors.text}/>
                                    <Feather name="anchor" size={25} color={colors.text}/>
                                </ShowFeedbacksIconsRow>
                                <CommentsText>
                                    Mateus Apolinário da silva
                                </CommentsText>
                                <CommentsMainPhrase>
                                    Péssimo
                                </CommentsMainPhrase>
                                <CommentsText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec mattis lectus. In hac habitasse platea dictumst. Sed eu ante et erat elementum gravida. Maecenas pulvinar, justo sed condimentum tristique, sem odio vestibulum ante, lobortis interdum felis nisl eget libero. Proin feugiat nibh bibendum nulla ultricies commodo. Vestibulum dictum tortor nisi, sit amet lacinia libero volutpat finibus. Donec eu augue pulvinar, finibus orci non, maximus elit. Nullam volutpat auctor elit, sed lacinia mauris hendrerit ut. Nullam in dictum quam. Quisque sagittis nibh eu odio mollis, vitae dictum diam tristique. Integer metus lectus, ornare id dignissim quis, iaculis nec elit.
                                </CommentsText>
                                <CommentsNegativeFeedback>
                                    Não recomendo
                                </CommentsNegativeFeedback>
                                
                                <CommentsDate>
                                    21/06/2020
                                </CommentsDate>

                            </CommentsItemContainer>

                            <CommentsItemContainer>
                                <ShowFeedbacksIconsRow>
                                    <Feather name="anchor" size={25} color={colors.text}/>
                                    <Feather name="anchor" size={25} color={colors.text}/>
                                    <Feather name="anchor" size={25} color={colors.text}/>
                                    <Feather name="anchor" size={25} color={colors.text}/>
                                    <Feather name="anchor" size={25} color={colors.text}/>
                                </ShowFeedbacksIconsRow>
                                <CommentsText>
                                    Mateus Apolinário da silva
                                </CommentsText>
                                <CommentsMainPhrase>
                                    Péssimo
                                </CommentsMainPhrase>
                                <CommentsText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec mattis lectus. In hac habitasse platea dictumst. Sed eu ante et erat elementum gravida. Maecenas pulvinar, justo sed condimentum tristique, sem odio vestibulum ante, lobortis interdum felis nisl eget libero. Proin feugiat nibh bibendum nulla ultricies commodo. Vestibulum dictum tortor nisi, sit amet lacinia libero volutpat finibus. Donec eu augue pulvinar, finibus orci non, maximus elit. Nullam volutpat auctor elit, sed lacinia mauris hendrerit ut. Nullam in dictum quam. Quisque sagittis nibh eu odio mollis, vitae dictum diam tristique. Integer metus lectus, ornare id dignissim quis, iaculis nec elit.
                                </CommentsText>
                                <CommentsNegativeFeedback>
                                    Não recomendo
                                </CommentsNegativeFeedback>
                                
                                <CommentsDate>
                                    21/06/2020
                                </CommentsDate>

                            </CommentsItemContainer>


                        </CommentsContainer>


                    </FeedbackContentContainer>

                </FeedbacksContainerScroll>
            </FeedbacksContainerFixed>

            <WriteNewFeedbackContainer>
                <WriteNewFeedbackButton>
                    <WriteNewFeedBackText>
                        ESCREVER AVALIAÇÃO
                    </WriteNewFeedBackText>
                </WriteNewFeedbackButton>
            </WriteNewFeedbackContainer>
        </FeedbacksContainer>
    );
}

import {
    PurchaseTogetherContainer,
    PurchaseTogetherContainerFixed,
    PurchaseTogetherContainerScroll,
    PurchaseTogetherContentContainer,
    PurchaseButtonContainer,
    PurchaseButton,
    PurchaseButtonText,
    PurchaseTogetherItem,
    PurchaseTogetherMainText,
    PurchaseTogetherItemImage,
    PurchaseTogetherProductInfo,
    PurchaseTogetherProductTitle,
    PurchaseTogetherProductIconsRowContainer,
    PurchaseTogetherProductPriceText,
    PurchaseTogetherProductLabelAvista,
    PurchaseTogetherProductPriceTextPeaces,
    PurchaseTogetherRowText,
    PurchaseTogetherCheckContainer,
    PurchaseTogetherStarProductContainer
} from './style';

import { Checkbox } from 'react-native-paper';
import { color } from 'react-native-reanimated';
import { AppContext } from '../../context';

const Component4 : React.FC<SpecProductProps> = ({ product }) => {
    const { colors } = useContext(ThemeContext);
    return (
        <PurchaseTogetherContainer>
            <PurchaseTogetherContainerFixed>
                <PurchaseTogetherContainerScroll>
                    <PurchaseTogetherContentContainer>
                        <PurchaseTogetherItem>
                            
                            <PurchaseTogetherItemImage
                                source={{
                                    uri : 'https://p.kindpng.com/picc/s/91-910946_jordan-jumpman-hustle-sneakers-hd-png-download.png'
                                }}
                            />

                            <PurchaseTogetherProductInfo>
                                <PurchaseTogetherProductTitle
                                    numberOfLines={2}
                                >
                                    Smartphone Samsung Galaxy A20s 32GB Preto
                                </PurchaseTogetherProductTitle>
                                <PurchaseTogetherProductIconsRowContainer>

                                    <Feather name="anchor" size={12} color={colors.text}/>
                                    <Feather name="anchor" size={12} color={colors.text}/>
                                    <Feather name="anchor" size={12} color={colors.text}/>
                                    <Feather name="anchor" size={12} color={colors.text}/>
                                    <Feather name="anchor" size={12} color={colors.text}/>

                                </PurchaseTogetherProductIconsRowContainer>
                                <PurchaseTogetherRowText>
                                    <PurchaseTogetherProductPriceText>
                                        R$ 1.208,07 
                                    </PurchaseTogetherProductPriceText>
                                    <PurchaseTogetherProductLabelAvista>
                                        à vista
                                    </PurchaseTogetherProductLabelAvista>
                                </PurchaseTogetherRowText>
                                
                                <PurchaseTogetherProductPriceTextPeaces>
                                    10x de R$ 129,90
                                </PurchaseTogetherProductPriceTextPeaces>

                            </PurchaseTogetherProductInfo>
                            <PurchaseTogetherCheckContainer>
                                <Checkbox
                                    status='checked'
                                />
                            </PurchaseTogetherCheckContainer>
                            
                            <PurchaseTogetherStarProductContainer>
                                <Feather name="star" size={20} color={colors.text}/>
                            </PurchaseTogetherStarProductContainer>

                        </PurchaseTogetherItem>

                        <PurchaseTogetherMainText>
                            Incremente seu produto com as nossas sugestões abaixo : 
                        </PurchaseTogetherMainText>


                        <PurchaseTogetherItem>
                            
                            <PurchaseTogetherItemImage
                                source={{
                                    uri : 'https://p.kindpng.com/picc/s/91-910946_jordan-jumpman-hustle-sneakers-hd-png-download.png'
                                }}
                            />

                            <PurchaseTogetherProductInfo>
                                <PurchaseTogetherProductTitle
                                    numberOfLines={2}
                                >
                                    Smartphone Samsung Galaxy A20s 32GB Preto
                                </PurchaseTogetherProductTitle>
                                <PurchaseTogetherProductIconsRowContainer>

                                    <Feather name="anchor" size={12} color={colors.text}/>
                                    <Feather name="anchor" size={12} color={colors.text}/>
                                    <Feather name="anchor" size={12} color={colors.text}/>
                                    <Feather name="anchor" size={12} color={colors.text}/>
                                    <Feather name="anchor" size={12} color={colors.text}/>

                                </PurchaseTogetherProductIconsRowContainer>
                                <PurchaseTogetherRowText>
                                    <PurchaseTogetherProductPriceText>
                                        R$ 1.208,07 
                                    </PurchaseTogetherProductPriceText>
                                    <PurchaseTogetherProductLabelAvista>
                                        à vista
                                    </PurchaseTogetherProductLabelAvista>
                                </PurchaseTogetherRowText>
                                
                                <PurchaseTogetherProductPriceTextPeaces>
                                    10x de R$ 129,90
                                </PurchaseTogetherProductPriceTextPeaces>

                            </PurchaseTogetherProductInfo>
                            <PurchaseTogetherCheckContainer>
                                <Checkbox
                                    status='checked'
                                />
                            </PurchaseTogetherCheckContainer>
                            
                            <PurchaseTogetherStarProductContainer>
                                <Feather name="star" size={20} color={colors.text}/>
                            </PurchaseTogetherStarProductContainer>

                        </PurchaseTogetherItem>

                        <PurchaseTogetherItem>
                            
                            <PurchaseTogetherItemImage
                                source={{
                                    uri : 'https://p.kindpng.com/picc/s/91-910946_jordan-jumpman-hustle-sneakers-hd-png-download.png'
                                }}
                            />

                            <PurchaseTogetherProductInfo>
                                <PurchaseTogetherProductTitle
                                    numberOfLines={2}
                                >
                                    Smartphone Samsung Galaxy A20s 32GB Preto
                                </PurchaseTogetherProductTitle>
                                <PurchaseTogetherProductIconsRowContainer>

                                    <Feather name="anchor" size={12} color={colors.text}/>
                                    <Feather name="anchor" size={12} color={colors.text}/>
                                    <Feather name="anchor" size={12} color={colors.text}/>
                                    <Feather name="anchor" size={12} color={colors.text}/>
                                    <Feather name="anchor" size={12} color={colors.text}/>

                                </PurchaseTogetherProductIconsRowContainer>
                                <PurchaseTogetherRowText>
                                    <PurchaseTogetherProductPriceText>
                                        R$ 1.208,07 
                                    </PurchaseTogetherProductPriceText>
                                    <PurchaseTogetherProductLabelAvista>
                                        à vista
                                    </PurchaseTogetherProductLabelAvista>
                                </PurchaseTogetherRowText>
                                
                                <PurchaseTogetherProductPriceTextPeaces>
                                    10x de R$ 129,90
                                </PurchaseTogetherProductPriceTextPeaces>

                            </PurchaseTogetherProductInfo>
                            <PurchaseTogetherCheckContainer>
                                <Checkbox
                                    status='checked'
                                />
                            </PurchaseTogetherCheckContainer>
                            
                            <PurchaseTogetherStarProductContainer>
                                <Feather name="star" size={20} color={colors.text}/>
                            </PurchaseTogetherStarProductContainer>

                        </PurchaseTogetherItem>

                        <PurchaseTogetherItem>
                            
                            <PurchaseTogetherItemImage
                                source={{
                                    uri : 'https://p.kindpng.com/picc/s/91-910946_jordan-jumpman-hustle-sneakers-hd-png-download.png'
                                }}
                            />

                            <PurchaseTogetherProductInfo>
                                <PurchaseTogetherProductTitle
                                    numberOfLines={2}
                                >
                                    Smartphone Samsung Galaxy A20s 32GB Preto
                                </PurchaseTogetherProductTitle>
                                <PurchaseTogetherProductIconsRowContainer>

                                    <Feather name="anchor" size={12} color={colors.text}/>
                                    <Feather name="anchor" size={12} color={colors.text}/>
                                    <Feather name="anchor" size={12} color={colors.text}/>
                                    <Feather name="anchor" size={12} color={colors.text}/>
                                    <Feather name="anchor" size={12} color={colors.text}/>

                                </PurchaseTogetherProductIconsRowContainer>
                                <PurchaseTogetherRowText>
                                    <PurchaseTogetherProductPriceText>
                                        R$ 1.208,07 
                                    </PurchaseTogetherProductPriceText>
                                    <PurchaseTogetherProductLabelAvista>
                                        à vista
                                    </PurchaseTogetherProductLabelAvista>
                                </PurchaseTogetherRowText>
                                
                                <PurchaseTogetherProductPriceTextPeaces>
                                    10x de R$ 129,90
                                </PurchaseTogetherProductPriceTextPeaces>

                            </PurchaseTogetherProductInfo>
                            <PurchaseTogetherCheckContainer>
                                <Checkbox
                                    status='checked'
                                />
                            </PurchaseTogetherCheckContainer>
                            
                            <PurchaseTogetherStarProductContainer>
                                <Feather name="star" size={20} color={colors.text}/>
                            </PurchaseTogetherStarProductContainer>

                        </PurchaseTogetherItem>

                    </PurchaseTogetherContentContainer>
                </PurchaseTogetherContainerScroll>
            </PurchaseTogetherContainerFixed>
            
            <PurchaseButtonContainer>
                <PurchaseButton>
                    <PurchaseButtonText>
                        COMPRAR
                    </PurchaseButtonText>
                </PurchaseButton>
            </PurchaseButtonContainer>

        </PurchaseTogetherContainer>
    );
}

const vector = [Component1,Component2,Component3, Component4];



interface CarouselProps {
    setPositionX(positionX : number) : void;
    setIndexView(indexView : number) : void;
    setOffsetX(offsetX : number) : void;
    offsetX : number;
    indexView : number;
    imperativeScrollView : RefObject<ImperativeScrollViewHandles>
    product : Product;
}

const Carousel :    ForwardRefRenderFunction<
                    ImperativeScrollViewHandles,
                    CarouselProps> = 
( { 
    setPositionX, 
    imperativeScrollView, 
    indexView, 
    setIndexView, 
    offsetX, 
    setOffsetX,
    product
} , ref ) => {
    const scrollViewRef = useRef<ScrollView>(null);

    


    useImperativeHandle(ref, () => ({
        scrollToStart: options => {
            if (scrollViewRef.current) {
                scrollViewRef.current.scrollTo({
                    x: 0,
                    y: 0,
                    animated: options ? options.animated : true,
                });
            }
        },
        scrollToEnd: options => {
            if (scrollViewRef.current) {
                scrollViewRef.current.scrollToEnd(options);
            }
        },
        scrollTo: options => {
            if (scrollViewRef.current) {
                scrollViewRef.current.scrollTo(options);
            }
        },
    }));

    return (
        <ContainerScroll onScroll={ (event) => {
            
            if(event.nativeEvent.contentOffset.x % DEVICE_WIDTH === 0){
                
                if( Number(event.nativeEvent.contentOffset.x) < Number(offsetX) && indexView - 1 >= 0){
                    
                    setPositionX( (indexView - 1) * 150 );
                    setIndexView( indexView - 1 );
                }

                if( Number(event.nativeEvent.contentOffset.x) > Number(offsetX) && indexView + 1 <= 3 ){
                    
                    setPositionX( (indexView + 1) * 150 );
                    setIndexView( indexView + 1 );
                }
                
                setOffsetX(event.nativeEvent.contentOffset.x);
                
                if(event.nativeEvent.contentOffset.x === (DEVICE_WIDTH * 1) ){
                    setTimeout( () => {
                        if(imperativeScrollView.current){
                            imperativeScrollView.current.scrollTo({x: 0, animated : true});
                        }
                    }, 200 );
                }
                if(event.nativeEvent.contentOffset.x === (DEVICE_WIDTH * 2)){
                    setTimeout( () => {
                        if(imperativeScrollView.current){
                            imperativeScrollView.current.scrollTo({x: 300, animated : true});
                        }
                    }, 200 );
                }
            }
                
        } } 
            horizontal 
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            ref={scrollViewRef}
        >
            <ContainerWrapper>
            {
                vector.map( Component => (
                    <Component 
                        key={Component.toString()}
                        product={product}
                    />
                ) )
            }
            </ContainerWrapper>
                
        </ContainerScroll>
    );
}

export default forwardRef(Carousel);