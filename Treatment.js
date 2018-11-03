import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux'

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
        <View style={styles.bottomItemInner} > 
          <Text style={styles.text}>{treatment.name}</Text>
        </View>
      </TouchableOpacity> 
    ) 
  }
  
  render() {
    return (
      <ImageBackground source={require('./images/bg.jpg')} imageStyle={{resizeMode: 'cover'}} style={styles.container} >
      <View stles={styles.container}> 
        <View style={styles.bottom}>
          { this.state.treatment.map((treat) => this.renderTreatment(treat))  }
        </View>
      </View>
      </ImageBackground>
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
