import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, FlatList, Alert, Button, Pressable } from 'react-native'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DiaryView from './src/views/DiaryView'
import HomeView from './src/views/HomeView'

import axios from 'axios'

const Stack = createNativeStackNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

const API_URL = 'http://aea2-2620-101-c040-85c-69c-c4e5-ea64-2660.ngrok.io/api'

// Get the current date
let todayDate = new Date()
const todayLocaleDate = todayDate.toLocaleDateString()
todayDate = new Date(todayLocaleDate)
const todayDateString = todayDate.toISOString().split('T')[0]

// App
const App = () => {
  // HomeView Hooks
  const [mood, setMood] = useState(null)

  // DiaryView Hooks
  const [diaryEntries, setDiaryEntries] = useState([])
  const [selectedDate, setSelectedDate] = useState(todayDateString)

  // API functions
  const fetchEntries = async () => {
    try {
      const res = await axios.get(API_URL + '/diaryentry')
      setDiaryEntries(() => {
        return res.data.map((item) => ({ id: item._id, date: item.date, mood: item.mood, entry: item.entry }))
      })
    } catch (err) {
      console.error(err)
    }
    console.log(diaryEntries)
  }

  const editEntries = async (id, date, mood, entry) => {
    setDiaryEntries((entries) => {
      return entries.map((item) => (item.id === id ? { ...item, date, mood, entry} : item))
    })
    const res = await axios.put(API_URL + '/diaryentry/' + id, { date, mood, entry })
  }

  const addEntries = async (date, mood, entry) => {
    setDiaryEntries((entries) => {
      return [{ id: Math.random(), date, mood, entry }, ...entries]
    })
    const res = await axios.post(API_URL + '/diaryentry', { date, mood, entry })
  }

  useEffect(() => {
    fetchEntries()
  }, [])

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen 
          name="HomeView"
          options={{title: 'Home'}}
        >
          {(props) => <HomeView {...props} mood={mood} setMood={setMood} selectedDate={selectedDate} diaryEntries={diaryEntries} />}
        </Stack.Screen>

        <Stack.Screen 
          name="DiaryView"
          options={{title: 'Diary'}}
        >
          {(props) => <DiaryView {...props} 
            mood={mood} 
            setMood={setMood} 
            diaryEntries={diaryEntries}
            setDiaryEntries={setDiaryEntries}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            todayDateString={todayDateString}
            editEntries={editEntries}
            addEntries={addEntries}
          />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App
