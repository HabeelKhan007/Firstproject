import { View, TextInput, Button, ImageBackground, TouchableOpacity, Alert, FlatList, Text } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React, { useState } from 'react';
import sstyle from './style';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Contact = () => {

  const [emails, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigation = useNavigation();
  const [userDetail, setUserDetail] = useState([]);
  let getUserData = [];

  const handleLogin = async () => {
     try {
       const data = await AsyncStorage.getItem('Userinfo');

      if (data !== null) {
        const parsedData = JSON.parse(data);
        setUserDetail(parsedData);
        // console.log(userDetail)
      }
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
   
  };




// handleLogin()

    // console.log(getUserData)

    // setEmail(Emails)

    // const Email = await AsyncStorage.getItem('Email');
    // // const Password = await AsyncStorage.getItem('Password');

    // if (Email === email) {
    //   navigation.navigate('Profile');
    // } else {
    //   console.warn('invalid');
    // }

    // const Users = await AsyncStorage.getItem('Users')

    // const UserArray = JSON.parse(Users)

    // console.log('user array is:',UserArray)



  return (

    <View style={sstyle.container}>
    

      {/* <View> */}
        {/* {userDetail.length == 0 &&
        ( */}
          {userDetail.forEach(c=>{
            console.log(c.email)
          })}
        {/* )
        } */}
        
      {/* </View> */}
      <Text style={{ color: 'black' }}>
        cbjcbdjkf
      </Text>

      {/* <ImageBackground
        source={require('../../assets/images.jpg')}
        style={sstyle.imagebackground}> */}
      {/* <View style={sstyle.view}>
          <Fontisto name="react" size={100} color="white" />
        </View> */}

      {/* <TextInput
          style={sstyle.textinput}
          placeholder="User Name"
          placeholderTextColor={'white'}
          autoCapitalize='none'
          autoCorrect={false}
        /> */}
      {/* <TViewPropTypesextInput
          style={sstyle.textinput1}
          placeholder="Email"
          placeholderTextColor={'white'}
          keyboardType='email-address'
          textContentType='emailAddress'
          onChangeText={text => setEmail(text)}
          value={emails}
          autoCapitalize='none'
          autoCorrect={false}
        /> */}
      {/* <TextInput
          style={sstyle.textinput2}
          placeholder="Password"
          placeholderTextColor={'white'}
          textContentType='password'
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
          autoCapitalize='none'
        /> */}
      <Button title="Register" color={'darkblue'} onPress={() => (handleLogin())} />

      {/* <View style={{width:"90%",alignSelf:"center"}}>
        <Button title="Register" color={'darkblue'} onPress={()=>(handleLogin())} />
        </View>
        <View style={sstyle.view1}>
          <TouchableOpacity
            style={sstyle.tochableopacity}>
            <AntDesign name="googleplus" size={40} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={sstyle.tochableopacity1}>
            <FontAwesome name="facebook" size={40} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={sstyle.tochableopacity2}>
            <AntDesign name="instagram" size={40} color="white" />
          </TouchableOpacity>
        </View> */}
      {/* </ImageBackground> */}
    </View>
  );
};

export default Contact;