import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React from 'react';;
import Items from '../Items';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

const MENS = [
  {
    id: '1',
    image: require('../../assets/coat1.jpg'),
    name: "Red Jacket",
    price: "$100",
  },
  {
    id: '2',
    image: require('../../assets/coat2.jpg'),
    name: "Green Jacket",
    price: "$200",
  },
  {
    id: '3',
    image: require('../../assets/coat3.jpg'),
    name: "Blue Jacket",
    price: "$150",
  },
  {
    id: '4',
    image: require('../../assets/coat4.jpg'),
    name: "Blue Leadher Jacket",
    price: "$250",
  },
  {
    id: '5',
    image: require('../../assets/coat5.jpg'),
    name: "Light Green Jacket",
    price: "$400",
  },
  {
    id: '6',
    image: require('../../assets/coat6.jpg'),
    name: "Brown Jacket",
    price: "$350",
  },
];

const Fashion = () => {

  const navigation = useNavigation();

  function navigat(id) {
    console.log(id);
    switch (id) {
      case '1':
        navigation.navigate('BuyItem');
        break;
      // case '2':
      //   navigation.navigate('Review');
      //   break;
      // case '3':
      //     navigation.navigate('Signup');
      //     break;
      // case '4':
      //     navigation.navigate('Home');
      //     break;
      // case '5':
      //     navigation.navigate('About');
      //     break;
      // case '6':
      //     navigation.navigate('Login');
      //     break;

      default:


    }
  };

  return (
    <View style={styles.headermainview}>
      <View style={styles.iconandtextview}>
        <TouchableOpacity onPress={() => navigation.navigate(Items)}>
          <AntDesign name='arrowleft' size={20} color={'white'} />
        </TouchableOpacity>
        <Text style={styles.text1}>All Categories</Text>
      </View>
      <View style={styles.flatlistmainview}>
        <View style={styles.tabsmainview}>
          <View style={styles.tab1view}>
            <Text style={styles.tabtexts}>Mens</Text>
          </View>
          <View style={styles.tab2view}>
            <Text style={styles.tabtexts}>Womens</Text>
          </View>
          <View style={styles.tab3view}>
            <Text style={styles.tabtexts}>Kids</Text>
          </View>
        </View>
        <View style={styles.flatlistview}>
          <FlatList
            numColumns={2}
            key={2}
            data={MENS}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigat(item.id)}>
                <View style={styles.imagesandtextsview}>
                  <View style={styles.imagesview}>
                    <Image
                      source={item.image}
                      style={styles.images}
                    />
                  </View>
                  <Text style={styles.text2}>{item.name}</Text>
                  <Text style={styles.text3}>{item.price}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default Fashion;