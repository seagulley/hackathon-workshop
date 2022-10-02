import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, FlatList, Alert } from 'react-native'

import HomeView from './src/views/HomeView'
import DiaryView from './src/views/DiaryView'

const App = () => {
  // return <HomeView />
  return <DiaryView />
}

export default App
