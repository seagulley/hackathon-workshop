import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';

import Header from './src/components/Header';
import ListItem from './src/components/ListItem';

const App = () => {
  const [items, setItem] = useState([
    {id: 1, text: 'Milk'},
    {id: 2, text: 'Orange'},
    {id: 3, text: 'Tofu'},
    {id: 4, text: 'Milk'}
  ]);

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <FlatList
        data={items}
        renderItem={({item}) => <ListItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
