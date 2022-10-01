import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image, StyleSheet } from 'react-native'

const alerts = ["How is your day!", "Looking good, beautiful!", "Welcome back!", "Fantastic weather we are having, huh?"];
var alertRandom = Math.floor(Math.random() * alerts.length);
const Message = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{alerts[alertRandom]}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#D9D9D9'
  },
  text: {
    color: '#fff',
    fontSize: 13,
    textAlign: 'center'
  }
})

export default Message
