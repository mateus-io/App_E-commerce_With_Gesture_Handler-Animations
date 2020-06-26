import React from 'react';

import Header from '../../components/Header';

import {
    Container,
    ProductItemContainer,
    ContainerContent,
    ProductItemMainContent,
    ProductImage
} from './style';

type Props = {
    navigation : any;
}

const Bag = ( { navigation } : Props ) => {
    return (
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
                    </ProductItemMainContent>
                </ProductItemContainer>

                <ProductItemContainer>

                </ProductItemContainer>
            </ContainerContent>
        </Container>
    );
}

export default Bag;