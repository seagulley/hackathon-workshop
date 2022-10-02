import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, FlatList, Alert, Button } from 'react-native'

const MoodSelector = () => {
    const [mood, setMood] = useState(null)

    
    return (
        <View style={styles.container}>
            <Button onPress={() => {setMood(1)}} title='1' />
            <Button onPress={() => {setMood(2)}} title='2'/>
            <Button onPress={() => {setMood(3)}} title='3'/>
            <Button onPress={() => {setMood(4)}} title='4'/>
            <Button onPress={() => {setMood(5)}} title='5'/>
        </View>
    )
}

const styles = StyleSheet.create({
    button1: {
        backgroundColor: '#3f5074',
    },
    button2: {
        backgroundColor: '#587a70',
    },
    button3: {
        backgroundColor: '#7ba068',
    },
    button4: {
        backgroundColor: '#c0ce86',
    },
    button5: {
        backgroundColor: '#ffefa6',
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginVertical: '5%'
    }
  })

  export default MoodSelector