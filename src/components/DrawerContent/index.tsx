import React, { useState } from 'react';

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
    SectionPreferences
} from './style';

import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import {
    TouchableRipple,
    Switch,
    Avatar
} from 'react-native-paper';

import {
    Feather
} from '@expo/vector-icons';

const xml =  `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="150 120 1145 310">
        <path fill="#fff" d="M0,256L48,266.7C96,277,192,299,288,261.3C384,224,480,128,576,122.7C672,117,768,203,864,218.7C960,235,1056,181,1152,186.7C1248,192,1344,256,1392,288L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
    </svg> `;


const DrawerContent : React.FC = (props : any) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
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
                                    uri :  'https://images.unsplash.com/photo-1569605803663-e9337d901ff9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80'
                                } }
                                size={72}
                            />
                        </ProfilePictureContainer>
                        <InfoContainer>
                            <NameContainer>
                                <MainText>
                                    Mateus Apolinário
                                </MainText>
                                <CustomTitle>
                                    @Alguém
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
                                <Feather 
                                    size={25} 
                                    color='#888'
                                    name="home" 
                                />
                            ) }
                            label="Home"
                            labelStyle={{
                                fontSize : 20,
                                fontFamily : 'Nunito_900Black_Italic',
                                color : '#210124',
                            }}
                            onPress={ () => props.navigation.navigate('Home') }
                        />
                    </Section>
                    <Section>
                        <Item
                            icon={() =>  (
                                <Feather 
                                    size={25} 
                                    color='#888'
                                    name="shopping-cart" 
                                />
                            ) }
                            label="Produtos"
                            labelStyle={{
                                fontSize : 20,
                                fontFamily : 'Nunito_900Black_Italic',
                                color : '#210124',
                            }}
                            onPress={ () => props.navigation.navigate('DashBoard') }
                        />
                    </Section>
                    <Section>
                        <Item
                            icon={() =>  (
                                <Feather 
                                    size={25} 
                                    color='#888'
                                    name="phone" 
                                />
                            ) }
                            label="Contatos"
                            labelStyle={{
                                fontSize : 20,
                                fontFamily : 'Nunito_900Black_Italic',
                                color : '#210124',
                            }}
                            onPress={ () => props.navigation.navigate('Contacts') }
                        />
                    </Section>
                    <Section>
                        <Item
                            icon={() =>  (
                                <Feather 
                                    size={25} 
                                    color='#888'
                                    name="star" 
                                />
                            ) }
                            label="Lançamentos"
                            labelStyle={{
                                fontSize : 20,
                                fontFamily : 'Nunito_900Black_Italic',
                                color : '#210124',
                            }}
                            onPress={ () => props.navigation.navigate('Bag') }
                        />
                    </Section>

                    <Section>
                        <Item
                            icon={() =>  (
                                <Feather 
                                    size={25} 
                                    color='#888'
                                    name="award" 
                                />
                            ) }
                            label="Favoritos"
                            labelStyle={{
                                fontSize : 20,
                                fontFamily : 'Nunito_900Black_Italic',
                                color : '#210124',
                            }}
                            onPress={ () => props.navigation.navigate('Favorites') }
                        />
                    </Section>

                    <Section>
                        <Item
                            icon={() =>  (
                                <Feather 
                                    size={25} 
                                    color='#888'
                                    name="moon" 
                                />
                            ) }
                            label="Modo Noturno"
                            labelStyle={{
                                fontSize : 20,
                                fontFamily : 'Nunito_900Black_Italic',
                                color : '#210124',
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
                        <Feather 
                            size={25} 
                            color='#888'
                            name="log-out" 
                        />
                    ) }
                    label="Sign-Out"
                    labelStyle={{
                        fontSize : 20,
                        fontFamily : 'Nunito_900Black_Italic',
                        color : '#210124',
                    }}
                    onPress={ () => {} }
                />
            </Section>
        </Container>
    );
} 

export default DrawerContent;