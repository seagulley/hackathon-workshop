import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, FlatList, Alert, Button, Pressable } from 'react-native'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DiaryView from './src/views/DiaryView'
import HomeView from './src/views/HomeView'

const Stack = createNativeStackNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

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
  const [diaryEntries, setDiaryEntries] = useState({})
  const [selectedDate, setSelectedDate] = useState(todayDateString)

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
          />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App
