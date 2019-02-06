import React from 'react'
import { Scene, Router, Stack } from 'react-native-router-flux'

import Home from './src/Home'
import About from './src/About'
import Limitations from './src/Limitations'
import VideoScreen from './src/VideoScreen'
import ListVideo from './src/ListVideo'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Stack key="root" initial>
          <Scene initial key='home' component={Home} title='Home' /> 
          <Scene key='about' component={About} title='Sobre' />
          <Scene key='limitations' component={Limitations} title='Limitações' />
          <Scene key='listVideo' component={ListVideo} title='Lista de Videos' />
          <Scene key='video' component={VideoScreen} title='Video' hideNavBar={true} />
        </Stack>
      </Router>
    )
  }
}
