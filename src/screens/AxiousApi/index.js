import { View, Text, Button } from 'react-native';
import React, { useEffect } from 'react';
import axios from 'axios';
import { TextInput } from 'react-native';
import { useState } from 'react';
import styles from './style';


const AxiousApi = () => {
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    const [category, setCategory] = useState();


    // const getData = async () => {
    //     const result =await axios.get('https://fakestoreapi.com/carts');
    //     console.log("Data is :",result.data)
    // }

    const postData = async () => {
        const result = await axios.post('https://fakestoreapi.com/products',
            {
                title: title,
                price: price,
                description: description,
                image: 'https://i.pravatar.cc',
                category: category,
            }
        )
        console.log("Data is :", result.data)
    }

    useEffect(() => {
        postData();
    }, [])

    return (
        <View>
            <Text style={styles.headertext}>Post Api</Text>
            <TextInput
                style={styles.textinput1}
                placeholder='Title'
                placeholderTextColor={"black"}
                value={title}
                onChangeText={text => setTitle(text)}
            />
            <TextInput
                style={styles.textinput2}
                placeholder='Price'
                placeholderTextColor={"black"}
                value={price}
                onChangeText={text => setPrice(text)}
            />
            <TextInput
                style={styles.textinput3}
                placeholder='description'
                placeholderTextColor={"black"}
                value={description}
                onChangeText={text => setDescription(text)}
            />
            <TextInput
                style={styles.textinput4}
                placeholder='Category'
                placeholderTextColor={"black"}
                value={category}
                onChangeText={text => setCategory(text)}
            />
            <View style={styles.buttonview}>
                <Button title='Post Data' onPress={() => (postData())} />
            </View>
        </View>
    );
};

export default AxiousApi;