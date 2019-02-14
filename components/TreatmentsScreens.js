import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux'

import BackgroundImage from './BackgroundImage'

export const TreatmentsScreens = ({children}) => {
  return (
    <BackgroundImage>
      <ScrollView  contentContainerStyle={styles.container}>
        <View style={styles.bottom}>
          {children}
        </View>
      </ScrollView>
    </BackgroundImage>
  )
}

const styles = StyleSheet.create({
  bottom: {
    height: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5,
  },
  container: {
    flex: 1,
  },
})

export default TreatmentsScreens
