import React from 'react'
import { Scene, Router, Stack } from 'react-native-router-flux'

import Home from './src/Home'
import About from './src/About'
import VideoScreen from './src/VideoScreen'
import TreatementType from './src/TreatementType'
import CirurgicTreatment from './src/CirurgicTreatment'
import ListVideo from './src/ListVideo'
import Esvaziamento from './src/Esvaziamento'
import TreatmentsReconstruction from './src/TreatmentsReconstruction'
import BeforeExercises from './src/BeforeExercises'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Stack key="root" initial>
          <Scene initial key='home' component={Home} title='Home' /> 
          <Scene key='about' component={About} title='Sobre' />
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
