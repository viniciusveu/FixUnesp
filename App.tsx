import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Login from './src/pages/Login'
import { View } from 'react-native'

export default function App() {
  return (
    <View>
      <Login />
      <StatusBar style="auto" />
    </View>
  );
}

