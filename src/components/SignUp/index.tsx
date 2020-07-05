import React, { useState, useEffect } from 'react';

import {
    Container,
    ContentContainer,
    SignUpContainer,
    SelectProfilePictureContainer,
    SelectProfilePictureTouchable,
    SelectedProfilePicturePreview,
    UploadLabel
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

import SignIn from '../SignIn';

import api from '../../api/api';

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
    
    //profile_picture_url

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
    }

    return (
        <Container
            onPress={ () => Keyboard.dismiss()}
        >
            <ContentContainer>
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
                            underlineColor='#25f'
                            numberOfLines={1}
                            autoCorrect={false}
                            style={{
                                marginTop : 5
                            }}
                        />

                        <TextInput
                            label="Password"
                            value={password}
                            onChangeText={setPassword}
                            mode='outlined'
                            selectionColor='#25f'
                            numberOfLines={1}
                            autoCorrect={false}
                            style={{
                                marginTop : 5
                            }}
                        />

                        <TextInput
                            label="Username"
                            value={userName}
                            onChangeText={setUsername}
                            mode='outlined'
                            selectionColor='#25f'
                            numberOfLines={1}
                            autoCorrect={false}
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
                                color="#000"
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