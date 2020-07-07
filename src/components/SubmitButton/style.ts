
import styled from 'styled-components/native';

export const ButtonContainer = styled.View `
    display : flex;
    flex-direction : row;
    width : 300px;
    height : 50px;
    margin : 10px auto;
`;

interface BoxIconProps {
    secondaryColor : string;
}
export const BoxIcon = styled.View `
    height : 100%;
    width : 50px;
    display : flex;
    align-items : center;
    justify-content : center;
    background : ${ (props : BoxIconProps) => props.secondaryColor};
    border-bottom-left-radius : 5px;
    border-top-left-radius : 20px;
`;

interface TextBoxProps {
    firstColor : string;
}

export const TextBox = styled.View `
    width : 250px;
    height : 100%;
    display : flex;
    align-items : center;
    justify-content : center;
    background : ${ (props : TextBoxProps) => props.firstColor };
    border-top-right-radius : 20px;
    border-bottom-right-radius : 5px;
`;

interface CustomTextProps {
    fontColor : string;
}

export const CustomText = styled.Text `
    color : ${(props : CustomTextProps) => props.fontColor };
    font-size : 17px;
    font-family : 'Nunito_900Black_Italic';
`;