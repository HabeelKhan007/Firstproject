import { View, Text } from 'react-native';
import React from 'react';
import ComponentC from '../ComponentC';

const ComponentB = () => {
  return (
    <View>
      <Text style={{color:"black",marginTop:"10%",alignSelf:"center"}}>ComponentB</Text>
      <ComponentC/>
    </View>
  );
};

export default ComponentB;