import React, { useState, useEffect } from 'react'
import { View, StyleSheet, FlatList, Alert, Button, StatusBar } from 'react-native'
import axios from 'axios'
import Header from '../components/Header'
import Message from '../components/Message'

const API_URL = 'http://10.0.0.175:3000/api'

const HomeView = () => {
  return (
    <View style={styles.container}>
      <Header title="Mental Health Diary"/>
      <Message style={styles.center}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30
  },
  center: {
    position: 'absolute', 
    top: 0, left: 0, 
    right: 0, bottom: 0, 
    justifyContent: 'center', 
    alignItems: 'center'}

})

export default HomeView
