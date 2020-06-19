import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import Svg, { Path, SvgXml } from 'react-native-svg';

const WaveContainer = styled.View `
  width : 100%;
  height : 50%;
  flex : 1;
  position : relative;
  display : flex;  
`;

const ItensContainer = styled.View `
  display : flex;
  flex : 1;
  background : #Bee;
  height : 100%;
  width : 100%;
  flex-direction : row;
  flex-wrap : wrap;
  justify-content : center;
  align-items : center;
`;
const ItensContainerWrapper = styled.ScrollView `
  flex : 1;
  background : #Bee;
  display : flex;
`;
const Item = styled.View `
  width : 150px;
  height : 150px;
  background : #fff;
  position : relative;
  margin : 20px 5px;
  display : flex;
  align-items : center;
  border-radius : 20px;
`;
const ItemImageContainer = styled.View `
  display : flex;
  align-items : center;
  justify-content : center;
  background : #bff;
  width : 60px;
  height : 60px;
  border-radius : 20px;
  position : absolute;
  top : 50px;
`;

const MainImage = styled.Image `
  width : 100%;
  height : 87%;
  position : absolute;
  top : 38px;
  z-index : -1;
`;


export default function DashBoard() {
  
  const xml =  `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="150 55 1145 310">
    <path fill="#B3DEC1" d="M0,256L48,266.7C96,277,192,299,288,261.3C384,224,480,128,576,122.7C672,117,768,203,864,218.7C960,235,1056,181,1152,186.7C1248,192,1344,256,1392,288L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
  </svg> `;
  const waveItem =  `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="150 130 1145 310">
    <path fill="#Bef" d="M0,256L48,266.7C96,277,192,299,288,261.3C384,224,480,128,576,122.7C672,117,768,203,864,218.7C960,235,1056,181,1152,186.7C1248,192,1344,256,1392,288L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
  </svg> `;
  
  return (
    
    <>
      <View style={styles.container}>
        <WaveContainer>
            <SvgXml xml={xml} width="100%" height="150px" />
            <MainImage source={ {uri : 'https://images.unsplash.com/photo-1569605803663-e9337d901ff9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80'} } />
        </WaveContainer>
        <ItensContainerWrapper
          
        >
          <ItensContainer>
            <Item>
              <SvgXml xml={waveItem} width="100%" height="150px" />
              <ItemImageContainer>
                <Feather
                  size={40}
                  name="battery"
                  color="#210124"/>
              </ItemImageContainer>
            </Item>
            <Item>
              <SvgXml xml={waveItem} width="100%" height="150px" />
              <ItemImageContainer>
                <Feather 
                  size={40} 
                  name="box"
                  color="#210124"/>
              </ItemImageContainer>
            </Item>
            <Item>
              <SvgXml xml={waveItem} width="100%" height="150px" />
              <ItemImageContainer>
                <Feather 
                  size={40}
                  name="bell"
                  color="#210124"/>
              </ItemImageContainer>
            </Item>
            <Item>
              <SvgXml xml={waveItem} width="100%" height="150px" />
              <ItemImageContainer>
                <Feather 
                  size={40}
                  name="award"
                  color="#210124"/>
              </ItemImageContainer>
            </Item>
          </ItensContainer>
        </ItensContainerWrapper>
        
      </View>
      
    </>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#Bee',
        display : 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position : 'relative'
    },
});
