import React, { useState, useEffect } from 'react';

import {
    Container,
    ContentContainer,
    SignInBox,
    SignInIcon,
    SignInIconContainer,
    SignInSocialRow,
    SignInText,
    SignInSocial,
    SignInWithGoogleContent,
    SignInWithFacebookContent,
    SignUpContainer,
    SignUpLabel,
    BoxIconLogin,
    LoginButtonContainer,
    TextBoxLogin,
    TextLogin,
    ErrorAdviceBox,
    ErrorContentRow,
    ErrorLabel
} from './style';

import {
    TextInput
} from 'react-native-paper';

import { Feather } from '@expo/vector-icons';

import { 
    Animated, 
    Keyboard,
    TouchableOpacity
} from 'react-native';

import Vars from '../../../env/getVars';

const { ANDROID_CLIENT_ID, FACEBOOK_APP_ID } = Vars;

import api from '../../api/api';

import * as Google from 'expo-google-app-auth';
import * as Facebook from 'expo-facebook';
import { storeData } from '../../utils/useAsyncStorage';

interface Permissions {
    type : string;
    token : string;
    expires : string;
    permissions : string;
    declinedPermissions : string;
}


const SignIn : React.FC = () => {
    const [offset] = useState(new Animated.ValueXY({ x : 0, y : 0 }));
    const [offsetError] = useState(new Animated.ValueXY({ x : -100, y : 0 }));
    const [openKeyboard, setOpenKeyboard] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [activeErrorAlert, setActiveErrorAlert] = useState(false);


    useEffect( () => {
        if(openKeyboard){
            Animated.spring(offset.y, {
                toValue : -100,
                speed : 4,
                bounciness : 20,
                useNativeDriver : true
            }).start();
        }
        else{
            Animated.spring(offset.y, {
                toValue : 0,
                speed : 4,
                bounciness : 5,
                useNativeDriver : true
            }).start();
        }
    }, [openKeyboard] );

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


    async function handleSignInWithGoogle() {
        try {
            const result = await Google.logInAsync({
                androidClientId: `${ANDROID_CLIENT_ID}`,
                scopes: ["profile", "email"]
            });
            if (result.type === "success") {
                
                const name = result.user.name;
                const photoUrl = result.user.photoUrl;
                setEmail( String( result.user.email ) );
                try {
                    const responseSignIn = await api.post('/auth', {
                        email, 
                        password, 
                        authenticate_social_mobile : "TRUE"
                    });
                    await storeData('token', responseSignIn.data.token);
                } catch {
                    try {
                        await api.post('/users', {
                            email, 
                            password : "default", 
                            userName : name, 
                            profile_picture_url : photoUrl
                        });
                    } catch {  }
                }
            } else {
                console.log("cancelled");
            }
        } catch (e) {
            console.log("error", e);
        }


    }
    async function hanldeSignInWithFacebook() {
        try {
            await Facebook.initializeAsync(`${FACEBOOK_APP_ID}`);
            const result = await Facebook.logInWithReadPermissionsAsync({
                permissions: ['public_profile'],
            });
            const {
                type,
                token
            } = result as Permissions;
            if (type === 'success') {
                // Get the user's name using Facebook's Graph API
                const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
                const { name, id } = (await response.json());
                const photoUrl = "avatarDefault.png";
                setEmail( String( id ) );
                try {
                    const responseSignIn = await api.post('/auth', {
                        email, 
                        password, 
                        authenticate_social_mobile : "TRUE"
                    });
                    await storeData('token', responseSignIn.data.token);
                } catch {
                    try {
                        await api.post('/users', {
                            email, 
                            password : "default", 
                            userName : name, 
                            profile_picture_url : photoUrl
                        });
                    } catch {  }
                }
            } else {
              // type === 'cancel'
            }
        } catch ({ message }) {
            alert(`Facebook Login Error: ${message}`);
        }
    }

    async function handleSignIn () {
        try {
            const responseSignIn = await api.post('/auth', {
                email, 
                password, 
                authenticate_social_mobile : "FALSE"
            });
            await storeData('token', responseSignIn.data.token);
        } catch { 
            setActiveErrorAlert(true);
        }
    }
    
    const ErrorComponent : React.FC = () => {
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
                            Senha ou Email inválidos
                        </ErrorLabel>
                    </ErrorContentRow>
                </ErrorAdviceBox>
                :
                    <></>
        );
    }


    return (
        <Container onPress={() => {
            setOpenKeyboard(false);
            Keyboard.dismiss();
        } }>
            
            
            <ContentContainer>
                <ErrorComponent/>
                <SignInBox
                    style={
                        {
                            transform : [
                                { translateY : offset.y }
                            ]
                        }
                    }
                >
                        
                    <TextInput
                        label="Email"
                        value={email}
                        onChangeText={setEmail}
                        mode='outlined'
                        underlineColor='#25f'
                        numberOfLines={1}
                        autoCorrect={false}
                        onFocus={ () => setOpenKeyboard(true) }
                    />

                    <TextInput
                        label="Password"
                        value={password}
                        onChangeText={setPassword}
                        mode='outlined'
                        selectionColor='#25f'
                        numberOfLines={1}
                        autoCorrect={false}
                        onFocus={ () => setOpenKeyboard(true) }
                    />

                    <SignInSocialRow>
                        <SignInSocial
                                onPress={handleSignInWithGoogle}
                        >
                            <SignInWithGoogleContent>
                                <SignInIconContainer>
                                    <SignInIcon
                                        source={{
                                            uri : 'https://img.icons8.com/color/48/000000/google-logo.png'
                                        }}
                                    />
                                </SignInIconContainer>
                                <SignInText>
                                    Entre com google
                                </SignInText>
                            </SignInWithGoogleContent>
                        </SignInSocial>

                        <SignInSocial
                            onPress={hanldeSignInWithFacebook}
                        >
                            <SignInWithFacebookContent>
                                <SignInIconContainer>
                                    <SignInIcon
                                        source={{
                                            uri : 'https://img.icons8.com/fluent/48/000000/facebook-new.png'
                                        }}
                                    />
                                </SignInIconContainer>
                                <SignInText>
                                    Entre com facebook
                                </SignInText>
                            </SignInWithFacebookContent>
                        </SignInSocial>
                    </SignInSocialRow>

                    <SignUpContainer
                        onPress={() => {}}//cadastrar
                    >
                        <SignUpLabel>
                            Não tenho uma conta
                        </SignUpLabel>
                    </SignUpContainer>
                    
                    <TouchableOpacity
                        activeOpacity={.9}
                        onPress={handleSignIn}
                    >
                        <LoginButtonContainer>
                            <BoxIconLogin>
                                <Feather   
                                    size={30}
                                    name="user-plus"
                                    color="#fff"
                                />
                            </BoxIconLogin>
                            <TextBoxLogin>
                                <TextLogin>
                                    ENTRAR
                                </TextLogin>
                            </TextBoxLogin>
                        </LoginButtonContainer>

                    </TouchableOpacity>

                </SignInBox>
                    
            </ContentContainer>
        </Container>
    );
}

export default SignIn;