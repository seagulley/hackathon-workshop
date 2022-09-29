import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, FlatList } from 'react-native'

import Header from './src/components/Header'
import ListItem from './src/components/ListItem'

const App = () => {
  const [items, setItems] = useState([
    { id: 1, text: 'Milk' },
    { id: 2, text: 'Orange' },
    { id: 3, text: 'Tofu' },
    { id: 4, text: 'Milk' }
  ])

  const deleteItem = (id) => {
    setItems((items) => {
      return items.filter((item) => item.id != id)
    })
  }

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App
