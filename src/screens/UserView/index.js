import { View, Text, Image } from 'react-native';
import React from 'react';
import styleees from './style';

const UserView = () => {
  return (
    <View style={styleees.container}>
      <View
        style={styleees.view1}>
        <Image
          style={styleees.image}
          source={require('../../assets/car.png')}
        />
      </View>
      <View>
        <Text style={styleees.text}>Mehran</Text>
      </View>
    </View>
  );
};

export default UserView;