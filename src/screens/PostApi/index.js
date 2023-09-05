import { View, Text,Button} from 'react-native';
import React from 'react';
import FontFamily from '../../assets/customfonts/fonts';

const PostApi = () => {


    const saveApiData = async () =>{

        

        fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                {
                    title: 'test product',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic'
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
    }

  return (
    <View style={{flex:1}}>
      <Text style={{color:"black",alignSelf:"center",fontSize:20,fontFamily:FontFamily.OpenSans_Condensed_Bold}}>PostApi</Text>
      <Button title='PostApi' onPress={() => saveApiData()}/>

    </View>
  );
};

export default PostApi;