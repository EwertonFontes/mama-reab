import React from 'react';
import styled from 'styled-components'
import { StyleSheet, Text, View, Button, TouchableOpacity, Imag, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux'

const Container = styled.View` 
  flex: 1;
  backgroundColor: #FFF;
  align-items: center;
`

const Footer = styled.Text`
  color: #FFF;
  font-size: 15;
  margin-top: 100;
`

const Logo = styled.Image`
  width: 300;
  height: 150; 
  margin-top: 70;
`

const ButtonGroup = styled.View`
  margin-top: 30;
`

const TextBtn = styled.Text`
 color: #FFF;
 font-size: 20;
`

export default class Home extends React.Component {
  render() {
    return (
      <ImageBackground source={require('./images/bg.jpg')} imageStyle={{resizeMode: 'cover'}} style={styles.container} >  
        {/*<Logo source={require('./logo.png')} />*/}
        <ButtonGroup>
          <TouchableOpacity style={styles.btnSobre} onPress={() => Actions.treatment()} >
            <TextBtn>Tratamento</TextBtn>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSobre} onPress={() => Actions.about()} >
            <TextBtn>Sobre</TextBtn>
          </TouchableOpacity>
        </ButtonGroup>
        <Footer>Desenvolvido por Ewerton Fontes</Footer>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnSobre: {
     margin: 5,
     height: 45,
     width: 300,
     borderRadius: 5,
     borderWidth: 1,
     borderColor: '#9E3256',
     backgroundColor: '#9E3256',
     alignItems: 'center',
     justifyContent: 'center'
  },
});
