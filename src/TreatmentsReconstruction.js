import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'

import TreatmentsScreens from './../components/TreatmentsScreens'
import ButtonTreatments from './../components/ButtonTreatments'

export default class TreatmentsReconstruction extends React.Component {
  renderTreatment (treatType) {
    return (  
      <TouchableOpacity key={treatType.key} style={styles.bottomItem} onPress={ () => Actions.beforeExercises({treat: treatType.type, title:treatType.name})} >
        <ButtonTreatments name={treatType.name} />
      </TouchableOpacity>
    )
  }
  
  render() { 
    return <TreatmentsScreens>{ this.props.treat.map((treatType) => this.renderTreatment(treatType)) }</TreatmentsScreens>
  }
}

const styles = StyleSheet.create({
   bottomItem: {
    width: '50%',
    height: '50%',
    padding: 5,
   }
});
