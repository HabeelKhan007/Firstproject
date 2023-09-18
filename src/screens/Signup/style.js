import {StyleSheet} from 'react-native'
import React from 'react'
import FontFamily from '../../assets/customfonts/fonts';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const styless = StyleSheet.create({
  container: {
    flex:1,
  },
  text1: {
    marginTop: "2%",
    fontSize: 50,
    fontFamily: FontFamily.OpenSans_Condensed_Bold,
    color:"black"
  },
  textinput: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: "7%",
    padding: '2%',
    margin: '3%',
    color:"black",
  },
  imagebackground: {
   flex:1,
  },
  textinput1: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    padding: '2%',
    margin: '3%',
    color:"black",
  },
  textinput2: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    padding: '2%',
    margin: '3%',
    color:"black",
  },
  // textinput3: {
  //   borderColor: 'black',
  //   borderWidth: 1,
  //   borderRadius: 10,
  //   padding: '2%',
  //   margin: '3%',
  // },
  textinput4: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    padding: '2%',
    margin: '3%',
    color:"black",
  },
  // textinput5: {
  //   borderColor: 'black',
  //   borderWidth: 1,
  //   borderRadius: 10,
  //   padding: '2%',
  //   margin: '3%',
  // },
  textinput6: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    padding: '2%',
    margin: '3%',
    color:"black",
  },
  textinput7: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    padding: '2%',
    margin: '3%',
    color:"black",
  },
  touchableopacity: {
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
    margin: '2%',
    borderRadius: 20,
    padding: '2%',
    width:"50%",
    alignSelf:"center",
    backgroundColor:"blue"
  },
  text2: {
    color:"white",
    fontSize: 20,
    fontFamily:FontFamily.OpenSans_Condensed_BoldItalic
  },
});


export default styless;