import React from 'react'
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'

import PlaylistVideo from './../components/Playlist'

const Thumbnail = { uri: "http://i.imgur.com/HKVgAl0.jpg" }

export default class ListVideo extends React.Component {
  
  renderPlaylist (exercicio) {
    return (
      <TouchableOpacity key={exercicio.key} onPress={() => Actions.video({title: this.props.title + ' - ' + exercicio.name, exercicios: this.props.exercicios })} >  
        <PlaylistVideo image={Thumbnail} name={exercicio.name} />
      </TouchableOpacity>
    )
  } 

  render() {
    return (
      <ScrollView style={styles.container} >
        <View>{ this.props.exercicios.map((exercicio) => this.renderPlaylist(exercicio)) }</View> 
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF' 
  },
})