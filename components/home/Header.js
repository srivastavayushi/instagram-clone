import { View, Image, StyleSheet } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View>
      <Image source={require('../../assets/header-logo.png')} style={styles.logo}/>
        <Text>Hello</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    logo:{
        height: 100,
        width: 50,
        resizeMode:'contain'
    },
});
export default Header