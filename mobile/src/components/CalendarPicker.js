import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Calendar, ExpandableCalendar } from 'react-native-calendars'

let todayDate = new Date()
const todayLocaleDate = todayDate.toLocaleDateString()
todayDate = new Date(todayLocaleDate)
const todayDateString = todayDate.toISOString().split('T')[0]

const CalendarPicker = () => {
  const [selectedDate, setSelectedDate] = useState(todayDateString)

  return (
    <Calendar
      enableSwipeMonths={true}
      onDayPress={(day) => {
        setSelectedDate(day.dateString)
      }}
      markedDates={{
        [todayDateString]: {selected: true, selectedColor: 'green',},
        [selectedDate]: {selected: true},
      }}
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