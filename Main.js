import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native'
import styled from 'styled-components'

const Container = styled.View` 
  flex: 1;
  backgroundColor: #FFF;
  align-items: center;
`

const Footer = styled.Text`
  color: #000;
  font-size: 10;
  margin-top: 100;
`

export default class Main extends React.Component {
  render() {
    return (
      <Container>
        
        <Footer>Desenvolvido por Ewerton Fontes</Footer>
      </Container>
    )
  }
}
