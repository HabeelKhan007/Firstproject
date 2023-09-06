import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import React from 'react';
import FontFamily from '../../assets/customfonts/fonts';

const styles = StyleSheet.create({
   mainview:{
    flex:1,
   },
   text:{
    color:"black",
    alignSelf:"center",
    fontSize:20,
    fontFamily:FontFamily.OpenSans_Condensed_Bold,
   },
});

export default styles;
