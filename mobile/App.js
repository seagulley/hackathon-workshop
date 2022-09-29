import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, FlatList, Alert } from 'react-native'

import Header from './src/components/Header'
import ListItem from './src/components/ListItem'
import AddItem from './src/components/AddItem'

const App = () => {
  const [items, setItems] = useState([
    { id: 1, text: 'Milk' },
    { id: 2, text: 'Orange' },
    { id: 3, text: 'Tofu' },
    { id: 4, text: 'Chicken' }
  ])

  const deleteItem = (id) => {
    setItems((items) => {
      return items.filter((item) => item.id !== id)
    })
  }

  const addItem = (text) => {
    if (!text) {
      Alert.alert(
        'No item entered',
        'Please enter an item when adding to your shopping list',
        [
          {
            text: 'Understood',
            style: 'cancel'
          }
        ],
        { cancelable: true }
      )
    } else {
      setItems((items) => {
        return [...items, { id: Math.random(), text }]
      })
    }
  }

  const editItem = (id, text) => {
    if (!text) {
      Alert.alert(
        'Item name is empty',
        'Please enter a name when editting an item',
        [
          {
            text: 'Understood',
            style: 'cancel'
          }
        ],
        { cancelable: true }
      )
    } else {
      setItems((items) => {
        return items.map((item) => (item.id === id ? { ...item, text } : item))
      })
    }
  }

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} editItem={editItem} />
        )}
      />
      <AddItem addItem={addItem} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  }
})

export default App
