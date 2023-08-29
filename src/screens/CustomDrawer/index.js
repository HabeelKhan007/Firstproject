import { View, Text } from 'react-native';
import React from 'react';
import UserView from '../UserView';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

const CustomDrawer = props => {
  return (
    <View style={{ flex: 1 }}>
      <UserView />
      <DrawerContentScrollView>
        <DrawerItemList {...props} />

        <DrawerItem
          label={'LogOut'}
          icon={(color, size) => (
            <AntDesign name="logout" size={30} color="red" />
          )}
        />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;