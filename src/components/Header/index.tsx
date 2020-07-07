import React, { useContext } from 'react';
import {
    TouchableOpacity
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import NavigationProps from '../../utils/Navigationable';
import { HeaderContainer, WaveContainer } from './style';
import { SvgXml } from 'react-native-svg';
import { ThemeContext } from 'styled-components/native';




const Header : React.FC<NavigationProps> = ({ navigation }) => {
    const { colors } = useContext(ThemeContext);

    const xml =  `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="150 55 1145 310">
        <path fill=${colors.secundary} d="M0,256L48,266.7C96,277,192,299,288,261.3C384,224,480,128,576,122.7C672,117,768,203,864,218.7C960,235,1056,181,1152,186.7C1248,192,1344,256,1392,288L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
    </svg> `;

    return (
        <>
            <HeaderContainer>
                <TouchableOpacity onPress={() => navigation()}>
                    <Feather   
                        size={40}
                        name="menu"
                        color={colors.text}
                    />
                </TouchableOpacity>    
            </HeaderContainer>
            <WaveContainer>
                <SvgXml xml={xml} width="100%" height="150px" />
            </WaveContainer>
        </>

        
    );
}

export default Header;