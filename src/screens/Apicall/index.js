import { View, Text ,FlatList} from 'react-native';
import React,{useState,useEffect} from 'react';
import styles from './style';
import FontFamily from '../../assets/customfonts/fonts';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';


const ApiCall = () => {

    const[data, setData]=useState([]);

    const getApiData = async()=>{
        const url = "https://fakestoreapi.com/products";
        const result = await fetch(url);
        const convertResult = await result.json();
        console.log('result',convertResult)
        setData(convertResult)

        console.log("Api Data is",convertResult)
    }
    useEffect(() =>{
        getApiData();
    },[])

  return (
    <View style={styles.mainview}>
      <Text style={{color:"black",alignSelf:"center",fontSize:30,fontFamily:FontFamily.OpenSans_Condensed_ExtraBold}}>Flat List</Text>
      <View style={{height:responsiveHeight(100),width:responsiveWidth(100)}}>
      <FlatList
        style={styles.flatlist}
        data={data}
        renderItem={({item})=>(
          <View style={{backgroundColor:'white',flexDirection:"row",flexWrap:"wrap"}} >
            <Text style={{fontSize:20,color:"black"}}>{item.id}:</Text>
            <View>
            <Text style={{color:"black"}}>TITLE: {item.title}.</Text>
            <Text style={{marginTop:"2%",color:"black"}}>DESCRIPTION: {item.description}.</Text>
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