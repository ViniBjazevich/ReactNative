import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Main() {
  console.log('app excecuted')
  return (
    <View style={styles.container}>
      <Text style={styles.bigBlue}>This is my iOS App</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#808090',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
});