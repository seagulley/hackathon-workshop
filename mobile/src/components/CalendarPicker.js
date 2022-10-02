import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Calendar, ExpandableCalendar } from 'react-native-calendars'

const CalendarPicker = ({ todayDateString, selectedDate, setSelectedDate, diaryEntries }) => {
  const moodObject = {}
  const diaryEntriesArr = Object.keys(diaryEntries)
  diaryEntriesArr.forEach(date => {
    moodObject[date] = {marked: true,}
  })

  return (
    <Calendar
      enableSwipeMonths={true}
      onDayPress={(day) => {
        setSelectedDate(day.dateString)
      }}
      markedDates={{
        ...moodObject,
        [todayDateString]: {selected: true, selectedColor: 'green', ...moodObject[todayDateString]},
        [selectedDate]: {selected: true, ...moodObject[selectedDate]},
      }}
    />
  )
}

export default CalendarPicker