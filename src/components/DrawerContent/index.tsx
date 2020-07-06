import React, { useState, useEffect, useContext } from 'react';

import { 
    Container,
    MainText,
    CustomTitle,
    ContainerScroll,
    Section,
    Item,
    Content,
    UserInfoContainer,
    ProfilePictureContainer,
    InfoContainer,
    DetailInfoContainer,
    NameContainer,
    NumberCaption,
    Wave,
    PreferencesContainer,
    SectionPreferences,
    CustomIcon
} from './style';

import { getData, storeData } from '../../utils/useAsyncStorage';

import {
    TouchableRipple,
    Switch,
    Avatar
} from 'react-native-paper';

import { AppContext } from '../../context';

import api from '../../api/api';

import { ThemeContext } from 'styled-components/native';
import dark from '../../styles/themes/dark';
import light from '../../styles/themes/light';

const DrawerContent : React.FC = (props : any) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [photoURL, setPhotoURL] = useState("https://img.icons8.com/officel/80/000000/person-male.png"); 
    const [name, setName] = useState("Clique na foto para entrar");

    const { state } = useContext(AppContext);
    const { colors } = useContext(ThemeContext);

    const xml = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="150 120 1145 310">
        <path fill=${colors.background} d="M0,256L48,266.7C96,277,192,299,288,261.3C384,224,480,128,576,122.7C672,117,768,203,864,218.7C960,235,1056,181,1152,186.7C1248,192,1344,256,1392,288L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
    </svg> `;

    async function updateUserInfo(){
        if(state.logged){
            const token = await getData('token');
            try{
                const response = await api.get('/profile', {
                    headers : {
                        Authorization : token
                    }
                });

                setPhotoURL(String(response.data.profile_picture));
                setName(String(response.data.userName));
            } catch(e) {
                console.log(e);
            }
            
        } else {
            setPhotoURL("https://img.icons8.com/officel/80/000000/person-male.png");
            setName("Clique na foto para entrar");
        }
    }

    useEffect( () => { 
        updateUserInfo();
    }, [state.logged]);

    useEffect( () => { 
        updateUserInfo();
    }, []);

    const toggleTheme = () => {
        state.setTheme(isDarkTheme ? dark : light);
        setIsDarkTheme(!isDarkTheme);
    }

    return (
        <Container>
            <ContainerScroll {...props}>
                <Content>
                    <UserInfoContainer>
                        <ProfilePictureContainer>
                            <Avatar.Image
                                source={ {
                                    uri : photoURL
                                } }
                                size={72}
                            />
                        </ProfilePictureContainer>
                        <InfoContainer>
                            <NameContainer>
                                <MainText>
                                    {name}
                                </MainText>
                                <CustomTitle>
                                    @{name}
                                </CustomTitle>
                            </NameContainer>
                        </InfoContainer>
                        
                    </UserInfoContainer>
                    <DetailInfoContainer>
                        <CustomTitle>
                            <NumberCaption> 200 </NumberCaption> Novidades
                        </CustomTitle>
                        <CustomTitle>
                            <NumberCaption> 200 </NumberCaption> Visualizados
                        </CustomTitle>
                    </DetailInfoContainer>
                    

                    <Section>
                        <Item
                            icon={() =>  (
                                <CustomIcon 
                                    size={25} 
                                    name="home" 
                                />
                            ) }
                            label="Home"
                            labelStyle={{
                                fontSize : 20,
                                fontFamily : 'Nunito_900Black_Italic',
                                color :  colors.text
                            }}
                            onPress={ () => props.navigation.navigate('Home') }
                        />
                    </Section>
                    <Section>
                        <Item
                            icon={() =>  (
                                <CustomIcon 
                                    size={25} 
                                    
                                    name="shopping-cart" 
                                />
                            ) }
                            label="Produtos"
                            
                            labelStyle={{
                                fontSize : 20,
                                fontFamily : 'Nunito_900Black_Italic',
                                color : colors.text
                            }}
                            onPress={ () => props.navigation.navigate('DashBoard') }
                        />
                    </Section>
                    <Section>
                        <Item
                            icon={() =>  (
                                <CustomIcon 
                                    size={25} 
                                    
                                    name="phone" 
                                />
                            ) }
                            label="Contatos"
                            labelStyle={{
                                fontSize : 20,
                                fontFamily : 'Nunito_900Black_Italic',
                                color : colors.text
                            }}
                            onPress={ () => props.navigation.navigate('Contacts') }
                        />
                    </Section>
                    <Section>
                        <Item
                            icon={() =>  (
                                <CustomIcon 
                                    size={25} 
                                    
                                    name="star" 
                                />
                            ) }
                            label="Lançamentos"
                            labelStyle={{
                                fontSize : 20,
                                fontFamily : 'Nunito_900Black_Italic',
                                color : colors.text
                            }}
                            onPress={ () => props.navigation.navigate('Bag') }
                        />
                    </Section>

                    <Section>
                        <Item
                            icon={() =>  (
                                <CustomIcon 
                                    size={25} 
                                    
                                    name="award" 
                                />
                            ) }
                            label="Favoritos"
                            labelStyle={{
                                fontSize : 20,
                                fontFamily : 'Nunito_900Black_Italic',
                                color : colors.text
                            }}
                            onPress={ () => props.navigation.navigate('Favorites') }
                        />
                    </Section>

                    <Section>
                        <Item
                            icon={() =>  (
                                <CustomIcon 
                                    size={25} 
                                    
                                    name="moon" 
                                />
                            ) }
                            label="Modo Noturno"
                            labelStyle={{
                                fontSize : 20,
                                fontFamily : 'Nunito_900Black_Italic',
                                color : colors.text
                            }}
                            onPress={() => {toggleTheme()}}
                        />
                        <SectionPreferences>
                            <TouchableRipple 
                                onPress={() => {toggleTheme()}}
                                rippleColor="transparent"    
                            >
                                <PreferencesContainer pointerEvents="none">
                                    <Switch value={isDarkTheme}/>
                                </PreferencesContainer>
                            </TouchableRipple>
                        </SectionPreferences>
                    </Section>
                    
                    


                </Content>

                <Wave xml={xml} />

            </ContainerScroll>
            <Section>
                <Item
                    icon={() =>  (
                        <CustomIcon 
                            size={25} 
                            name="log-out" 
                        />
                    ) }
                    label="Sign-Out"
                    labelStyle={{
                        fontSize : 20,
                        fontFamily : 'Nunito_900Black_Italic',
                        color : colors.text
                    }}
                    onPress={ () => {
                        storeData('token', JSON.stringify(null));
                        state.setLogged(false);
                    } }
                />
            </Section>
        </Container>
    );
} 

export default DrawerContent;