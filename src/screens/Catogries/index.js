import React from 'react';
import { View, Text, ActivityIndicator, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useFetchDataQuery } from '../Services/apiSlice';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setCategoryName } from '../Store/reducer';
import FontFamily from '../../assets/customfonts/fonts';
import { responsiveWidth } from 'react-native-responsive-dimensions';



const Categories = () => {
  const navigation = useNavigation();
  function navigat(category) {
    console.log(category);
    switch (category) {
      case 'smartphones':
        navigation.navigate('saleProduct');
        break;
      case 'laptops':
        navigation.navigate('saleProduct');
        break;
      case 'fragrances':
        navigation.navigate('saleProduct');
        break;
      case 'skincare':
        navigation.navigate('saleProduct');
        break;
      case 'groceries':
        navigation.navigate('saleProduct');
        break;
      case 'home-decoration':
        navigation.navigate('saleProduct');
        break;
      case 'furniture':
        navigation.navigate('saleProduct');
        break;
      case 'tops':
        navigation.navigate('saleProduct');
        break;
      case 'womens-dresses':
        navigation.navigate('saleProduct');
        break;
      case 'womens-shoes':
        navigation.navigate('saleProduct');
        break;
      case 'mens-shirts':
        navigation.navigate('saleProduct');
        break;
      case 'mens-shoes':
        navigation.navigate('saleProduct');
        break;
      case 'mens-watches':
        navigation.navigate('saleProduct');
        break;
      case 'womens-watches':
        navigation.navigate('saleProduct');
        break;
      case 'womens-bags':
        navigation.navigate('saleProduct');
        break;
      case 'womens-jewellery':
        navigation.navigate('saleProduct');
        break;
      case 'sunglasses':
        navigation.navigate('saleProduct');
        break;
      case 'automotive':
        navigation.navigate('saleProduct');
        break;
      case 'motorcycle':
        navigation.navigate('saleProduct');
        break;
      case 'lighting':
        navigation.navigate('saleProduct');
        break;

      default:
    }
  };


  const dispatch = useDispatch();
  const { data, isLoading } = useFetchDataQuery();
  console.log("Data is", data)

  const saveData = (category) => {

    dispatch(setCategoryName(category))
    console.log("Category are", category)
  }

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    )
  }

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>

      <FlatList
        numColumns={2}
        key={2}
        data={data}
        //   keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          console.log("Items are", item),
          <TouchableOpacity style={{ marginTop: "3%", marginLeft: "3%", width: responsiveWidth(45) }}
            onPress={() => {
              saveData(item)
              navigat(item)
            }} >
            <View style={styles.itemContainer}>
              <Text style={{ color: "black", fontFamily: FontFamily.OpenSans_Condensed_Bold }}>{item}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

    </View>
  )
};

export default Categories;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    backgroundColor: 'lightblue',
    padding: "2%",
    paddingHorizontal: "7%",
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',

  },

});