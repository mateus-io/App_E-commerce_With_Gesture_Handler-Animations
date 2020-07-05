import React, { useEffect, useState } from 'react';

import {
    ErrorAdviceBox,
    ErrorContentRow,
    ErrorLabel
} from './style';

import {
    TouchableOpacity,
    Animated
} from 'react-native';

import {
    Feather
} from '@expo/vector-icons';

interface ErrorComponentProps {
    activeErrorAlert : boolean;
    setActiveErrorAlert(value : boolean) : void;
    errorMessage : string;
}

const ErrorComponent : React.FC<ErrorComponentProps> = ({
    activeErrorAlert,
    setActiveErrorAlert, 
    errorMessage
}) => {
    const [offsetError] = useState(new Animated.ValueXY({ x : -100, y : 0 }));

    useEffect( () => {

        if(activeErrorAlert){
            Animated.spring(offsetError.x, {
                toValue : 0,
                speed : 4,
                bounciness : 20,
                useNativeDriver : true
            }).start();
        }
        else {
            Animated.spring(offsetError.x, {
                toValue : -100,
                speed : 4,
                bounciness : 2,
                useNativeDriver : true
            }).start();
        }
    }, [activeErrorAlert] );
    return (
        activeErrorAlert ?
            <ErrorAdviceBox
                style={
                    {
                        transform : [
                            { translateX : offsetError.x }
                        ]
                    }
                }
            >
                <ErrorContentRow>
                    <TouchableOpacity 
                        activeOpacity={.9}
                        onPress={() => {
                            setActiveErrorAlert(false);
                        }}
                    >
                        <Feather   
                            size={18}
                            name="x-square"
                            color="#111"
                        />
                    </TouchableOpacity>
                    <ErrorLabel>
                        {
                            errorMessage
                        }
                    </ErrorLabel>
                </ErrorContentRow>
            </ErrorAdviceBox>
            :
                <></>
    );
}

export default ErrorComponent;