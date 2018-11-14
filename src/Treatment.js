import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux'

import BackgroundImage from './../components/BackgroundImage'
import ButtonTreatments from './../components/ButtonTreatments'

export default class Treatment extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        treatment: [{
          key: 0, name: 'Cirúrgico',  treatment: [{ 
            key: 0, name: 'Mastectomia Total', type: [
             {key: 0, name: 'Com Esvaziamento Auxiliar'},
             {key: 1, name: 'Sem Esvaziamento Auxiliar' }]
            }, {
            key: 1, name: 'Mastectomia Parcial', type: [
             {key: 0, name: 'Com Esvaziamento Auxiliar'},
             {key: 1, name: 'Sem Esvaziamento Auxiliar' }]
            }]
         }]
    }
  }

  renderTreatment (treatment) {
    return (  
      <TouchableOpacity  key={treatment.key} onPress={() => Actions.treatementType({treatment: treatment.treatment, title: treatment.name})} style={styles.bottomItem} >
        <ButtonTreatments name={treatment.name} />
      </TouchableOpacity> 
    ) 
  }
  
  render() {
    return (
     <BackgroundImage>
      <View stles={styles.container}> 
          <View style={styles.bottom}>
            { this.state.treatment.map((treat) => this.renderTreatment(treat))  }
          </View>
        </View>
      </BackgroundImage>
    )
  }
}

const styles = StyleSheet.create({
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
