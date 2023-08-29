import { View, Text, TouchableOpacity, TextInput, ScrollView, ImageBackground } from 'react-native';
import React,{useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import styless from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';

// const User = [
//       { id: '1', name: 'ahmad', emails:"saa@gmail.com", },
//       { id: '2', name: 'ali' },
//       { id: '3', name: 'tufail' },
//     ];


const Signup = () => {

  const [userName, setUserName] = useState();
  const[userEmail, setUserEmail] = useState();
  const [secondname, setSecondname] = useState('');
  const [confirmemail, setConfirmemail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [confirmPassword, setConfirmpassword] = useState('');
  const [usernumber, setNumber] = useState('');
  const [userData, setUserData] = useState([
  //  { 
  //   name: userName,
  //   email: useremail,
  //   password: userpassword,
  //   mobileNum: usernumber,
  //   confirmPass: confirmPassword,
  // }
  ]);

  // this.state.users.map((userData) => {
  //   console.log(userData.username);
  //   if(userData.mail === email){
  //     console.log('user already exist')
  //   }else{
  //     console.log('user created')
  //   }
  // });


//   const addUserData = async () => {
//   try {
//     const newObj = { name: userName, number: usernumber, email: userEmail, password: userPassword };
    
//     // Check if the email already exists in userData
//     const emailExists = userData.some(element => element.email === newObj.email);
//     console.log('data',emailExists )
//     if (emailExists) {
//       console.log('User Already Exists');
//       return; // Return early to prevent further execution
//     }

//     const updatedArray = [...userData, newObj];
//     console.log('updated array',updatedArray)
//     setUserData(updatedArray);

//     await AsyncStorage.setItem('Userinfo', JSON.stringify(updatedArray));

//     console.log('User Signup Successfully');
//     // navigation.navigate('Contact');
//   } catch (error) {
//     console.log('Error', error);
//   }
// }

 
  

  const addUserData = async () =>{

    const userArray = await AsyncStorage.getItem('Userinfo')
    const parseData = JSON.parse(userArray)

    

    try {
      const newObj = { name: userName, number: usernumber, email: userEmail, password: userPassword };
      
      const existEmail = parseData.some(element => element.email === newObj.email)
      parseData.foreach(element => {
        if (element.email === newObj.email) {
          console.log('user exist');
         return;
        }
        
      });

  const updatedArraya = [...userData, newObj];
      setUserData(updatedArraya)
  
      AsyncStorage.setItem('Userinfo', JSON.stringify(updatedArraya))
      console.log('User Signup')
      
    } catch (error) {
      console.log('error', error)
    }
   
    
    
  }
  
  
  // const navigation = useNavigation();

  // const handleSignup = async () => {



    // try {
    //   await AsyncStorage.setItem('Email', email)
    //   console.warn('Data Saved')
    //   navigation.navigate('Contact')
    // } catch (error) {
    //   console.log(error)
    // }
    
      // await AsyncStorage.setItem("Users", JSON.stringify(User))
      // console.warn('items Set')
      // navigation.navigate('Contact')
    

   
    // await AsyncStorage.setItem('SecondName', secondname)
    // await AsyncStorage.setItem('Email', email)
    // await AsyncStorage.setItem('ConfirmEmail', confirmemail)
    // await AsyncStorage.setItem('Password', password)
    // await AsyncStorage.setItem('ConfirmPassword', confirmPassword)
    // await AsyncStorage.setItem('Number', number)
    // console.warn('user signup succesfully')

    // const allKeys = await AsyncStorage.getAllKeys();
    // console.log('Number of signups:', allKeys.length);

    // console.log(email)
    // navigation.navigate('Contact')
  // }

  return (
    <View style={styless.container}>
      <ImageBackground source={require('../../assets/images.jpg')}
        style={styless.imagebackground}
      >
        <ScrollView>
          <Text
            style={styless.text1}>
            SIGNUP
          </Text>

          <TextInput
            style={styless.textinput}
            placeholder="First Name"
            // value={firstname}
            onChangeText={text =>{
              setUserName(text)
              // setFirstname(text)
            }
            }
            autoCapitalize='none'
          />
          <TextInput
            style={styless.textinput1}
            placeholder="Second Name"
            // value={secondname}
            // onChangeText={text => setSecondname(text)}
            autoCapitalize='none'
          />
          <TextInput
            style={styless.textinput2}
            placeholder="Email"
            keyboardType='email-address'
            value={userEmail}
            onChangeText={text => setUserEmail(text)}
            autoCapitalize='none'
          />
          <TextInput
            style={styless.textinput3}
            placeholder="Confirm Email"
            // value={confirmemail}
            // onChangeText={text => setConfirmemail(text)}
            autoCapitalize='none'
          />
          <TextInput
            style={styless.textinput4}
            placeholder="Password"
            value={userPassword}
            onChangeText={text => setUserPassword(text)}
            secureTextEntry
            autoCapitalize='none'
          />
          <TextInput
            style={styless.textinput5}
            placeholder="Confirm Password"
            // value={confirmPassword}
            // onChangeText={text => setConfirmpassword(text)}
            secureTextEntry
            autoCapitalize='none'
          />
          <TextInput
            style={styless.textinput6}
            placeholder="Mobile Number"
            // value={number}
            onChangeText={text => setNumber(text)}
            keyboardType="number-pad"
            autoCapitalize='none'
          />

          <TouchableOpacity onPress={() => (addUserData())}
            style={styless.touchableopacity}
          >
            <Text style={styless.text2}>Submit</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => console.log(userData)}
            style={styless.touchableopacity}
          >
            <Text style={styless.text2}>Check</Text>
          </TouchableOpacity>
        </ScrollView>

      </ImageBackground>
    </View>
  );
};

export default Signup;
