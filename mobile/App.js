import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, FlatList, Alert, Button, Pressable } from 'react-native'
import DiaryView from './src/views/DiaryView'
import HomeView from './src/views/HomeView'

const App = () => {
  const [viewMain, setViewMain] = useState(false)
  const [mood, setMood] = useState(null)

  if (viewMain) {
    return (
      <DiaryView 
        mood={mood}
        setViewMain={setViewMain}
      />
    )
  }

  return (
      <HomeView 
        onPress={() => setViewMain(true)} 
        mood={mood}
        setMood={setMood} 
      />
    )
}


export default App
