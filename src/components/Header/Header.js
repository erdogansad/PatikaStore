import React from 'react';
import {Text, View, TextInput} from 'react-native';
import styles from './Header.style';

const Header = () => {
  return (
    <View style={styles.header_container}>
      <Text style={styles.header_title}>PATIKASTORE</Text>
      <TextInput style={styles.search_input} placeholder="Ara..." />
    </View>
  );
};

export default Header;
