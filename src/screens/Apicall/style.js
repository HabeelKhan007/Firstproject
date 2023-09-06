import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import React from 'react';
import FontFamily from '../../assets/customfonts/fonts';

const styles = StyleSheet.create({
   mainview: {
      height: responsiveHeight(100),
      width: responsiveWidth(100),
      backgroundColor: "lightblue"
   },
   text1: {
      color: "black",
      alignSelf: "center",
      fontSize: 30,
      fontFamily: FontFamily.OpenSans_Condensed_ExtraBold,
   },
   flatlist: {
      width: responsiveWidth(100),
   },
   flastlistview: {
      height: responsiveHeight(100),
      width: responsiveWidth(100),
   },
   dataview: {
      backgroundColor: 'white',
      flexDirection: "row",
      flexWrap: "wrap",
   },
   text2: {
      fontSize: 20,
      color: "black",
   },
   text3: {
      color: "black",
   },
   text4: {
      marginTop: "2%",
      color: "black",
   },
});

export default styles;
