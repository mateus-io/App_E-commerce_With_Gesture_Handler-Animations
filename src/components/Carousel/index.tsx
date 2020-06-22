import React from 'react';

import { View, Dimensions, TouchableOpacity } from 'react-native';

import {
    Container,
    ContainerScroll,
    ContainerWrapper
} from './style';

const DEVICE_WIDTH = Dimensions.get('window').width;

const Component1 : React.FC = () => {
    return(
        <View style={{
            flex : 1,
            height : 500,
            width : 400,
            backgroundColor : '#bfe' 
        }}>
        </View>
    );
}

const Component2 : React.FC = () => {
    return(
        <View style={{
            flex : 1,
            height : 500,
            width : 400,
            backgroundColor : '#bfa' 
        }}>
        </View>
    );
}
const Component3 : React.FC = () => {
    return(
        <View style={{
            flex : 1,
            height : 500,
            width : 400,
            backgroundColor : '#adf' 
        }}>
        </View>
    );
}

const vector = [Component1,Component2,Component3];


interface CarouselProps {
    setPositionX(positionX : number) : void;
}

const Carousel : React.FC<CarouselProps> = ( { setPositionX } ) => {

    return (
        <Container>
            <View>
                <TouchableOpacity style={ {
                    width : 200,
                    height : 50,
                    backgroundColor :  '#bfe'
                } }
                    onPress={ () => setPositionX(150) }
                />
            </View>
            <ContainerScroll horizontal>
                <ContainerWrapper>
                {
                    vector.map( Component => (
                        <Component/>
                    ) )
                }
                </ContainerWrapper>
                
            </ContainerScroll>
        </Container>
    );
}

export default Carousel;