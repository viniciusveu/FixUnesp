import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Login from './src/pages/Login'
import { KeyboardAvoidingView, StyleSheet } from 'react-native'

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.background}>
      <Login />
      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
      flex: 1,
      backgroundColor: "#3333"
  },

})
