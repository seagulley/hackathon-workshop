import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Calendar, ExpandableCalendar } from 'react-native-calendars'

const CalendarPicker = ({ todayDateString, selectedDate, setSelectedDate }) => {
  return (
    <Calendar
      enableSwipeMonths={true}
      onDayPress={(day) => {
        setSelectedDate(day.dateString)
      }}
      markedDates={{
        [todayDateString]: {selected: true, selectedColor: 'green'},
        [selectedDate]: {selected: true},
      }}
    />
  )
}

export default CalendarPicker