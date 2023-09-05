import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import React from 'react';
import FontFamily from '../../assets/customfonts/fonts';

const styles = StyleSheet.create({
 mainview:{
    height:responsiveHeight(100),
    width:responsiveWidth(100),
    backgroundColor:"lightblue"
 },
 text:{
    color:"black",
 },
 flatlist: {
   width:responsiveWidth(100),
 },
});

export default styles;
