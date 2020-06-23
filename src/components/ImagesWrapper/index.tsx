import React, {  
    ForwardRefRenderFunction, 
    useRef,
    forwardRef,
    useImperativeHandle,
} from 'react';

import { ImperativeScrollViewHandles } from '../ImperativeScrollView';
import { ScrollView } from 'react-native';
import { CarouselImagesWrapper } from './style';

interface ImageWrapperProps {
    children : any
}

const ImageWrapper :    ForwardRefRenderFunction<
                        ImperativeScrollViewHandles,
                        ImageWrapperProps> = 
( { children } , ref ) => {
    const scrollViewRef = useRef<ScrollView>(null);


    useImperativeHandle(ref, () => ({
        scrollToStart: options => {
            if (scrollViewRef.current) {
                scrollViewRef.current.scrollTo({
                    x: 0,
                    y: 0,
                    animated: options ? options.animated : true,
                });
            }
        },
        scrollToEnd: options => {
            if (scrollViewRef.current) {
                scrollViewRef.current.scrollToEnd(options);
            }
        },
        scrollTo: options => {
            if (scrollViewRef.current) {
                scrollViewRef.current.scrollTo(options);
            }
        },
    }));

    return (
        <CarouselImagesWrapper
            horizontal 
            showsHorizontalScrollIndicator={false}
            ref={scrollViewRef}
        >
            {children}
        </CarouselImagesWrapper>
    );
}

export default forwardRef(ImageWrapper);