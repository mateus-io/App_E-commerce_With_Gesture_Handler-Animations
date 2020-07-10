import React, { useState, useEffect, useContext } from 'react';

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
    Loading
} from './style';

import {
    TextInput
} from 'react-native-paper';

import { 
    Animated, 
    Keyboard,
    TouchableOpacity
} from 'react-native';

import SubmitButton from '../SubmitButton';

import SignUp from '../SignUp';

import Vars from '../../../env/getVars';

const { ANDROID_CLIENT_ID, FACEBOOK_APP_ID } = Vars;

import api from '../../api/api';

import * as Google from 'expo-google-app-auth';
import * as Facebook from 'expo-facebook';
import { storeData } from '../../utils/useAsyncStorage';
import ErrorComponent from '../ErrorComponent';

import { AppContext } from '../../context';

import { ThemeContext } from 'styled-components/native';

interface Permissions {
    type : string;
    token : string;
    expires : string;
    permissions : string;
    declinedPermissions : string;
}

interface SignInProps {
    navigate(route : string) : void;
}

const SignIn : React.FC<SignInProps> = ({navigate}) => {
    const [offset] = useState(new Animated.ValueXY({ x : 0, y : 0 }));
    const [openKeyboard, setOpenKeyboard] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [activeErrorAlert, setActiveErrorAlert] = useState(false);
    const [activeSignUp, setActiveSignUp] = useState(false);
    const [loading, setLoading] = useState(false);

    const { state } = useContext(AppContext);
    const { colors } = useContext(ThemeContext);

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

    async function handleSignInWithGoogle() {
        setLoading(true);
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
                        email : String( result.user.email ), 
                        password,
                        authenticate_social_mobile : "TRUE"
                    });
                    await storeData('token', String(responseSignIn.data.token) );
                    state.setLogged(true);
                } catch {
                    try {
                        await api.post('/users', {
                            email : String( result.user.email ), 
                            password : "default", 
                            userName : name, 
                            profile_picture_url : photoUrl
                        });

                        const responseSignIn = await api.post('/auth', {
                            email : String( result.user.email ), 
                            password : "default",
                            authenticate_social_mobile : "TRUE"
                        });
                        await storeData('token', String(responseSignIn.data.token) );
                        state.setLogged(true);
                    } catch {  }
                }
            } else {
                console.log("cancelled");
            }
        } catch (e) {
            console.log("error", e);
        }
        setLoading(false);

    }
    async function hanldeSignInWithFacebook() {
        setLoading(true);
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
                        email : String( id ), 
                        password, 
                        authenticate_social_mobile : "TRUE"
                    });
                    await storeData('token', String(responseSignIn.data.token) );
                    state.setLogged(true);
                } catch {
                    try {
                        await api.post('/users', {
                            email : String( id ), 
                            password : "default", 
                            userName : name, 
                            profile_picture_url : photoUrl
                        });
                        const responseSignIn = await api.post('/auth', {
                            email : String( id ), 
                            password : "default", 
                            authenticate_social_mobile : "TRUE"
                        });
                        await storeData('token', String(responseSignIn.data.token) );
                        state.setLogged(true);
                    } catch { }
                }
            } else {
              // type === 'cancel'
            }
        } catch ({ message }) {
            alert(`Facebook Login Error: ${message}`);
        }
        setLoading(false);
    }

    async function handleSignIn () {
        setLoading(true);
        try {
            const responseSignIn = await api.post('/auth', {
                email, 
                password, 
                authenticate_social_mobile : "FALSE"
            });
            await storeData('token', responseSignIn.data.token);
            state.setLogged(true);
        } catch { 
            setActiveErrorAlert(true);
        }
        setLoading(false);
    }
    
    if(state.logged) {
        navigate('Home');
    }
    

    return (
        activeSignUp ? 
            <SignUp 
                navigate={navigate}
                route="Bag"
                setActiveSignUp={setActiveSignUp}
            />
        :    
            <Container onPress={() => {
                setOpenKeyboard(false);
                Keyboard.dismiss();
            } }>
                
                
                <ContentContainer>
                    {
                        loading ? <Loading/> : <></>
                    }
                    <ErrorComponent
                        errorMessage="Senha ou email inválidos"
                        setActiveErrorAlert={setActiveErrorAlert}
                        activeErrorAlert={activeErrorAlert}
                    />
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
                            underlineColor={colors.otherButtons}
                            selectionColor={colors.otherButtons}
                            theme={state.theme}
                            numberOfLines={1}
                            autoCorrect={false}
                            placeholderTextColor={colors.text}
                            onFocus={ () => setOpenKeyboard(true) }
                        />

                        <TextInput
                            label="Password"
                            value={password}
                            onChangeText={setPassword}
                            mode='outlined'
                            theme={state.theme}
                            underlineColor={colors.otherButtons}
                            selectionColor={colors.otherButtons}
                            numberOfLines={1}
                            autoCorrect={false}
                            placeholderTextColor={colors.text}
                            onFocus={ () => setOpenKeyboard(true) }
                            textContentType="password"
                            
                            secureTextEntry
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
                            onPress={() => setActiveSignUp(true)}
                        >
                            <SignUpLabel>
                                Não tenho uma conta
                            </SignUpLabel>
                        </SignUpContainer>
                        
                        <TouchableOpacity
                            activeOpacity={.9}
                            onPress={handleSignIn}
                        >
                            <SubmitButton
                                icon="log-in"
                                firstColor="#24f"
                                secondaryColor="#27f"
                                fontColor="#ddd"
                                iconColor="#fff"
                                label="ENTRAR"
                            />
                        </TouchableOpacity>

                    </SignInBox>
                        
                </ContentContainer>
            </Container>
    );
}

export default SignIn;