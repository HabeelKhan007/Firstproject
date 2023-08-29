import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Entypo from 'react-native-vector-icons/Entypo';
import CustomDrawer from '../CustomDrawer';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../Home';
import Account from '../Account';
import Contact from '../Contact';
import About from '../About';
import User from '../User';
import Login from '../login';
import Course from '../Course';
import Signup from '../Signup';
import Product from '../Product';
import Items from '../Items';



const Drawer = createDrawerNavigator();

const Drawertabs = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerActiveTintColor: 'red',
        headerShown: false,
        drawerStyle: { backgroundColor: 'white' },
      }}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: (color, size) => (
            <Entypo name="home" size={30} color="red" />
          ),
        }}
      />
      <Drawer.Screen
        name="Product"
        component={Product}
        options={{
          drawerIcon: (color, size) => (
            <FontAwesome name="product-hunt" size={30} color="red" />
          ),
        }}
      />
      <Drawer.Screen
        name="Account"
        component={Account}
        options={{
          drawerIcon: (color, size) => (
            <MaterialCommunityIcons name="account" size={30} color="red" />
          ),
        }}
      />
      <Drawer.Screen
        name="Contact"
        component={Contact}
        options={{
          drawerIcon: (color, size) => (
            <AntDesign name="contacts" size={30} color="red" />
          ),
        }}
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={{
          drawerIcon: (color, size) => (
            <AntDesign name="user" size={30} color="red" />
          ),
        }}
      />
      {/* <Drawer.Screen
        name="User"
        component={User}
        options={{
          drawerIcon: (color, size) => (
            <EvilIcons name="user" size={30} color="red" />
          ),
        }}
      /> */}
      <Drawer.Screen
        name="Login"
        component={Login}
        options={{
          drawerIcon: (color, size) => (
            <AntDesign name="login" size={30} color="red" />
          ),
        }}
      />
      <Drawer.Screen
        name="Course"
        component={Course}
        options={{
          drawerIcon: (color, size) => (
            <Entypo name="open-book" size={30} color="red" />
          ),
        }}
      />
      <Drawer.Screen
        name="Signup"
        component={Signup}
        options={{
          drawerIcon: (color, size) => (
            <FontAwesome name="sign-in" size={30} color="red" />
          ),
        }}
      />
      <Drawer.Screen
        name="Items"
        component={Items}
        options={{
          drawerIcon: (color, size) => (
            <FontAwesome name="sign-in" size={30} color="red" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};



export default Drawertabs;