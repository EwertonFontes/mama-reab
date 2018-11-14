import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux'

import BackgroundImage from './../components/BackgroundImage'
import ButtonTreatments from './../components/ButtonTreatments'

export default class TreatmentType extends React.Component {
  renderTreatment (treat) {
    return (  
      <TouchableOpacity  key={treat.key} style={styles.bottomItem}
        onPress={() => Actions.cirurgicTreatment({treatmentType: treat.type, title: treat.name})}  >
        <ButtonTreatments name={treat.name} />
      </TouchableOpacity>
    ) 
  }
  
  render() {
    return (
      <BackgroundImage>
        <View>
          <View style={styles.bottom}>
            { this.props.treatment.map((treat) => this.renderTreatment(treat)) }
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
