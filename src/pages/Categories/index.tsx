import React, { useState, useEffect, useContext, memo } from 'react';

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

import { ThemeContext } from 'styled-components/native';
import { AppContext } from '../../context';

import Header from '../../components/Header';

import { FlatList } from 'react-native';

import api from '../../api/api';

type Props = {
    navigation : any;
}
type Product = {
    id : number;
    title : string;
    main_image_url : string;
    images_url : string;
    assessments : number;
    price : number;
    plots : string;
}


const ContentHeader : React.FC = () => {
    return (
        <ContainerProdutos
                
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
                
            </ContainerProdutos>
    );
}

interface ProductItemProps { 
    item : Product;
    navigate(route : string, item : Product) : void;
}

const ProductItem : React.FC<ProductItemProps> =  ({ item, navigate }) => {
    const { colors } = useContext(ThemeContext);
    return (
        <ProductContainer>
            <ProductItemContainer 
                onPress={ () => navigate('ViewProduct', item) } 
                rippleColor="transparent"
            >
                <Item>
                    <ProductImage source={{
                        uri : 'https://images.unsplash.com/photo-1569605803663-e9337d901ff9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80'
                    }} />
                    <ProductLegend maxFontSizeMultiplier={2} numberOfLines={2}>
                        {item.title}
                    </ProductLegend>
                    <ProductAccuracy>
                        {
                            
                            item.assessments >= 1 ? <Feather name="anchor" size={25} color={colors.text}/> : <></>
                        }
                        {
                            item.assessments >= 2 ? <Feather name="anchor" size={25} color={colors.text}/> : <></>
                        }
                        {
                            item.assessments >= 3 ? <Feather name="anchor" size={25} color={colors.text}/> : <></>
                        }
                        {
                            item.assessments >= 4 ? <Feather name="anchor" size={25} color={colors.text}/> : <></>
                        }
                        {
                            item.assessments >= 5 ? <Feather name="anchor" size={25} color={colors.text}/> : <></>
                        }
                    </ProductAccuracy>
                    <ProductPrice>
                        R$ {item.price}
                    </ProductPrice>
                    <ProductPricePeace>
                        {item.plots} sem juros
                    </ProductPricePeace>

                    <ProductStarComponent rippleColor="transparent" onPress={() => {}}>
                        <Feather name="star" size={26} color={colors.text}/>
                    </ProductStarComponent>
                    <ProductCircle/>
                    <ProductCircleTop/>
                </Item>
            </ProductItemContainer>
        </ProductContainer>
    );
};

const ProductItemMemo = memo(ProductItem);

const Categories = ( { navigation }: Props ) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [pageNumber, setPageNumber] = useState<number>(0);
    const [total, setTotal] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const [refreshing, setRefreshing] = useState<boolean>(false);

    const { colors } = useContext(ThemeContext);
    const { state } = useContext(AppContext);

    useEffect( () => {
        loadPage(pageNumber);
    }, [] );

    async function loadPage (pgNumber = pageNumber, shouldRefresh = false) {
        if(total && pageNumber > total) return;

        setLoading(true);
        const response = await api.get(`/products/${pgNumber}`);
        
        setTotal(Math.floor(response.data.quantity/2));
        setProducts( shouldRefresh ? response.data.products : [...products,  ...response.data.products ]);
        setPageNumber( pageNumber + 1 );

        setLoading(false);
    }

    async function refreshList() {
        setRefreshing(true);
        await loadPage(0, true);
        setRefreshing(false);
    }

    return (
        <Container>
            <Header navigation={ navigation.toggleDrawer }/>
            <SearchInputContainer>
                <SearchInput mode='flat' underlineColor="transparent" autoCorrect={false} theme={ state.theme } placeholder="Search" />
                <SearchButtonRipple rippleColor="#afc" onPress={() => {}}>
                    <Feather name="search" size={25} color={colors.text}/>
                </SearchButtonRipple>
            </SearchInputContainer>

            

            <FlatList
                data={products}
                ListHeaderComponent={ContentHeader}
                ListHeaderComponentStyle={{
                    height : 300
                }}
                keyExtractor={product => String(product.id)}
                onEndReached={ () => loadPage() }
                onEndReachedThreshold={0.1}
                onRefresh={refreshList}
                refreshing={refreshing}
                ListFooterComponent={loading ? <Loading/> : <></> }
                ListFooterComponentStyle={{
                    height : 100
                }}
                style={{
                    flex : 1
                }}
                showsVerticalScrollIndicator={false}
                renderItem={
                    ({ item }) =>
                        <ProductItemMemo 
                            item={item}
                            navigate={navigation.navigate}    
                        />
                }
            />

            
        </Container>
    );
}

export default Categories;