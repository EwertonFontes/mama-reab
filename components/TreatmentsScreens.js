import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Actions } from 'react-native-router-flux'

import BackgroundImage from './BackgroundImage'

export const TreatmentsScreens = ({children}) => {
  return (
    <BackgroundImage>
      <View style={styles.bottom}>
        {children}
      </View>
    </BackgroundImage>
  )
}

const styles = StyleSheet.create({
  bottom: {
    height: '90%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5,
  }
})

export default TreatmentsScreens
