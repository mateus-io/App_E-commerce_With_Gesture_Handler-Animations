import React from 'react';

import Router from './src/Router';
import { 
  useFonts, 
  Nunito_900Black_Italic, 
  Nunito_600SemiBold
} from '@expo-google-fonts/nunito';

import LottieView from "lottie-react-native";
import { AppProvider } from './src/context';

import { View } from 'react-native';

const AppLoading = () => {
  return (
    <View style= {{ backgroundColor : '#beef', display : 'flex', alignItems : 'center', justifyContent : 'center', height : '100%' }}>
      <LottieView 
        source={require('./assets/animations/loading.json')}
        autoPlay
        loop 
      />
    </View>
  );
}

export default function App() {
  let [fontsLoaded] = useFonts({
    Nunito_900Black_Italic,
    Nunito_600SemiBold
  });
  return !fontsLoaded ? 
                        <AppLoading /> :
                        <AppProvider>
                          <Router/>
                        </AppProvider>;
}
