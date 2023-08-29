import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';




const ItemSeparator = () => {
  return <View style={styles.separator} />;
};

const LIST = [
  {
    image: require('../../assets/fastfood1.jpg'),
    name: "Margherita Pizza",
    caption: "Delicious Pizza",
    price: "$5.0",
    description: "Lore ispum is simply dummy text of the printing and type setting industry",
    juiceimage: require('../../assets/juice1.jpg'),
    juicename: "Lemon Juice",
  },
  {
    image: require('../../assets/fastfood2.jpg'),
    name: "Thin Crust Pizza",
    caption: "Delicious Pizza",
    price: "$5.0",
    description: "Lore ispum is simply dummy text of the printing and type setting industry",
    juiceimage: require('../../assets/juice2.jpg'),
    juicename: "Mango Juice",
  },
  {
    image: require('../../assets/fastfood3.jpg'),
    name: "Veg Burger",
    caption: "Fast Food",
    price: "$5.0",
    description: "Lore ispum is simply dummy text of the printing and type setting industry",
    juiceimage: require('../../assets/juice3.jpg'),
    juicename: "Loki Juice",
  },
  {
    image: require('../../assets/fastfood4.jpg'),
    name: "Fries & Pepsi",
    caption: "Mix Food",
    price: "$5.0",
    description: "Lore ispum is simply dummy text of the printing and type setting industry",
    juiceimage: require('../../assets/juice4.jpg'),
    juicename: "Straberry Juice",
  },
  {
    image: require('../../assets/fastfood5.jpg'),
    name: "Non Veg Burger",
    caption: "Delicious Burger",
    price: "$5.0",
    description: "Lore ispum is simply dummy text of the printing and type setting industry",
    juiceimage: require('../../assets/juice5.jpg'),
    juicename: "Mango Juice",
  },
];


const Product = () => {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Text style={styles.text1}>Popular Items</Text>
        <TouchableOpacity style={{marginTop:"1%"}}>
        <Text style={styles.text2}>See all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.flatlistview}>
        <FlatList
        ItemSeparatorComponent={ItemSeparator}
          horizontal
          data={LIST}
          renderItem={({ item }) => (
            <TouchableOpacity>
            <View style={styles.imagesview}>
              <Image
                source={item.image}
                style={styles.images}
              />
              <TouchableOpacity style={styles.iconview}>
                <Feather name='bookmark' size={20} color={'white'} />
              </TouchableOpacity>
              <View>
                <Text style={styles.text3}>{item.name}</Text>
                <Text style={styles.text4}>{item.caption}</Text>
                <View style={styles.priceandiconview}>
                  <Text style={styles.text5}>{item.price}</Text>
                  <TouchableOpacity>
                  <Ionicons name='add-circle' size={20} color={'red'} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            </TouchableOpacity>
          )}

        />
      </View>
      <View style={styles.flatlist2mainview}>
        <View style={styles.texts9view}>
          <Text style={styles.text9}>Juice</Text>
          <Text style={styles.text10}>5 items</Text>
        </View>
        <FlatList
        ItemSeparatorComponent={ItemSeparator}
          data={LIST}
          renderItem={({ item }) => (

            <TouchableOpacity>
            <View style={styles.flatlist2view}>
              <View>
                <Image
                  source={item.juiceimage}
                  style={styles.images2}
                />
              </View>
              <View style={styles.textsmainview}>
                <View style={styles.nameiconview}>
                  <Text style={styles.text6}>{item.juicename}</Text>
                  <TouchableOpacity>
                  <Feather name='bookmark' size={20} color={'grey'} />
                  </TouchableOpacity>
                </View>
                <Text style={styles.text7}>{item.description}</Text>
                <View style={styles.priceiconview}>
                  <Text style={styles.text8}>$5.2</Text>
                  <TouchableOpacity>
                  <Ionicons name='add-circle' size={20} color={'red'} />
                  </TouchableOpacity>
                </View>
              </View>


            </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Product;


