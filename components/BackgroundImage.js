import React, { Component } from 'react'
import { StyleSheet, ImageBackground } from 'react-native'

class BackgroundImage extends Component {
  render () {
    return (
      <ImageBackground source={require('./../images/logobg.jpeg')} imageStyle={{resizeMode: 'cover', opacity: 0.3}} style={styles.container} >
        {this.props.children}
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default BackgroundImage