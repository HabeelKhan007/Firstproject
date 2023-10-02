import { View, Text, TextInput, TouchableOpacity, ImageBackground, Image,ScrollView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import style from './style';
import styles from './style';
import { useState,useEffect } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Login = () => {

  const [useremail, setEmail] = useState();
  const [userpassword, setPassword] = useState();
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
    const userData = await AsyncStorage.getItem('Userinfo');
    const userInfo =JSON.parse(userData)
    // const Password = await AsyncStorage.getItem('Password');

    console.log("email ", userInfo)

    const emailExists = userInfo.some(element => element.email === useremail && element.password === userpassword);
    if(emailExists){
      console.log("user login")
      navigation.navigate('catogries')
    }else{
      console.log("usernot present")
      console.warn("Invalid User Data")
    }
      // if(userInfo.email === useremail){
      //   console.log("User login")
      //   navigation.navigate('catogries')

      // }else{
      //   console.log("invalid email and password")
      // }
    

    // if(Email===email && Password===password){
    //   navigation.navigate('Profile');
    // }else{
    //   console.warn('invalid');
    // }
  }

  return (
    <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <Image
          source={require('../../assets/avatar.png')}
          style={{width:"100%",height:"100%"}}
          />
        </View>
        <ScrollView>
        <TextInput
          style={styles.textinput1}
          placeholder="Email"
          placeholderTextColor={'black'}
          keyboardType="email-address"
          onChangeText={text => setEmail(text)}
          value={useremail}
          autoCorrect={true} />
        <TextInput
          style={styles.textinput2}
          placeholder="Password"
          placeholderTextColor={'black'}
          secureTextEntry
          value={userpassword}
          onChangeText={text => setPassword(text)} />

        

        <TouchableOpacity
          onPress={() => {handleLogin()}}
          style={styles.touchableopacity1}>
          <Text style={styles.text2}>LogIn</Text>
        </TouchableOpacity>

        <View style={{flexDirection:"row",alignItems:"center",width:"60%",alignSelf:"center"}}>
        <TouchableOpacity>
          <Text style={styles.text1}>Already have account.?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Signup')}
          style={styles.touchableopacity2}>
          <Text style={styles.text3}>SignUp</Text>
        </TouchableOpacity>
        </View>
        </ScrollView>

        {/* <TouchableOpacity
          onPress={() => { deleteData() }}
          style={styles.touchableopacity2}>
          <Text style={styles.text3}>Delete Data</Text>
        </TouchableOpacity> */}
     
    </View>
  );
};

export default Login;
