import React, { useState } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Alert,
  Button
} from 'react-native'

const MoodSelector = ({ mood, setMood }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.button, mood === 1 ? styles.selected : styles.button1]}>
        <Button
          onPress={() => {
            mood !== 1 ? setMood(1) : setMood(null)
          }}
          title="1"
          color={'white'}
        />
      </View>
      <View style={[styles.button, mood === 2 ? styles.selected : styles.button2]}>
        <Button
          onPress={() => {
            mood !== 2 ? setMood(2) : setMood(null)
          }}
          title="2"
          color={'white'}
        />
      </View>
      <View style={[styles.button, mood === 3 ? styles.selected : styles.button3]}>
        <Button
          onPress={() => {
            mood !== 3 ? setMood(3) : setMood(null)
          }}
          title="3"
          color={'white'}
        />
      </View>
      <View style={[styles.button, mood === 4 ? styles.selected : styles.button4]}>
        <Button
          onPress={() => {
            mood !== 4 ? setMood(4) : setMood(null)
          }}
          title="4"
          color={'white'}
        />
      </View>
      <View style={[styles.button, mood === 5 ? styles.selected : styles.button5]}>
        <Button
          onPress={() => {
            mood !== 5 ? setMood(5) : setMood(null)
          }}
          title="5"
          color={'white'}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    aspectRatio: 1,
    borderRadius: '50%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4
  },
  button1: {
    backgroundColor: '#3f5074'
  },
  button2: {
    backgroundColor: '#587a70'
  },
  button3: {
    backgroundColor: '#7ba068'
  },
  button4: {
    backgroundColor: '#c0ce86'
  },
  button5: {
    backgroundColor: '#ffefa6'
  },
  selected: {
    backgroundColor: 'black',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginVertical: '5%'
  }
})

export default MoodSelector
