import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import stylles from './style';

const DATA = [
  {
    id: '1',
    name: 'Ahmad',
    message: 'Title:What are you doing',
    text: 'Ranked',
    num: '1',
    image: require('../../assets/e.jpg'),
  },
  {
    id: '2',
    name: 'Lucky',
    message: 'Title:What are you doing',
    text: 'Ranked',
    num: '2',
    image: require('../../assets/download.jpg'),
  },
  {
    id: '3',
    name: 'Tufail',
    message: 'Title:What are you doing',
    text: 'Ranked',
    num: '3',
    image: require('../../assets/a.jpg'),
  },
  {
    id: '4',
    name: 'Ahsan',
    message: 'Title:What are you doing',
    text: 'Ranked',
    num: '4',
    image: require('../../assets/b.jpg'),
  },
  {
    id: '5',
    name: 'Afaq',
    message: 'Title:What are you doing',
    text: 'Ranked',
    num: '5',
    image: require('../../assets/c.jpg'),
  },
  {
    id: '6',
    name: 'Hassan',
    message: 'Title:What are you doing',
    text: 'Ranked',
    num: '6',
    image: require('../../assets/d.jpg'),
  },
];

const Account = () => {
  const navigation = useNavigation();
  function nav(id) {
    console.log('ddd', id);
    switch (id) {
      case '1':
        navigation.navigate('Contact');
        break;
      case '2':
        navigation.navigate('Course');
        break;
      case '3':
        navigation.navigate('Signup');
        break;
      case '4':
        navigation.navigate('Home');
        break;
      case '5':
        navigation.navigate('About');
        break;
      case '6':
        navigation.navigate('Login');
        break;

      default:


    }
  };

  const Items = ({ name, message, text, id, num, image }) => (
    <TouchableOpacity onPress={() => nav(id)}>
      <View style={stylles.view}>
        <View
          style={stylles.view1}>
          <Image
            source={image}
            style={stylles.image}
          />
        </View>
        <View>
          <Text style={stylles.text}>{name}</Text>
          <Text style={stylles.text1}>{message}</Text>

          <View style={stylles.view2}>
            <View style={stylles.view3}>
              <Text style={stylles.text2}>{text}</Text>
            </View>
          </View>
          <View style={stylles.view4}>
            <Text style={stylles.text3}>{num}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <Items
      name={item.name}
      image={item.image}
      id={item.id}
      num={item.num}
      message={item.message}
      text={item.text}
    />
  );
  return (
    <View style={stylles.container}>
      <FlatList
        style={stylles.flatlist}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item, index) => {
          return item.id;
        }}
      />
    </View>
  );
};



export default Account;
