import React from 'react'
import { StyleSheet, Text, View, ScrollView, Button, TouchableOpacity, Image, Dimensions } from 'react-native'
import { Video, ScreenOrientation } from 'expo'
import VideoPlayer from '@expo/videoplayer'
import PlaylistVideo from './../components/Playlist'

const Thumbnail = { uri: "http://i.imgur.com/HKVgAl0.jpg" }

export default class VideoScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      moreInfo: false,
      height: 300,
      isPortrait: true,
      show: true
    }
  }

  switchModePortrait () {
    ScreenOrientation.allow(ScreenOrientation.Orientation.PORTRAIT)
    this.setState({height: 300, isPortrait: !this.state.isPortrait, show: !this.state.show})
  }

  switchModeLandscape () {
    const { width, height } = Dimensions.get('window')
    ScreenOrientation.allow(ScreenOrientation.Orientation.LANDSCAPE)
    this.setState({height: height, isPortrait: !this.state.isPortrait, show: !this.state.show})
  }

  renderMoreInfo () {
    return <Text>Descrição do Exercicio</Text> 
  }

  renderPlaylist (exercicio) {
    return <PlaylistVideo key={exercicio.key} image={Thumbnail} name={exercicio.name} />
  }

  renderShowPage() {
    return(
      <View>
        <View style={styles.top} >
          <Text>{this.props.title}</Text>
          { this.state.moreInfo ? this.renderMoreInfo() : <View /> }
          <TouchableOpacity onPress={() => this.setState({ moreInfo: !this.state.moreInfo })} >
            <Text>{ !this.state.moreInfo ? 'Mais' : 'Menos' }</Text>
          </TouchableOpacity>
        </View>

        <ScrollView>
          { this.props.exercicios.map((exercicio) => this.renderPlaylist(exercicio)) }
        </ScrollView>
      </View>
    )
  }

  render() {
    return (
        <View style={styles.container} >
          
          <VideoPlayer
              videoProps={{  shouldPlay: true,
                resizeMode: Video.RESIZE_MODE_CONTAIN,
                source: { uri: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8' },
                isMuted: false}}
              isPortrait={this.state.isPortrait}
              playFromPositionMillis={0}
              switchToLandscape={()=> this.switchModeLandscape()}
              switchToPortrait={()=> this.switchModePortrait()}
              style={{ height: this.state.height }}
            />
          { this.state.show ? this.renderShowPage() : <View /> }        
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF'
  },
  top: {
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: '#FFF',  
  }
})