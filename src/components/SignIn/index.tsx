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
    SignUpLabel
} from './style';

import {
    TextInput
} from 'react-native-paper';

import { 
    Animated, 
    Keyboard,
    ActivityIndicator,
    View
} from 'react-native';

import api from '../../api/api';

import { WebView } from 'react-native-webview';

const SignIn : React.FC = () => {
    const [offset] = useState(new Animated.ValueXY({ x : 0, y : 0 }));
    const [openKeyboard, setOpenKeyboard] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [openSocialLogin, setOpenSocialLogin] = useState(false);
    const [signInOption, setSignInOption] = useState("");

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


    function handleSignInWithGoogle() {
        setOpenSocialLogin(true);
        setSignInOption("google");
    }
    function hanldeSignInWithFacebook() {
        setOpenSocialLogin(true);
        setSignInOption("facebook");
    }
    

    return (
        
        openSocialLogin ? 
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <WebView
                    source={{ 
                        uri: `http://localhost:3333/auth/${signInOption}`,
                    }}
                    onNavigationStateChange={(state : any) => console.log(state)}
                    startInLoadingState={true}
                    renderLoading={() => <ActivityIndicator></ActivityIndicator>}
                />
            </View>
        :
            <Container onPress={() => {
                setOpenKeyboard(false);
                Keyboard.dismiss();
            } }>
                
                <ContentContainer>
                    
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

                        <SignUpContainer>
                            <SignUpLabel>
                                Não tenho uma conta
                            </SignUpLabel>
                        </SignUpContainer>
                    
                    </SignInBox>
                    
                </ContentContainer>
            </Container>
    );
}

export default SignIn;