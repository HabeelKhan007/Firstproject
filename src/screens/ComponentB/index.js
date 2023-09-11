import { View, Text } from 'react-native';
import React from 'react';
import ComponentC from '../ComponentC';
import styles from './style';

const ComponentB = () => {
  return (
    <View>
      <Text style={styles.text}>ComponentB</Text>
      <ComponentC/>
    </View>
  );
};

export default ComponentB;