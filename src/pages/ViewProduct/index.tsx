import React, { 
    useRef, 
    useState,
    createContext, 
    RefObject,
    
} from 'react';


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
    const [positionXBars, setPositionXBars] = useState<number>(0);
    const [indexView, setIndexView] = useState<number>(0);
    const [offsetX, setOffsetX] = useState<number>(0);
    const scrollViewRef = useRef<ImperativeScrollViewHandles>(null);
    const scrollCarouselRef = useRef<ImperativeScrollViewHandles>(null);

    return (
        <Container scrollEnabled={false} >
            <Header navigation={ navigation.toggleDrawer }/>
            <ImperativeScrollView 
                ref={scrollViewRef}
                positionX={positionXBars}
                setPositionX={setPositionXBars}
                setIndexView={setIndexView}
                setOffsetX={setOffsetX}
                carousel={ scrollCarouselRef }

            />
            <Carousel
                ref={scrollCarouselRef}
                setPositionX={ setPositionXBars } 
                imperativeScrollView={scrollViewRef}
                setIndexView={setIndexView}
                setOffsetX={setOffsetX}
                offsetX={offsetX}
                indexView={indexView}
            />
            
        </Container>
    );
}

export default ViewProduct;