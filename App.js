import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <Text style={styles.textStyle}>Welcome to my app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEDE7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontFamily: "fantasy",
    color: '#868B8E',
    fontSize:32,
  }
});
