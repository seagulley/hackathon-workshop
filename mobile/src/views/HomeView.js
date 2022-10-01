import React, { useState, useEffect } from 'react'
import { View, StyleSheet, FlatList, Alert, Button, StatusBar, ToastAndroid } from 'react-native'
import axios from 'axios'

import Header from '../components/Header'
import ListItem from '../components/ListItem'
import AddItem from '../components/AddItem'

const API_URL = 'http://10.0.0.175:3000/api'

function showToast() {
  const toasts = ["How is your day!", "Looking good, beautiful!", "Welcome back!", "Fantastic weather we are having, huh?"];
  ToastAndroid.show(toasts[1], ToastAndroid.SHORT);
}


const Home = () => {
  const [items, setItems] = useState([])

  // const deleteItem = async (id) => {
  //   setItems((items) => {
  //     return items.filter((item) => item.id !== id)
  //   })
  //   const res = await axios.delete(API_URL + '/products/' + id)
  // }

  // const addItem = async (text) => {
  //   if (!text) {
  //     Alert.alert(
  //       'No item entered',
  //       'Please enter an item when adding to your shopping list',
  //       [
  //         {
  //           text: 'Understood',
  //           style: 'cancel'
  //         }
  //       ],
  //       { cancelable: true }
  //     )
  //   } else {
  //     setItems((items) => {
  //       return [{ id: Math.random(), text }, ...items]
  //     })
  //     const res = await axios.post(API_URL + '/products', { name: text })
  //   }
  // }

  // const editItem = async (id, text) => {
  //   if (!text) {
  //     Alert.alert(
  //       'Item name is empty',
  //       'Please enter a name when editting an item',
  //       [
  //         {
  //           text: 'Understood',
  //           style: 'cancel'
  //         }
  //       ],
  //       { cancelable: true }
  //     )
  //   } else {
  //     setItems((items) => {
  //       return items.map((item) => (item.id === id ? { ...item, text } : item))
  //     })
  //     const res = await axios.put(API_URL + '/products/' + id, { name: text })
  //   }
  // }

  // const fetchItems = async () => {
  //   try {
  //     const res = await axios.get(API_URL + '/products')
  //     setItems(() =>
  //       res.data.map((item) => ({ id: item._id, text: item.name }))
  //     )
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }

  // useEffect(() => {
  //   fetchItems()
  // }, [])

  return (
    <View style={styles.container}>
      <Header title="Mental Health Diary" />
      {/* <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} editItem={editItem} />
        )}
      />
      <AddItem addItem={addItem} /> */}
      <Button title="Show Toast" onPress={showToast} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  }
})

export default Home
