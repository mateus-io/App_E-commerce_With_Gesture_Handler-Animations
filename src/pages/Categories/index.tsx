import React, { useState, useEffect } from 'react';

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
    ProductCircleTop,
    CategoriesScrollView,
    CategoriesContent,
    CategorieItem,
    CategorieImage,
    CategorieLabel,
    SliderScrollView,
    SliderWrapper,
    SliderItem,
    SliderItemContainer,
    Loading
} from './style';

import { Feather } from '@expo/vector-icons';


import Header from '../../components/Header';

import { FlatList } from 'react-native';

type Props = {
    navigation : any;
}
type Product = {
    name : string;
    id : number;
}
const contentFake = [
{
    name : 'samsung',
    id : 1
},
{
    name : 'test1',
    id : 2
},
{
    name : 'test2',
    id : 3
},
{
    name : 'test3',
    id : 4
}
];

const contentFake1 = [
    {
        name : 'samsung',
        id : 4
    },
    {
        name : 'test5',
        id : 5
    },
    {
        name : 'test6',
        id : 6
    },
    {
        name : 'test7',
        id : 7
    }
    ];

const dbFake = [contentFake, contentFake1];

const Categories = ( { navigation }: Props ) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [total, setTotal] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const [refreshing, setRefreshing] = useState<boolean>(false);
    useEffect( () => {
        loadPage(pageNumber);
    }, [] );

    function loadPage (pgNumber = pageNumber, shouldRefresh = false) {
        if(total && pageNumber > total) return;

        setLoading(true);
        const data = dbFake[1];
        setTotal(2);
        setProducts( shouldRefresh ? data : [...products,  ...dbFake[pgNumber] ]);
        setPageNumber( pageNumber + 1 );

        setLoading(false);
    }

    function refreshList() {
        setRefreshing(true);
        loadPage(1, true);
        setRefreshing(false);
    }

    return (
        <Container>
            <Header navigation={ navigation.toggleDrawer }/>
            <SearchInputContainer>
                <SearchInput mode='flat' underlineColor="transparent" autoCorrect={false} placeholder="Search" />
                <SearchButtonRipple rippleColor="#afc" onPress={() => {}}>
                    <Feather name="search" size={25} color="#210124"/>
                </SearchButtonRipple>
            </SearchInputContainer>

            <FlatList
                data={products}
                keyExtractor={product => String(product.id)}
                onEndReached={ () => loadPage() }
                onEndReachedThreshold={0.1}
                onRefresh={refreshList}
                refreshing={refreshing}
                ListFooterComponent={loading ? <Loading/> : <></> }
                renderItem={
                    ({ item }) => (
                        <ProductContainer>
                            <ProductItemContainer onPress={ () => {} } rippleColor="transparent">
                                <Item>
                                    <ProductImage source={{
                                        uri : 'https://images.unsplash.com/photo-1569605803663-e9337d901ff9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80'
                                    }} />
                                    <ProductLegend maxFontSizeMultiplier={2} numberOfLines={2}>
                                        {item.name}
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
                    )
                }
            />

            <ContainerProdutos
                showsVerticalScrollIndicator={false}
            >
                <CategoriesScrollView
                    showsHorizontalScrollIndicator={false}
                    horizontal
                >
                    <CategoriesContent>
                        <CategorieItem>
                            <CategorieImage
                                source={{
                                    uri : 'https://p.kindpng.com/picc/s/192-1927941_transparent-charles-barkley-png-sneakers-png-download.png'
                                }}
                            />
                            <CategorieLabel>
                                Casa
                            </CategorieLabel>
                        </CategorieItem>

                        <CategorieItem>
                            <CategorieImage
                                source={{
                                    uri : 'https://p.kindpng.com/picc/s/192-1927941_transparent-charles-barkley-png-sneakers-png-download.png'
                                }}
                            />
                            <CategorieLabel>
                                Mercado
                            </CategorieLabel>
                        </CategorieItem>

                        <CategorieItem>
                            <CategorieImage
                                source={{
                                    uri : 'https://p.kindpng.com/picc/s/192-1927941_transparent-charles-barkley-png-sneakers-png-download.png'
                                }}
                            />
                            <CategorieLabel>
                                Automotivo
                            </CategorieLabel>
                        </CategorieItem>

                        <CategorieItem>
                            <CategorieImage
                                source={{
                                    uri : 'https://p.kindpng.com/picc/s/192-1927941_transparent-charles-barkley-png-sneakers-png-download.png'
                                }}
                            />
                            <CategorieLabel>
                                Brinquedos
                            </CategorieLabel>
                        </CategorieItem>

                        <CategorieItem>
                            <CategorieImage
                                source={{
                                    uri : 'https://p.kindpng.com/picc/s/192-1927941_transparent-charles-barkley-png-sneakers-png-download.png'
                                }}
                            />
                            <CategorieLabel>
                                Livros
                            </CategorieLabel>
                        </CategorieItem>

                        <CategorieItem>
                            <CategorieImage
                                source={{
                                    uri : 'https://p.kindpng.com/picc/s/192-1927941_transparent-charles-barkley-png-sneakers-png-download.png'
                                }}
                            />
                            <CategorieLabel>
                                Papelaria
                            </CategorieLabel>
                        </CategorieItem>

                        <CategorieItem>
                            <CategorieImage
                                source={{
                                    uri : 'https://p.kindpng.com/picc/s/192-1927941_transparent-charles-barkley-png-sneakers-png-download.png'
                                }}
                            />
                            <CategorieLabel>
                                Pet Shop
                            </CategorieLabel>
                        </CategorieItem>
                    </CategoriesContent>
                </CategoriesScrollView>

                <SliderScrollView
                    horizontal 
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                >

                    <SliderWrapper>
                        <SliderItemContainer>
                            <SliderItem
                                resizeMode="contain"
                                source={{
                                    uri : 'https://p.kindpng.com/picc/s/192-1927941_transparent-charles-barkley-png-sneakers-png-download.png'
                                }}
                            />
                        </SliderItemContainer>
                        
                        <SliderItemContainer>
                            <SliderItem
                                resizeMode="contain"
                                source={{
                                    uri : 'https://p.kindpng.com/picc/s/91-910946_jordan-jumpman-hustle-sneakers-hd-png-download.png'
                                }}
                            />
                        </SliderItemContainer>
                        <SliderItemContainer>
                            <SliderItem
                                resizeMode="contain"
                                source={{
                                    uri : 'https://p.kindpng.com/picc/s/190-1902655_grey-shoes-that-look-futuristic-nike-moon-boots.png'
                                }}
                            />
                        </SliderItemContainer>
                        
                    </SliderWrapper>
                    
                </SliderScrollView>

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