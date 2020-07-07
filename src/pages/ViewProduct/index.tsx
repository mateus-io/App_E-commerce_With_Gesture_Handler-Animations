import React, { 
    useRef, 
    useState
} from 'react';


import {
    Container
} from './style';

import Header from '../../components/Header';
import Carousel from '../../components/Carousel';


type Product = {
    id : number;
    title : string;
    main_image_url : string;
    images_url : string;
    assessments : number;
    price : number;
    plots : string;
}


type Route = {
    params : Product
}

type Props = {
    navigation : any;
    route : Route;
}

import ImperativeScrollView, { ImperativeScrollViewHandles } from '../../components/ImperativeScrollView';

const ViewProduct = ( { route, navigation }: Props ) => {
    const [positionXBars, setPositionXBars] = useState<number>(0);
    const [indexView, setIndexView] = useState<number>(0);
    const [offsetX, setOffsetX] = useState<number>(0);
    const scrollViewRef = useRef<ImperativeScrollViewHandles>(null);
    const scrollCarouselRef = useRef<ImperativeScrollViewHandles>(null);
    const { params } = route;

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
                product={params}
            />
            
        </Container>
    );
}

export default ViewProduct;