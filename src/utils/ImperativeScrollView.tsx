import React, {
    useRef,
    useImperativeHandle,
    forwardRef,
    RefForwardingComponent,
    PropsWithChildren,
} from "react";
import { ScrollView, ScrollViewProps } from "react-native";

export interface ImperativeScrollViewHandles {
    scrollToStart(options?: { animated: boolean }): void;
    scrollToEnd(options?: { animated: boolean }): void;
    scrollTo(options: { x?: number; y?: number; animated?: boolean }): void;
}

const ImperativeScrollView: RefForwardingComponent<
    ImperativeScrollViewHandles,
    PropsWithChildren<ScrollViewProps>
> = (props, ref) => {
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
    return <ScrollView ref={scrollViewRef} horizontal showsHorizontalScrollIndicator={false} />;
};

export default forwardRef(ImperativeScrollView);