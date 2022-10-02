import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, FlatList, Alert, Button, Pressable } from 'react-native'
import DiaryView from './src/views/DiaryView'
import HomeView from './src/views/HomeView'

const App = () => {
  const [viewMain, setViewMain] = useState(false)

  if (viewMain) {
    return <DiaryView />
  }

  return (
      <HomeView onPress={() => setViewMain(true)} />
    )
}


export default App
