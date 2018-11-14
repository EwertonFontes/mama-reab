import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const ButtonTreatments = ({name}) => {
  return (
    <View style={styles.bottomItemInner} > 
      <Text style={styles.text}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
   bottomItemInner: {
    flex: 1,
    backgroundColor: '#9E3256',
    opacity: 1,
   },
   text: {
     textAlign: 'center',
     paddingTop: '40%',
     color: '#FFF',
     fontWeight: 'bold',
     fontSize: 20,
   }
})

export default ButtonTreatments