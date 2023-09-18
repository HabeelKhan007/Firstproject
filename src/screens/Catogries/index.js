import React from 'react';
import { View, Text, ActivityIndicator, FlatList,StyleSheet, TouchableOpacity } from 'react-native';
import { useFetchDataQuery } from '../Services/apiSlice';

const Categories = () => {
  const { data, isLoading } = useFetchDataQuery();
  console.log("Data is",data)

  if(isLoading){
    return <ActivityIndicator />;
  }

  return(
    <View style={{backgroundColor:"gainsboro",flex:1}}>
        
      <FlatList
      numColumns={2}
      key={2}
      data={data}
    //   keyExtractor={(item) => item.id.toString()}
      renderItem={({item})=>(
        <TouchableOpacity style={{marginTop:"5%",marginLeft:"3%"}} >
        <View style={styles.itemContainer}>
          <Text style={{color:"black"}}>{item}</Text>
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
        backgroundColor: '#fff',
        padding:"2%",
        paddingHorizontal:"7%",
        borderWidth: 1,
        borderRadius: 5,
        alignItems: 'center',
        
    },

});