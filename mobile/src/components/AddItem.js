import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

const AddItem = ({}) => {
  return (
    <View>
      <TextInput placeholder="Add Item..." style={styles.input}></TextInput>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>
          <FontAwesome name="plus" size={20} />
          Add Item
        </Text>
      </TouchableOpacity>
    </View>
  )
}

AddItem.propTypes = {}

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    margin: 5
  },
  btn: {
    backgroundColor: '#0078E8',
    padding: 9,
    margin: 5
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center'
  }
})

export default AddItem
