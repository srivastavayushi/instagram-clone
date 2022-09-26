import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import Header from '../components/home/Header';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'black',
        flex:1
    },
});

export default HomeScreen