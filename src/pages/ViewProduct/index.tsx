import React, { useRef, useState } from 'react';


import {
    Container,
} from './style';

import Header from '../../components/Header';
import Carousel from '../../components/Carousel';

type Props = {
    navigation : any;
}

import ImperativeScrollView, { ImperativeScrollViewHandles } from '../../components/ImperativeScrollView';

const ViewProduct = ( { navigation }: Props ) => {
    const [positionXBars, setPositionXBars] = useState(0);
    const scrollViewRef = useRef<ImperativeScrollViewHandles>(null);
    
    return (
        <Container>
            <Header navigation={ navigation.toggleDrawer }/>
            <ImperativeScrollView 
                ref={scrollViewRef}
                positionX={positionXBars}
                setPositionX={setPositionXBars}
            />
            <Carousel setPositionX={ setPositionXBars } />
        </Container>
    );
}

export default ViewProduct;