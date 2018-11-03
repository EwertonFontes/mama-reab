import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import { Actions } from 'react-native-router-flux'

export default class BeforeExercises extends React.Component {
  renderTreatment (treatType) {
    return (  
      <TouchableOpacity key={treatType.key} style={styles.bottomItem} onPress={() => Actions.listVideo({exercicios: treatType.exercicio, title:treatType.name})}>
        <View style={styles.bottomItemInner} >
          <Text style={styles.text}>{treatType.name}</Text>  
        </View>
      </TouchableOpacity>
    )
  }
  
  render() { 
    return (
      <View stles={styles.container}>
        <View style={styles.bottom}>
          { this.props.treat.map((treatType) => this.renderTreatment(treatType)) }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
   bottom: {
     height: '90%',
     backgroundColor: '#FFF',
     flexDirection: 'row',
     flexWrap: 'wrap',
     padding: 5,
   },
   bottomItem: {
    width: '50%',
    height: '50%',
    padding: 5,
   },
   bottomItemInner: {
    flex: 1,
    backgroundColor: '#9E3256',
    opacity: 1,
   },
   text: {
     textAlign: 'center',
     color: '#FFF',
     fontWeight: 'bold',
     fontSize: 20,
   }
});
