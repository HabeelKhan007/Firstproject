import { View, Text, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import styles from './style';
import FontFamily from '../../assets/customfonts/fonts';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';


const ApiCall = () => {

  const [data, setData] = useState([]);

  const getApiData = async () => {
    const url = "https://fakestoreapi.com/products";
    const result = await fetch(url);
    const convertResult = await result.json();
    console.log('result', convertResult)
    setData(convertResult)

    console.log("Api Data is", convertResult)
  }
  useEffect(() => {
    getApiData();
  }, [])

  return (
    <View style={styles.mainview}>
      <Text style={styles.text1}>Flat List</Text>
      <View style={styles.flastlistview}>
        <FlatList
          style={styles.flatlist}
          data={data}
          renderItem={({ item }) => (
            <View style={styles.dataview} >
              <Text style={styles.text2}>{item.id}:</Text>
              <View>
                <Text style={styles.text3}>TITLE: {item.title}.</Text>
                <Text style={styles.text4}>DESCRIPTION: {item.description}.</Text>
              </View>

            </View>
          )}
        // keyExtractor={(item, index) => {
        //   return item.id;
        // }}
        />
      </View>

    </View>
  );
};

export default ApiCall;