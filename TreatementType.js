import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import { Actions } from 'react-native-router-flux'

export default class TreatmentType extends React.Component {
  renderTreatment (treat) {
    return (  
      <TouchableOpacity  key={treat.key} style={styles.bottomItem}
        onPress={() => Actions.cirurgicTreatment({treatmentType: treat.type, title: treat.name})}  >
        <View style={styles.bottomItemInner} > 
          <Text style={styles.text}>{treat.name}</Text>  
        </View>
      </TouchableOpacity>
    ) 
  }
  
  render() {
    return (
      <View stles={styles.container}>
        <View style={styles.bottom}>
          { this.props.treatment.map((treat) => this.renderTreatment(treat)) }
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
