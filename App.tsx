import React from 'react';

import Router from './src/Router';
import { 
  useFonts, 
  Nunito_900Black_Italic, 
  Nunito_600SemiBold
} from '@expo-google-fonts/nunito';

import { View, Text } from 'react-native';

const AppLoading = () => {
  return (
    <View style= {{ backgroundColor : '#beef', display : 'flex', alignItems : 'center', justifyContent : 'center', height : '100%' }}>
      <Text>Loading...</Text>
    </View>
  );
}

export default function App() {
  let [fontsLoaded] = useFonts({
    Nunito_900Black_Italic,
    Nunito_600SemiBold
  });
  return !fontsLoaded ? <AppLoading /> : <Router/>;
}
