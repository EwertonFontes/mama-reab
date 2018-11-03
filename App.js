import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native'
import { Scene, Router, Stack } from 'react-native-router-flux'
import styled from 'styled-components'

import Main from './Main'
import Home from './Home'
import About from './About'
import Treatment from './Treatment'
import VideoScreen from './VideoScreen'
import TreatementType from './TreatementType'
import CirurgicTreatment from './CirurgicTreatment'
import ListVideo from './ListVideo'
import Esvaziamento from './Esvaziamento'
import TreatmentsReconstruction from './TreatmentsReconstruction'
import BeforeExercises from './BeforeExercises'

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

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Stack key="root" initial>
            <Scene initial key='home' component={Home} title='Home' /> 
            <Scene key='about' component={About} title='Sobre' />
            <Scene key='treatment' component={Treatment} title='Tratamento' />
            <Scene key='treatementType' component={TreatementType} title='Tipo de Tratamento' />
            <Scene key='cirurgicTreatment' component={CirurgicTreatment} title='Tratamento Cirurgico' />
            <Scene key='esvaziamento' component={Esvaziamento} title='Esvaziamento' />
            <Scene key='treatmentsReconstruction' component={TreatmentsReconstruction} title='TreatmentsReconstruction' />
            <Scene key='beforeExercises' component={BeforeExercises} title='BeforeExercises' />
            <Scene key='listVideo' component={ListVideo} title='Lista de Videos' />
            <Scene key='video' component={VideoScreen} title='Video' hideNavBar={true} />
        </Stack>
      </Router>
    )
  }
}
