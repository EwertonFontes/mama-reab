import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import { Actions } from 'react-native-router-flux'

import BackgroundImage from './../components/BackgroundImage'

const Footer = styled.Text`
  color: #FFF;
  font-size: 15;
  margin-top: 100;
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
      <BackgroundImage>  
        <ButtonGroup>
          <TouchableOpacity style={styles.btnSobre} onPress={() => Actions.treatementType({title: 'Cirurgico'})} >
            <TextBtn>Tratamento</TextBtn>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSobre} onPress={() => Actions.about()} >
            <TextBtn>Sobre</TextBtn>
          </TouchableOpacity>
        </ButtonGroup>
        <Footer>Desenvolvido por Ewerton Fontes</Footer>
      </BackgroundImage>
    )
  }
}

const styles = StyleSheet.create({
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
