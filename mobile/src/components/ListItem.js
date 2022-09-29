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

const ListItem = ({ item, deleteItem, editItem }) => {
  const [editting, setEditting] = useState(false)
  const [text, setText] = useState(item.text)

  return (
    <TouchableOpacity style={styles.listItem}>
      {editting ? (
        <View style={styles.listItemView}>
          <TextInput
            value={text}
            style={styles.input}
            onChangeText={(text) => {
              setText(text)
            }}
          />
          <View style={styles.iconView}>
            <FontAwesome
              name="check"
              size={25}
              color="green"
              onPress={() => {
                editItem(item.id, text)
                setEditting(!editting)
              }}
            />
            <FontAwesome
              name="remove"
              size={25}
              color="firebrick"
              onPress={() => {
                setEditting(!editting)
              }}
            />
          </View>
        </View>
      ) : (
        <View style={styles.listItemView}>
          <Text style={styles.listItemText}>{item.text}</Text>
          <View style={styles.iconView}>
            <FontAwesome
              name="pencil"
              size={25}
              color="black"
              onPress={() => {
                setEditting(!editting)
              }}
            />
            <FontAwesome
              name="trash"
              size={25}
              color="firebrick"
              onPress={() => {
                deleteItem(item.id)
              }}
            />
          </View>
        </View>
      )}
    </TouchableOpacity>
  )
}

ListItem.propTypes = {
  item: PropTypes.object,
  deleteItem: PropTypes.func,
  editItem: PropTypes.func
}

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee'
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  listItemText: {
    fontSize: 18
  },
  iconView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 70
  },
  input: {
    height: 50,
    width: 250,
    padding: 8,
    margin: 5,
    borderWidth: 1,
    borderColor: '#eee'
  }
})

export default ListItem
