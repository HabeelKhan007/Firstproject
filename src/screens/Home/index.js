import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

const SCREENS =[
  {
    id:'1',
    image:require('../../assets/diet.png'),
    name:"Food",
  },
  {
    id: '2',
    image: require('../../assets/chat.png'),
    name: "Chat List",
  },
  {
    id: '3',
    image: require('../../assets/login.png'),
    name: "LogIn",
  },
  {
    id: '4',
    image: require('../../assets/illustration.png'),
    name: "Design",
  },
  {
    id: '5',
    image: require('../../assets/shopping-bag.png'),
    name: "Items",
  },
  {
    id: '6',
    image: require('../../assets/signup.png'),
    name: "SignUp",
  },
  {
    id: '7',
    image: require('../../assets/signup.png'),
    name: "Modal View",
  },
  {
    id: '8',
    image: require('../../assets/signup.png'),
    name: "User Data",
  },
];

const Home = () => {
  const navigation = useNavigation();

  function navigat(id) {
    console.log(id);
    switch (id) {
      case '1':
        navigation.navigate('Food');
        break;
      case '2':
        navigation.navigate('Chat');
        break;
      case '3':
        navigation.navigate('Contact');
          break;
      case '4':
        navigation.navigate('Course');
          break;
      case '5':
        navigation.navigate('Items');
          break;
      case '6':
        navigation.navigate('Signup');
          break;
          case '7':
        navigation.navigate('Modal');
          break;
      case '8':
        navigation.navigate('UserData');
        break;

      default:


    }
  };
  return (
    <View style={styles.headerview}>
    <View style={styles.headertextview}>
    <Text style={styles.text1}>Home</Text>
      </View>
    <View style={styles.flatlistmainview}>
    <FlatList
    numColumns={2}
    key={2}
      data={SCREENS}
      renderItem={({item}) =>(
        <TouchableOpacity onPress={() => navigat(item.id)}>
        <View style={styles.imageandtextview}>
          <View style={styles.imagesview}>
          <Image 
            source={item.image}
            style={styles.images}
          />
          </View>
          <Text style={styles.text2}>{item.name}</Text>
        </View>
        </TouchableOpacity>
      )}
    />
    </View>
    </View>
  );
};

export default Home;

