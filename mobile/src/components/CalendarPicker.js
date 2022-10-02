import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars'

const CalendarPicker = () => {
  const [markedDate, setMarkedDate] = useState({})

  return (
    <Calendar
      enableSwipeMonths = {true}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 50
  }
})

export default CalendarPicker
