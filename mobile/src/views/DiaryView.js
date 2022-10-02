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
const DiaryView = ({ mood, diaryEntries, setDiaryEntries, selectedDate, setSelectedDate, todayDateString }) => {
  useEffect(() => saveMood(selectedDate, mood), [mood])

  const saveMood = (newDate, newMood) => {
    setDiaryEntries({
      ...diaryEntries,
      [newDate]: {
        ...diaryEntries[newDate],
        mood: newMood
      }
    })
  }

  const saveEntry = (newDate, newEntry) => {
    setDiaryEntries({
      ...diaryEntries,
      [newDate]: {
        ...diaryEntries[newDate],
        entry: newEntry
      }
    })
  }

  const getEntry = (date) => {
    return diaryEntries[date]
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
