import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'

import CalendarPicker from '../components/CalendarPicker.js'

const CalendarView = () => {
  return (
    <View style={styles.container}>
      <CalendarPicker />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  }
})

export default CalendarView
