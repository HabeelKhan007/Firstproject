import { View, Text } from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {

    const navigation = useNavigation();

    useEffect(() =>{
        getData();
    })
    const getData = async () => {
        const email = await AsyncStorage.getItem('Email');
        const password = await AsyncStorage.getItem('Password');
        // const getemail = email;
        // setEmail(getemail)
        console.log('Email:' + email);
        console.log('Password:' + password);
    };
  return (
    <View>
      <Text style={{color:"black"}}>Profile</Text>
    </View>
  );
};

export default Profile;