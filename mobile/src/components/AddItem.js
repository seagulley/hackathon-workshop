import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

const AddItem = ({ addItem }) => {
  const [text, setText] = useState('')

  return (
    <View>
      <TextInput
        placeholder="Add Item..."
        style={styles.input}
        onChangeText={(text) => {
          setText(text)
        }}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          addItem(text)
        }}>
        <View style={styles.btnContent}>
          <Text style={styles.btnText}>Add Item</Text>
          <FontAwesome name="plus" size={20} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  )
}

AddItem.propTypes = {
  addItem: PropTypes.func
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    padding: 8,
    margin: 5,
    borderWidth: 1,
    borderColor: '#eee'
  },
  btn: {
    backgroundColor: '#0078E8',
    padding: 15,
    margin: 5
  },
  btnContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  btnText: {
    color: 'white',
    fontSize: 20
  }
})

export default AddItem
