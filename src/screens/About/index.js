import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, FlatList, SafeAreaView, ImageBackground } from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import stylees from './style';
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Product from '../Product';
import Review from '../Review';
import Home from '../Home';


const toptab = createMaterialTopTabNavigator();

const About = () => {

  const navigation = useNavigation();
  return (
    <SafeAreaView style={stylees.container}>
      <ImageBackground
        source={require('../../assets/resturant1.jpg')}
        style={stylees.backgroundimage}>
        <View style={stylees.topiconsview}>
          <TouchableOpacity onPress={() => navigation.navigate(Home)}>
          <AntDesign name='arrowleft' size={25} color={'white'} />
          </TouchableOpacity>
          <Feather name='bookmark' size={23} color={'white'} style={stylees.bookmarkicon} />
        </View>
        <View style={stylees.text1view}>
          <Text style={stylees.text1}>Bar 61 Restaurant</Text>
        </View>
        <View style={stylees.text2view}>
          <Entypo name='location-pin' size={20} color={'white'} />
          <Text style={stylees.text2}>76A England</Text>
        </View>
        <View style={stylees.text3view}>
          <Entypo name='star' size={18} color={'yellow'} />
          <Text style={stylees.text3}>4.5</Text>
        </View>

        <toptab.Navigator screenOptions={{tabBarIndicatorStyle:{backgroundColor:"pink"}, tabBarActiveTintColor:"black",tabBarInactiveTintColor:"white",tabBarStyle: { backgroundColor: "#F2647C", marginTop: "3%" } }} >
          <toptab.Screen name='Product' component={Product} />
          <toptab.Screen name='Review' component={Review} />
        </toptab.Navigator>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default About;


