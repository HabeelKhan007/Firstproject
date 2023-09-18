import React from 'react';
import { View, Text, ActivityIndicator, FlatList,StyleSheet } from 'react-native';
import { useFetchDataQuery } from '../Services/apiSlice';

const ApiData = () => {
  const { data, isLoading } = useFetchDataQuery();
  console.log("Data is",data)

  if(isLoading){
    return <ActivityIndicator />;
  }

  return(
    <View>
      <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item})=>(
        <View style={styles.itemContainer}>
          <Text style={{color:"black"}}>Id: {item.id}</Text>
          <Text style={{color:"black"}}>Title: {item.title}</Text>
          <Text style={{color:"black"}}>Price: {item.price}</Text>
          <Text style={{color:"black"}}>Category: {item.category}</Text>
        </View>
      )}
      />
    </View>
  )
};

export default ApiData;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemContainer: {
        backgroundColor: '#fff',
        padding:"2%",
        paddingHorizontal: 18,
        marginTop: 5,
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        gap: 2
    },

});