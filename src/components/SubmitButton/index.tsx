import React from 'react';

import { Feather } from '@expo/vector-icons';

import {
    BoxIcon,
    ButtonContainer,
    CustomText,
    TextBox
} from './style';

interface SubmitButtonProps {
    firstColor : string;
    secondaryColor : string;
    fontColor : string;
    iconColor : string;
    icon : string;
    label : string;
}

const SubmitButton : React.FC<SubmitButtonProps> = ({
    firstColor,
    fontColor,
    icon,
    secondaryColor,
    iconColor,
    label
}) => {
    return (
        <ButtonContainer>
            <BoxIcon 
                secondaryColor={secondaryColor}
            >
                <Feather   
                    size={30}
                    name={`${icon}`}
                    color={`${iconColor}`}
                />
            </BoxIcon>
            <TextBox
                firstColor={firstColor}
            >
                <CustomText
                    fontColor={fontColor}
                >
                    { label }
                </CustomText>
            </TextBox>
        </ButtonContainer>
    );
}

export default SubmitButton;