// Main contains the main page with all of the features.

import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable
} from 'react-native'
import { useEffect, useState } from 'react'
import CalendarPicker from '../components/CalendarPicker.js'
import NewEntry from '../components/NewEntry'

// DiaryView
const DiaryView = ({ mood, diaryEntries, setDiaryEntries, selectedDate, setSelectedDate, todayDateString, editEntries }) => {
  useEffect(() => saveMood(selectedDate, mood), [mood])

  const saveMood = (newDate, newMood) => {
    diaryEntries.forEach((entry, index) => {
      if (entry.date === newDate) {
        editEntries(entry.id, newDate, newMood, entry.entry)
      }
      else if (index === diaryEntries.length - 1) {
        addEntries(newDate, newMood, '')
      }
    })
  }

  const saveEntry = (newDate, newEntry) => {
    diaryEntries.forEach((entry, index) => {
      if (entry.date === newDate) {
        editEntries(entry.id, newDate, entry.mood, newEntry)
      }
      else if (index === diaryEntries.length - 1) {
        addEntries(newDate, null, newEntry)
      }
    })
  }

  const getEntry = (date) => {
    diaryEntries.forEach(entry => {
      if (entry.date === date) {
        return entry
      }
    })
    return null
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.root}>
        <View style={styles.calendar}>
          <CalendarPicker 
            diaryEntries={diaryEntries}
            todayDateString={todayDateString}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </View>

        <View style={styles.container}>
          <Text>Write an entry for {selectedDate}</Text>
          <NewEntry 
            currentDate={selectedDate}
            getEntry={getEntry}
            saveEntry={saveEntry}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    marginBottom: '20%'
  },
  headerWrapper: {
    width: '80%',
    alignItems: 'start'
  },
  headerText: {
    fontSize: '20rem'
  },
  calendar: {
    flex: 1,
    // marginTop: 40
  },
  root: {
    flex: 1
  }
})

export default DiaryView
