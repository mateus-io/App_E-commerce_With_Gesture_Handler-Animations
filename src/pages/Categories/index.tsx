import React from 'react';

import {
    SearchInput,
    Container,
    SearchInputContainer,
    SearchButtonRipple,
    ContainerProdutos,
    ProductContainer,
    ProductItemContainer,
    Item,
    ProductImage,
    ProductLegend,
    ProductAccuracy,
    ProductPrice,
    ProductPricePeace,
    ProductStarComponent,
    ProductCircle,
    ProductCircleTop
} from './style';

import { Feather } from '@expo/vector-icons';


import Header from '../../components/Header';

type Props = {
    navigation : any;
}
//
const Categories = ( { navigation }: Props ) => {
    return (
        <Container>
            <Header navigation={ navigation.toggleDrawer }/>
            <SearchInputContainer>
                <SearchInput mode='flat' underlineColor="transparent" autoCorrect={false} placeholder="Search" />
                <SearchButtonRipple rippleColor="#afc" onPress={() => {}}>
                    <Feather name="search" size={25} color="#210124"/>
                </SearchButtonRipple>
            </SearchInputContainer>

            <ContainerProdutos>
                <ProductContainer>
                    <ProductItemContainer onPress={ () => { navigation.navigate('ViewProduct')} } rippleColor="transparent">
                        <Item>
                            <ProductImage source={{
                                uri : 'https://images.unsplash.com/photo-1569605803663-e9337d901ff9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80'
                            }} />
                            <ProductLegend maxFontSizeMultiplier={2} numberOfLines={2}>
                                SmartPhone Motorola G8 Play  kljdsalkfj sdkjflak jfdklajf
                            </ProductLegend>
                            <ProductAccuracy>
                                <Feather name="anchor" size={12} color="black"/>
                                <Feather name="anchor" size={12} color="black"/>
                                <Feather name="anchor" size={12} color="black"/>
                                <Feather name="anchor" size={12} color="black"/>
                                <Feather name="anchor" size={12} color="black"/>
                            </ProductAccuracy>
                            <ProductPrice>
                                R$ 200,00
                            </ProductPrice>
                            <ProductPricePeace>
                                10x de R$ 99,90
                            </ProductPricePeace>

                            <ProductStarComponent rippleColor="transparent" onPress={() => {}}>
                                <Feather name="star" size={20} color="black"/>
                            </ProductStarComponent>
                            <ProductCircle/>
                            <ProductCircleTop/>
                        </Item>
                    </ProductItemContainer>
    
                    <ProductItemContainer onPress={ () => {} } rippleColor="transparent">
                        <Item>
                            <ProductImage source={{
                                uri : 'https://images.unsplash.com/photo-1569605803663-e9337d901ff9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80'
                            }} />
                            <ProductLegend maxFontSizeMultiplier={2} numberOfLines={2}>
                                SmartPhone Motorola G8 Play  kljdsalkfj sdkjflak jfdklajf
                            </ProductLegend>
                            <ProductAccuracy>
                                <Feather name="anchor" size={12} color="black"/>
                                <Feather name="anchor" size={12} color="black"/>
                                <Feather name="anchor" size={12} color="black"/>
                                <Feather name="anchor" size={12} color="black"/>
                                <Feather name="anchor" size={12} color="black"/>
                            </ProductAccuracy>
                            <ProductPrice>
                                R$ 200,00
                            </ProductPrice>
                            <ProductPricePeace>
                                10x de R$ 99,90
                            </ProductPricePeace>

                            <ProductStarComponent rippleColor="transparent" onPress={() => {}}>
                                <Feather name="star" size={20} color="black"/>
                            </ProductStarComponent>
                            <ProductCircle/>
                            <ProductCircleTop/>
                        </Item>
                    </ProductItemContainer>
                </ProductContainer>

                <ProductContainer>
                    <ProductItemContainer onPress={ () => {} } rippleColor="transparent">
                        <Item>
                            <ProductImage source={{
                                uri : 'https://images.unsplash.com/photo-1569605803663-e9337d901ff9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80'
                            }} />
                            <ProductLegend maxFontSizeMultiplier={2} numberOfLines={2}>
                                SmartPhone Motorola G8 Play  kljdsalkfj sdkjflak jfdklajf
                            </ProductLegend>
                            <ProductAccuracy>
                                <Feather name="anchor" size={12} color="black"/>
                                <Feather name="anchor" size={12} color="black"/>
                                <Feather name="anchor" size={12} color="black"/>
                                <Feather name="anchor" size={12} color="black"/>
                                <Feather name="anchor" size={12} color="black"/>
                            </ProductAccuracy>
                            <ProductPrice>
                                R$ 200,00
                            </ProductPrice>
                            <ProductPricePeace>
                                10x de R$ 99,90
                            </ProductPricePeace>

                            <ProductStarComponent rippleColor="transparent" onPress={() => {}}>
                                <Feather name="star" size={20} color="black"/>
                            </ProductStarComponent>
                            <ProductCircle/>
                            <ProductCircleTop/>
                        </Item>
                    </ProductItemContainer>
                </ProductContainer>


                <ProductContainer>
                    <ProductItemContainer onPress={ () => {} } rippleColor="transparent">
                        <Item>
                            <ProductImage source={{
                                uri : 'https://images.unsplash.com/photo-1569605803663-e9337d901ff9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80'
                            }} />
                            <ProductLegend maxFontSizeMultiplier={2} numberOfLines={2}>
                                SmartPhone Motorola G8 Play  kljdsalkfj sdkjflak jfdklajf
                            </ProductLegend>
                            <ProductAccuracy>
                                <Feather name="anchor" size={12} color="black"/>
                                <Feather name="anchor" size={12} color="black"/>
                                <Feather name="anchor" size={12} color="black"/>
                                <Feather name="anchor" size={12} color="black"/>
                                <Feather name="anchor" size={12} color="black"/>
                            </ProductAccuracy>
                            <ProductPrice>
                                R$ 200,00
                            </ProductPrice>
                            <ProductPricePeace>
                                10x de R$ 99,90
                            </ProductPricePeace>

                            <ProductStarComponent rippleColor="transparent" onPress={() => {}}>
                                <Feather name="star" size={20} color="black"/>
                            </ProductStarComponent>
                            <ProductCircle/>
                            <ProductCircleTop/>
                        </Item>
                    </ProductItemContainer>
                    <ProductItemContainer onPress={ () => {} } rippleColor="transparent">
                        <Item>
                            <ProductImage source={{
                                uri : 'https://images.unsplash.com/photo-1569605803663-e9337d901ff9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80'
                            }} />
                            <ProductLegend maxFontSizeMultiplier={2} numberOfLines={2}>
                                SmartPhone Motorola G8 Play  kljdsalkfj sdkjflak jfdklajf
                            </ProductLegend>
                            <ProductAccuracy>
                                <Feather name="anchor" size={12} color="black"/>
                                <Feather name="anchor" size={12} color="black"/>
                                <Feather name="anchor" size={12} color="black"/>
                                <Feather name="anchor" size={12} color="black"/>
                                <Feather name="anchor" size={12} color="black"/>
                            </ProductAccuracy>
                            <ProductPrice>
                                R$ 200,00
                            </ProductPrice>
                            <ProductPricePeace>
                                10x de R$ 99,90
                            </ProductPricePeace>

                            <ProductStarComponent rippleColor="transparent" onPress={() => {}}>
                                <Feather name="star" size={20} color="black"/>
                            </ProductStarComponent>
                            <ProductCircle/>
                            <ProductCircleTop/>
                        </Item>
                    </ProductItemContainer>
                </ProductContainer>

                <ProductContainer>
                    <ProductItemContainer onPress={ () => {} } rippleColor="transparent">
                        <Item>
                            <ProductImage source={{
                                uri : 'https://images.unsplash.com/photo-1569605803663-e9337d901ff9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80'
                            }} />
                            <ProductLegend maxFontSizeMultiplier={2} numberOfLines={2}>
                                SmartPhone Motorola G8 Play  kljdsalkfj sdkjflak jfdklajf
                            </ProductLegend>
                            <ProductAccuracy>
                                <Feather name="anchor" size={12} color="black"/>
                                <Feather name="anchor" size={12} color="black"/>
                                <Feather name="anchor" size={12} color="black"/>
                                <Feather name="anchor" size={12} color="black"/>
                                <Feather name="anchor" size={12} color="black"/>
                            </ProductAccuracy>
                            <ProductPrice>
                                R$ 200,00
                            </ProductPrice>
                            <ProductPricePeace>
                                10x de R$ 99,90
                            </ProductPricePeace>

                            <ProductStarComponent rippleColor="transparent" onPress={() => {}}>
                                <Feather name="star" size={20} color="black"/>
                            </ProductStarComponent>
                            <ProductCircle/>
                            <ProductCircleTop/>
                        </Item>
                    </ProductItemContainer>
                </ProductContainer>
            </ContainerProdutos>
        </Container>
    );
}

export default Categories;