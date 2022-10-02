import React from 'react'
import { Keyboard } from 'react-native'
import {
  Pressable,
  Text,
  View,
  TextInput,
  StyleSheet
} from 'react-native'
import { useState } from 'react'
// import { useForm } from 'react-hook-form';

const NewEntry = () => {
  const [textEntry, setTextEntry] = useState('')

  const onSubmit = () => {
    console.log('yay', textEntry)
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="How was your day?"
        multiline={true}
        numberOfLines={10}
        style={styles.input}
        keyboardType="default"
        onChangeText={(text) => {
          setTextEntry(text)
        }}
      />

      <Pressable
        onPress={() => onSubmit()}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white'
          },
          styles.button
        ]}>
        <Text>Next</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 10,
  },
  input: {
    fontSize: 18,
    height: '55%',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    padding: '4%',
  },
  button: {
    backgroundColor: '#ced8bb',
    borderRadius: '20%',
    paddingHorizontal: '4%',
    paddingVertical: '2%',
    alignSelf: 'flex-end',
    marginRight: '2%',
    marginTop: '5%'
  }
})

export default NewEntry
