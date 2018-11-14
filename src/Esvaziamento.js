import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux'

import BackgroundImage from './../components/BackgroundImage'
import ButtonTreatments from './../components/ButtonTreatments'

export default class Esvaziamento extends React.Component {
  renderTreatment (treatType) {
    return (  
      <TouchableOpacity key={treatType.key} style={styles.bottomItem} 
      onPress={ treatType.key === 0 ? () => Actions.treatmentsReconstruction({treat: treatType.type, title:treatType.name}) : 
        () => Actions.beforeExercises({treat: treatType.type, title:treatType.name})} >
        <ButtonTreatments name={treatType.name} />
      </TouchableOpacity>
    )
  }
  
  render() { 
    return (
      <BackgroundImage>
        <View stles={styles.container}>
          <View style={styles.bottom}>
            { this.props.treat.map((treatType) => this.renderTreatment(treatType)) }
          </View>
        </View>
      </BackgroundImage>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
   bottom: {
     height: '90%',
     flexDirection: 'row',
     flexWrap: 'wrap',
     padding: 5,
   },
   bottomItem: {
    width: '50%',
    height: '50%',
    padding: 5,
   }
});
