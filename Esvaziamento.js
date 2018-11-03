import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import { Actions } from 'react-native-router-flux'

//Actions.esvaziamento({treat: this.state.cea, title:treatType.name})
export default class Esvaziamento extends React.Component {
  renderTreatment (treatType) {
    return (  
      <TouchableOpacity key={treatType.key} style={styles.bottomItem} 
      onPress={ treatType.key === 0 ? () => Actions.treatmentsReconstruction({treat: treatType.type, title:treatType.name}) : 
        () => Actions.beforeExercises({treat: treatType.type, title:treatType.name})} >
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
