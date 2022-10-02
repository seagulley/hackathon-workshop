import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars'

const CalendarPicker = () => {
  return (
    <Calendar />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 50,
  }
})

export default CalendarPicker
