import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, FlatList, Alert, Button } from 'react-native'
import Main from './src/views/Main'


const App = () => {
  const [viewMain, setViewMain] = useState(false)

  if (viewMain) {
    return <Main />
  }

  return (
      <View style={styles.container}>
        <View style={styles.headerWrapper}>
          <Text style={styles.headerText}>Hello! 👋</Text>
          <Text style={styles.headerText}>How are you feeling today?</Text>
        </View>
        <Button onPress={() => {setViewMain(true)}} title='next'/>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',  
    marginBottom: '20%',
  },
  headerWrapper: {
    width: '80%',
    alignItems: 'start',
  },
  headerText: {
    fontSize: '20rem'
  }
})

export default App
