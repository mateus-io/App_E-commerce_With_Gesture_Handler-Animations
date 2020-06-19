import React from 'react';

import { Container } from './style';

interface MenuProps {
    translateX : any;
}

const Menu : React.FC<MenuProps> = ({ translateX, children }) => {
    return (
        <Container
            style={ {
                opacity : translateX.interpolate({
                    inputRange : [-200, 0],
                    outputRange : [1, 0],
                }),
            } }
        >
            {children}
        </Container>
    );
} 

export default Menu;