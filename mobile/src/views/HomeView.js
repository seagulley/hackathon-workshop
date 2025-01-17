import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import MoodSelector from '../components/MoodSelector'

const HomeView = ({ navigation, mood, setMood, selectedDate, diaryEntries }) => {
  useEffect(() => {
    if (diaryEntries[selectedDate]) {
      setMood(diaryEntries[selectedDate].mood)
    } else {
      setMood(null)
    }
  }, [selectedDate])

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Text style={styles.headerText}>Hello! 👋</Text>
        <Text style={styles.headerText}>How are you feeling today?</Text>
      </View>

      <MoodSelector mood={mood} setMood={setMood} />

      <Pressable
        onPress={() => navigation.navigate('DiaryView')}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'black' : 'white'
          },
          styles.button
        ]}
      >
        <Text>Next</Text>
      </Pressable>  
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20%'
  },
  headerWrapper: {
    width: '80%',
    alignItems: 'start'
  },
  headerText: {
    fontSize: '20rem'
  },
  button: {
    backgroundColor: 'white',
    borderRadius: '20%',
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: '4%',
    paddingVertical: '2%',
    alignSelf: 'flex-end',
    marginRight: '10%'
  }
})

export default HomeView
