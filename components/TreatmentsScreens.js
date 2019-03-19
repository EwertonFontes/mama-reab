import React from 'react'
import { StyleSheet, View, ScrollView, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'

import BackgroundImage from './BackgroundImage'

export const TreatmentsScreens = ({children}) => {
  return (
    <BackgroundImage>
      <Text style={styles.title}>Qual a sua dificuldade</Text>
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
  title: {
    color: 'white',
    fontSize: 25,
  },
})

export default TreatmentsScreens
