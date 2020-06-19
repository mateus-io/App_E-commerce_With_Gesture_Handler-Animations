import React from 'react';

import { 
    Container,
    WelcomeMainText,
    MainTextContainer,
    SecondaryTextContainer,
    SecondaryText
} from './style';

interface MenuProps {
    translateX : any;
}


const WelcomeTextContainer : React.FC<MenuProps> = ({ translateX }) => {
    return (
        <Container
            style={ {
                opacity : translateX.interpolate({
                    inputRange : [-200, 50],
                    outputRange : [0, 1],
                }),
            } }
        >
            <MainTextContainer>
                <WelcomeMainText>
                    Welcome !!!
                </WelcomeMainText>
            </MainTextContainer>
            <SecondaryTextContainer>
                <SecondaryText>
                    Algo aqui para verificar se está funcionando tudo ok !!!
                </SecondaryText>
            </SecondaryTextContainer>
        </Container>
    );
} 

export default WelcomeTextContainer;