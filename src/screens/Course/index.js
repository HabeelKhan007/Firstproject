import React from 'react';
import { View, Text, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styll from './style';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import App from '../User';


const ITEMS = [
  {
    image: require('../../assets/smartphone1.png'),
  },
  {
    image: require('../../assets/grocery.png'),
  },
  {
    image: require('../../assets/dress.png'),
  },
  {
    image: require('../../assets/smartphone1.png'),
  },
  {
    image: require('../../assets/car.png'),
  },
  {
    image: require('../../assets/car1.png'),
  },
  {
    image: require('../../assets/dress.png'),
  },
];



const Course = () => {

  const navigation = useNavigation();

  return (
    <View style={styll.mainView}>
      <ScrollView style={styll.contentContainer}>
        <View style={styll.menuview}>
          <View style={styll.iconimagemainview}>

            <View style={styll.iconview}>
              <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <Feather name="menu" size={20} color="white" />
              </TouchableOpacity>
            </View>

            <View style={styll.imageview}>
              <Image
                source={require('../../assets/car.png')}
                style={styll.image}
              />
            </View>
            <View style={styll.textview1}>
              <Text style={styll.text}>Maha</Text>
            </View>
            <View style={styll.iconview2}>
              <Ionicons name="notifications" size={20} color="white" />
            </View>
          </View>
          <View style={styll.textinputmainview}>
            <View style={styll.searchiconview}>
              <Feather name="search" size={25} color="rgb(229,229,229)" />
            </View>
            <View>
              <TextInput
                style={styll.placeholder1}
                placeholder="SEARCH"
                placeholderTextColor={'grey'}
              />
            </View>
          </View>
        </View>
        <View style={styll.containerview}>
          <View style={styll.imagesmainview}>
            <View style={styll.imagesview}>
              <View style={styll.image1view}>
                <Image
                  source={require('../../assets/grocery.png')}
                  style={styll.image1}
                />
              </View>
              <View style={styll.image2view}>
                <Image
                  source={require('../../assets/dress.png')}
                  style={styll.image2}
                />
              </View>
              <View style={styll.image3view}>
                <Image
                  source={require('../../assets/headphones.png')}
                  style={styll.image3}
                />
              </View>
              <View style={styll.image4view}>
                <Image
                  source={require('../../assets/smartphone1.png')}
                  style={styll.image4}
                />
              </View>
            </View>
            <View style={styll.textsmainview}>
              <Text style={styll.text1}>Grocery</Text>
              <Text style={styll.text2}>Fashion</Text>
              <Text style={styll.text3}>Electronics</Text>
              <Text style={styll.text4}>Mobile</Text>
            </View>
          </View>
          <View style={styll.swipermainview}>
            <View style={styll.swiperview}>
              <App />
            </View>
          </View>
          <View style={styll.mappingmainview}>
            <View style={styll.textview2}>
              <Text style={styll.text5}>Special Details</Text>
              <Text style={styll.text6}>See all</Text>
            </View>
            <View style={styll.mappingitemsmainview}>
              <ScrollView horizontal={true} style={styll.mappingscrollview}>
                {ITEMS.map(item => (
                  <View style={styll.mapimagesview}>
                    <View style={styll.mapimagesview2}>
                      <Image source={item.image} style={styll.mapimages} />
                    </View>
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Course;
