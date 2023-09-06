import React from 'react';
import {View} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './src/screens/Home';
import Course from './src/screens/Course';
import About from './src/screens/About';
import Contact from './src/screens/Contact';
import Account from './src/screens/Account';
import Login from './src/screens/login';
import Signup from './src/screens/Signup';
import User from './src/screens/User';
import Drawertabs from './src/screens/Drawertabs';
import Fashion from './src/screens/Fashion';
import Buyitem from './src/screens/Buyitem';
import Items from './src/screens/Items';
import Profile from './src/screens/Profile';
import Modal from './src/screens/modal';
import UserData from './src/screens/userdata';
import imagePicker from './src/screens/imagepicker';
import testScreen from './src/screens/imagepicker';
import TestScreen from './src/screens/imagepicker';
import ApiCall from './src/screens/Apicall';
import PostApi from './src/screens/PostApi';
import AxiousApi from './src/screens/AxiousApi';



const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const Toptab = createMaterialTopTabNavigator();

const Bottomtab = createBottomTabNavigator();

// const Mytoptabs = () => {
//   return (
//     <Toptab.Navigator
//       screenOptions={{
//         tabBarInactiveTintColor: 'black',
//         tabBarActiveTintColor: '#2B547E',
//         tabBarStyle: {
//           backgroundColor: 'white',
//           borderBottomEndRadius: 20,
//           borderBottomLeftRadius: 20,
//           borderColor: 'darkpink',
//           borderWidth: 0.3,
//         },
//       }}>
//       <Toptab.Screen name="Hm" component={About} />
//       <Toptab.Screen name="Course" component={Course} />
//       <Toptab.Screen name="Account" component={Account} />
//     </Toptab.Navigator>
//   );
// };



// const Mybottomtabs = () => {
//   return (
//     <Bottomtab.Navigator
//       screenOptions={{tabBarShowLabel: false, headerShown: false}}
//       initialRouteName="Course">
//       <Bottomtab.Screen
//         name="Cours"
//         component={Course}
//         options={{
//           tabBarIcon: (color, size) => (
//             <Entypo name="book" size={35} color={'red'} />
//           ),
//         }}
//       />
//       <Bottomtab.Screen
//         name="HO"
//         component={Home}
//         options={{
//           tabBarIcon: (color, size) => (
//             <Entypo name="home" size={35} color={'red'} />
//           ),
//         }}
//       />
//       <Bottomtab.Screen
//         name="Accoun"
//         component={Account}
//         options={{
//           tabBarIcon: (color, size) => (
//             <MaterialCommunityIcons name="account" size={35} color={'red'} />
//           ),
//         }}
//       />
//     </Bottomtab.Navigator>
//   );
// };
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="Home" component={Drawertabs} /> */}
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Food' component={About} />
        <Stack.Screen name='Chat' component={Account} />
        <Stack.Screen name='Contact' component={Contact} />
        <Stack.Screen name="Course" component={Course} />
        <Stack.Screen name="Items" component={Items} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Fashion" component={Fashion} />
        <Stack.Screen name="BuyItem" component={Buyitem} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Modal" component={Modal} />
        <Stack.Screen name='UserData' component={UserData} />
        <Stack.Screen name='testScreen' component={TestScreen} />
        <Stack.Screen name='apiCall' component={ApiCall} />
        <Stack.Screen name='postapi' component={PostApi} />
        <Stack.Screen name='axiousapi' component={AxiousApi} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
