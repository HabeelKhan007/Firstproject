import { View, Text, TextInput, TouchableOpacity, ImageBackground, } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import style from './style';
import styles from './style';
import { useState,useEffect } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigation = useNavigation();

// useEffect(() => {
// getData();
// })
  // const setData = async() =>{
  //   await AsyncStorage.setItem('Email', email);
  //   await AsyncStorage.setItem('Password', password);
  //   navigation.navigate('Profile')
  //   console.warn('saved');
    
  // };
  // const getData = async() =>{
  //   const email= await AsyncStorage.getItem('Email');
  //   const password = await AsyncStorage.getItem('Password');
  //   // const getemail = email;
  //   // setEmail(getemail)
  //   console.log('Email:' + email);
  //   console.log('Password:' + password);
  // }

  // const deleteData = async () => {
  //   await AsyncStorage.removeItem('Email');
  //   await AsyncStorage.removeItem('Password');
  // };

  const handleLogin = async() =>{
    const Email = await AsyncStorage.getItem('Email');
    const Password = await AsyncStorage.getItem('Password');

    if(Email===email && Password===password){
      navigation.navigate('Profile');
    }else{
      console.warn('invalid');
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLaM9sDn-xB3wsrJaUCyXJc3ClKKKVIN2dFQ&usqp=CAU',
        }}
        style={styles.backgroundimage}>
        <View style={styles.container}>
          <MaterialCommunityIcons name='account-check' size={200} color="gainsboro" />
        </View>
        <TextInput
          style={styles.textinput1}
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={text => setEmail(text)}
          value={email}
          autoCorrect={true} />
        <TextInput
          style={styles.textinput2}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)} />

        <TouchableOpacity>
          <Text style={styles.text1}>Forgot Password..?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {handleLogin()}}
          style={styles.touchableopacity1}>
          <Text style={styles.text2}>LogIn</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {getData()}}
          style={styles.touchableopacity2}>
          <Text style={styles.text3}>SignUp</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => { deleteData() }}
          style={styles.touchableopacity2}>
          <Text style={styles.text3}>Delete Data</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Login;
