import React from 'react';
import { StyleSheet, Text, ScrollView, View, Button, TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components'

import BackgroundImage from './../components/BackgroundImage'

const Footer = styled.Text`
  color: #000;
  font-size: 10;
  margin-top: 100;  
`

const Container = styled.View` 
  flex: 1;
  align-items: center;
`

export default class About extends React.Component {
  render() {
    return (
      <BackgroundImage>   
        <ScrollView style={styles.container}>
          <Text style={styles.textBody}>O tratamento do câncer de mama é primariamente cirúrgico, 
          e em muitos casos é complementado por tratamento de quimioterapia e radioterapia. 
          Esse tipo de tratamento é agressivo e além de conseqüências emocionais pode ter conseqüências físicas para a paciente,
          como dificuldade para mexer o braço falta de força e dor.</Text>

          <Text style={styles.textBody}>Através do Mamareab você pode voltar a ter uma vida mais saudável e sem dores,
          com exercícios facéis no conforto da sua casa.</Text>

          <Container>
            <Footer>Desenvolvido por {'<InSite />'}</Footer>
          </Container>
        </ScrollView>
      </BackgroundImage>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '5%',
    paddingLeft: '3%',
    paddingRight: '2%',
  },
  textBody: {
    fontSize: 18,
  }
})
