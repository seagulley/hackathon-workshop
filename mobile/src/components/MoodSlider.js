import React, { useState } from 'react'
import { Slider } from '@miblanchard/react-native-slider'
import { View, Text, Image, StyleSheet } from 'react-native'

const MoodSlider = () => {
  const [value, setValue] = useState(0)

  return (<Slider 
    value={value}
    onValueChange={value => setValue(value)}
  />)
}

export default MoodSlider