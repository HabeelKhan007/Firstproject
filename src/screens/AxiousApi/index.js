import { View, Text, Button } from 'react-native';
import React, { useEffect } from 'react';
import axios from 'axios';
import { TextInput } from 'react-native';
import { useState } from 'react';


const AxiousApi = () => {
    const[title, setTitle]= useState();
    const[price, setPrice]= useState();
    const[description, setDescription]= useState();
    const[category, setCategory]= useState();
    

    // const getData = async () => {
    //     const result =await axios.get('https://fakestoreapi.com/carts');
    //     console.log("Data is :",result.data)
    // }

    const postData = async () => {
        const result = await axios.post('https://fakestoreapi.com/products',
            {
                title:title,
                price:price,
                description:description,
                image: 'https://i.pravatar.cc',
                category: category
            }
        )
        console.log("Data is :", result.data)
    }

    useEffect(() => {
        postData();
    }, [])

    return (
        <View>
            <Text style={{ color: "black", alignSelf: "center" }}>AxiousApi</Text>
            <TextInput
            style={{borderColor:"black",borderWidth:1,margin:"2%",color:"black",marginTop:"15%"}}
            placeholder='Title'
            placeholderTextColor={"black"}
            value={title}
            onChangeText={text=> setTitle(text)}
            />
            <TextInput
            style={{borderColor:"black",borderWidth:1,margin:"2%",color:"black",marginTop:"15%"}}
            placeholder='Price'
            placeholderTextColor={"black"}
            value={price}
            onChangeText={text=> setPrice(text)}
            />
            <TextInput
            style={{borderColor:"black",borderWidth:1,margin:"2%",color:"black",marginTop:"15%"}}
            placeholder='description'
            placeholderTextColor={"black"}
            value={description}
            onChangeText={text=> setDescription(text)}
            />
             <TextInput
            style={{borderColor:"black",borderWidth:1,margin:"2%",color:"black",marginTop:"15%"}}
            placeholder='Category'
            placeholderTextColor={"black"}
            value={category}
            onChangeText={text=> setCategory(text)}
            />
            <View style={{width:"70%",alignSelf:"center"}}>
            <Button title='Post Data' onPress={() => (postData())} />
            </View>
        </View>
    );
};

export default AxiousApi;