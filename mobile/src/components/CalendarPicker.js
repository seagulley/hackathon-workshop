import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Calendar, ExpandableCalendar } from 'react-native-calendars'

const CalendarPicker = ({ todayDateString, selectedDate, setSelectedDate, diaryEntries }) => {
  const moodObject = {}
  diaryEntries.forEach((entry) => {
    if (entry.mood != null) {
      moodObject[entry.date] = {
        marked: true, 
        dotColor: (diaryEntries[date].mood === 1 && '#3f5074') || (diaryEntries[date].mood === 2 && '#587a70') || (diaryEntries[date].mood === 3 && '#7ba068') || (diaryEntries[date].mood === 4 && '#c0ce86') || (diaryEntries[date].mood === 5 && '#ffefa6')
      }
    }
  })

  return (
    <Calendar
      enableSwipeMonths={true}
      onDayPress={(day) => {
        setSelectedDate(day.dateString)
      }}
      markedDates={{
        ...moodObject,
        [todayDateString]: {...moodObject[todayDateString], selected: true, selectedColor: '#bdc3c7'},
        [selectedDate]: {...moodObject[selectedDate], selected: true},
      }}
    />
  )
}

export default CalendarPicker