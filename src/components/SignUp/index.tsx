import React, { useState, useEffect, useContext } from 'react';

import {
    Container,
    ContentContainer,
    SignUpContainer,
    SelectProfilePictureContainer,
    SelectProfilePictureTouchable,
    SelectedProfilePicturePreview,
    UploadLabel,
    Loading
} from './style';

import * as ImagePicker from 'expo-image-picker';

import SubmitButton from '../SubmitButton';

import {
    TextInput
} from 'react-native-paper';

import { 
    Keyboard,
    TouchableOpacity,
    Animated
} from 'react-native';

import { Feather } from '@expo/vector-icons';

import ErrorComponent from '../ErrorComponent';

import { ThemeContext } from 'styled-components/native';

import api from '../../api/api';

import { AppContext } from '../../context';

interface SignUpProps {
    navigate(route : string) : void;
    route : string;
    setActiveSignUp(value : boolean) : void;
}

const SignUp : React.FC<SignUpProps> = ({navigate, route, setActiveSignUp}) => {

    const [offset] = useState(new Animated.ValueXY({ x : 0, y : -100 }));
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUsername] = useState("");
    const [profile_picture_url, setProfile_picture_url] = useState("");
    const [actveErrorAlert, setActiveErrorAlert] = useState(false);
    const [loading, setLoading] = useState(false);

    const { colors } = useContext(ThemeContext);
    const { state } = useContext(AppContext);

    useEffect( () => {
        Animated.spring(offset.y, {
            toValue : 0,
            speed : 4,
            bounciness : 20,
            useNativeDriver : true
        }).start();
    }, []);

    async function handleCam() {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.cancelled) {
                setProfile_picture_url(result.uri);
            }
        } catch (E) {
            console.log(E);
        }
    }

    async function handleSignUp(){
        setLoading(true);
        try {
            await api.post('/users', {
                email, 
                password, 
                userName, 
                profile_picture_url
            });
            setActiveSignUp(false);
            navigate(route);
        } catch {
            setActiveErrorAlert(true);
        }
        setLoading(false);
    }

    return (
        <Container
            onPress={ () => Keyboard.dismiss()}
        >
            <ContentContainer>
                    {
                        loading ? <Loading/> : <></>
                    }
                    <ErrorComponent
                        errorMessage="Erro no cadastro!!!"
                        activeErrorAlert={actveErrorAlert}
                        setActiveErrorAlert={setActiveErrorAlert}
                    />

                    <SignUpContainer
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
                            theme={state.theme}
                            underlineColor={colors.otherButtons}
                            selectionColor={colors.otherButtons}
                            numberOfLines={1}
                            autoCorrect={false}
                            placeholderTextColor={colors.text}
                            style={{
                                marginTop : 5
                            }}
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
                            textContentType="password"
                            
                            secureTextEntry
                            style={{
                                marginTop : 5
                            }}
                        />

                        <TextInput
                            label="Username"
                            value={userName}
                            onChangeText={setUsername}
                            mode='outlined'
                            underlineColor={colors.otherButtons}
                            selectionColor={colors.otherButtons}
                            numberOfLines={1}
                            autoCorrect={false}
                            theme={state.theme}
                            placeholderTextColor={colors.text}
                            style={{
                                marginTop : 5,
                                marginBottom : 10
                            }}
                        />
                        <TouchableOpacity
                            activeOpacity={.9}
                            onPress={handleSignUp}
                        >
                            <SubmitButton
                                icon="user-plus"
                                firstColor="#24f"
                                secondaryColor="#27f"
                                fontColor="#ddd"
                                iconColor="#fff"
                                label="INSCREVER-SE"
                            />
                        </TouchableOpacity>
                    </SignUpContainer>

                    <SelectProfilePictureContainer>
                        <UploadLabel>
                            UPLOAD
                        </UploadLabel>
                        <SelectProfilePictureTouchable
                            onPress={handleCam}
                        >
                            <Feather
                                name="upload-cloud"
                                size={40}
                                color={colors.text}
                            />
                        </SelectProfilePictureTouchable>

                        <SelectedProfilePicturePreview
                            source={{
                                uri : profile_picture_url === "" ? "https://img.icons8.com/officel/80/000000/person-male.png" :
                                profile_picture_url
                            }}
                        />

                    </SelectProfilePictureContainer>

            </ContentContainer>
        </Container>
    );
}

export default SignUp;