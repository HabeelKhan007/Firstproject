import { View, Text, StyleSheet, ActivityIndicator, FlatList, Image } from 'react-native';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useFetchCatogriesQuery } from '../Services/apiSlice';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';



const SaleProduct = () => {
  let categoryArray = [];
  const { data, isLoading } = useFetchCatogriesQuery();
  // console.log("Products are", data)


  const products = useSelector(state => state.product.categoryName)

  console.log("Category is", products)

  useEffect(() => {
    if (data?.products) {
      const array = Object.values(data?.products);
      for (const item of array) {
        if (item.category === products) {
          categoryArray.push(item);
        }
      }
      if (categoryArray.length === 0) {

        console.log("Filtered Products:", categoryArray.length);

      }

    }
  }, [data, products]);



  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator />
      </View>
    )
  }
  return (

    <View style={{ flex: 1, backgroundColor: "gainsboro" }}>
      {categoryArray === undefined ?
        (
          console.log("No Data"),
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text style={{ color: "black" }}>No data in this Category</Text>
          </View>
        ) : (
          <FlatList
            data={categoryArray}
            // keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <View style={{ width: responsiveWidth(25), height: responsiveHeight(15) }}>
                  <Image
                    source={{ uri: item.thumbnail }}
                    style={{ height: "100%", width: "100%", borderRadius: 5 }}
                  />
                </View>
                <View style={{ marginLeft: "2%" }}>
                  <Text style={{ color: "black" }}>Id: {item.id}</Text>
                  <Text style={{ color: "black" }}>Title: {item.title}</Text>
                  <Text style={{ color: "black" }}>Description: {item.description}</Text>
                  <Text style={{ color: "black" }}>Price: {item.price}</Text>
                  <Text style={{ color: "black" }}>DiscountPercentage: {item.discountPercentage}</Text>
                  <Text style={{ color: "black" }}>Rating: {item.rating}</Text>
                  <Text style={{ color: "black" }}>Stock: {item.stock}</Text>
                  <Text style={{ color: "black" }}>Brand: {item.brand}</Text>
                  <Text style={{ color: "black" }}>Category: {item.category}</Text>
                </View>
              </View>

            )}
          />
        )
      }


    </View>
  )
};

export default SaleProduct;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: "2%",
    // paddingHorizontal: "7%",
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: "row",
    flexWrap: "wrap"

  },

});