import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import React from 'react';
import FontFamily from '../../assets/customfonts/fonts';

const styles = StyleSheet.create({
  mainview:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
  },
  image:{
    width:"100%",
    height:"100%",
    resizeMode:"center",
    marginTop:"5%",
    
  },
  buttonview:{
    width:"60%",
    marginTop:"5%",
  },
});

export default styles;
