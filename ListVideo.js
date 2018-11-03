import React from 'react'
import { StyleSheet, Text, View, ScrollView, Button, TouchableOpacity, Image } from 'react-native'
import { Video } from 'expo'
import VideoPlayer from '@expo/videoplayer'
import PlaylistVideo from './Playlist'
import { Actions } from 'react-native-router-flux'

const Thumbnail = { uri: "http://i.imgur.com/HKVgAl0.jpg" }

export default class ListVideo extends React.Component {
  
  renderPlaylist (exercicio) {
    return (
      <TouchableOpacity key={exercicio.key} style={styles.bottomItem} onPress={() => Actions.video({title: this.props.title + ' - ' + exercicio.name, exercicios: this.props.exercicios })} >  
        <PlaylistVideo image={Thumbnail} name={exercicio.name} />
      </TouchableOpacity>
    )
  } 

  render() {
    return (       
      <ScrollView style={styles.container} >
        <View>
          { this.props.exercicios.map((exercicio) => this.renderPlaylist(exercicio)) }
        </View> 
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF' 
  },
  top: {
     height: '50%',
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: '#FFF',  
  },
  profileImage: {
    width: 140,
    height: 40,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: '#fff',
    backgroundColor: '#eee',
  }
})