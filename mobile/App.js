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
        <Text>Hello! How are you feeling today?</Text>
        <Button onPress={() => {setViewMain(true)}} title='next'/>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  }
})

export default App
