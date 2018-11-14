import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'

import TreatmentsScreens from './../components/TreatmentsScreens'
import ButtonTreatments from './../components/ButtonTreatments'

export default class TreatmentType extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      treatment: [{
        key: 0, name: 'Mastectomia Total', type: [
          {key: 0, name: 'Com Esvaziamento Axiliar'},
          {key: 1, name: 'Sem Esvaziamento Axiliar' }]
        }, {
        key: 1, name: 'Mastectomia Parcial', type: [
          {key: 0, name: 'Com Esvaziamento Axiliar'},
          {key: 1, name: 'Sem Esvaziamento Axiliar' }]
        }
      ]
    }
  }


  renderTreatment (treat) {
    return (  
      <TouchableOpacity  key={treat.key} style={styles.bottomItem}
        onPress={() => Actions.cirurgicTreatment({treatmentType: treat.type, title: treat.name})}  >
        <ButtonTreatments name={treat.name} />
      </TouchableOpacity>
    ) 
  }
  
  render() {
    return <TreatmentsScreens>{ this.state.treatment.map((treat) => this.renderTreatment(treat)) }</TreatmentsScreens>
  }
}

const styles = StyleSheet.create({
   bottomItem: {
    width: '50%',
    height: '50%',
    padding: 5,
   }
});
