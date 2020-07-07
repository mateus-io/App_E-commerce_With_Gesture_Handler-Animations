import React, { useContext } from 'react';

import {
    Container,
    ContainerContent,
    FavoriteCardContainer,
    FavoriteCardImage,
    FavoriteCardInfo,
    FavoriteCardTitle,
    FavoriteCardIconsRow,
    FavoriteCardMainPrice,
    FavoriteCardSecondaryPrice,
    FavoriteCardStar
} from './style';

import Header from '../../components/Header';

import { Feather } from '@expo/vector-icons';

import { ThemeContext } from 'styled-components/native';

type Props = {
    navigation : any;
}

const Favorites = ( { navigation } : Props ) => {
    const { colors } = useContext(ThemeContext);

    return (
        <Container>
            <Header navigation={ navigation.toggleDrawer }/>
            <ContainerContent>
                <FavoriteCardContainer>
                    <FavoriteCardImage
                        source={ {
                            uri : 'https://p.kindpng.com/picc/s/192-1927941_transparent-charles-barkley-png-sneakers-png-download.png'
                        } }
                    />
                    <FavoriteCardInfo>
                        <FavoriteCardTitle 
                            numberOfLines={2}
                        >
                            Guarda-Roupa Solteiro Madesa Denver 2 Portas de Correr
                        </FavoriteCardTitle>
                        <FavoriteCardIconsRow>
                            <Feather selectionColor={colors.otherButtons} name="anchor" size={15} color={colors.text}/>
                            <Feather selectionColor={colors.otherButtons} name="anchor" size={15} color={colors.text}/>
                            <Feather selectionColor={colors.otherButtons} name="anchor" size={15} color={colors.text}/>
                            <Feather selectionColor={colors.otherButtons} name="anchor" size={15} color={colors.text}/>
                            <Feather selectionColor={colors.otherButtons} name="anchor" size={15} color={colors.text}/>
                        </FavoriteCardIconsRow>

                        <FavoriteCardMainPrice>
                            R$ 389,90
                        </FavoriteCardMainPrice>

                        <FavoriteCardSecondaryPrice>
                            12x de R$ 32,49
                        </FavoriteCardSecondaryPrice>

                    </FavoriteCardInfo>
                    <FavoriteCardStar>
                        <Feather selectionColor={colors.text} name="star" size={25} color={colors.otherButtons}/>  
                    </FavoriteCardStar>
                </FavoriteCardContainer>


                <FavoriteCardContainer>
                    <FavoriteCardImage
                        source={ {
                            uri : 'https://p.kindpng.com/picc/s/192-1927941_transparent-charles-barkley-png-sneakers-png-download.png'
                        } }
                    />
                    <FavoriteCardInfo>
                        <FavoriteCardTitle
                            numberOfLines={2}
                        >
                            Guarda-Roupa Solteiro Madesa Denver 2 Portas de Correr
                        </FavoriteCardTitle>
                        <FavoriteCardIconsRow>
                            <Feather selectionColor={colors.otherButtons} name="anchor" size={15} color={colors.text}/>
                            <Feather selectionColor={colors.otherButtons} name="anchor" size={15} color={colors.text}/>
                            <Feather selectionColor={colors.otherButtons} name="anchor" size={15} color={colors.text}/>
                            <Feather selectionColor={colors.otherButtons} name="anchor" size={15} color={colors.text}/>
                            <Feather selectionColor={colors.otherButtons} name="anchor" size={15} color={colors.text}/>
                        </FavoriteCardIconsRow>

                        <FavoriteCardMainPrice>
                            R$ 389,90
                        </FavoriteCardMainPrice>

                        <FavoriteCardSecondaryPrice>
                            12x de R$ 32,49
                        </FavoriteCardSecondaryPrice>

                    </FavoriteCardInfo>
                    <FavoriteCardStar>
                        <Feather selectionColor={colors.text} name="star" size={25} color={colors.otherButtons}/>  
                    </FavoriteCardStar>
                </FavoriteCardContainer>
            </ContainerContent>
        </Container>
    );
}
export default Favorites;