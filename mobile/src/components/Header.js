import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image, StyleSheet} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: 'Shopping List'
};

Header.propTypes = {
  title: PropTypes.string
};

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 30,
    backgroundColor: 'darkslateblue'
  },
  text: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'center'
  }
});

export default Header;