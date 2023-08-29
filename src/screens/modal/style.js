import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import React from 'react';
import FontFamily from '../../assets/customfonts/fonts';

const Styles = StyleSheet.create({
   mainview:{
    flex:1,
   },
   buttonview:{
    flex:1,
    justifyContent:"flex-end",
   },
   modalmainview:{
       flex: 1, 
       justifyContent: "center", 
       alignItems: "center",
   },
   flatlistmainview:{
    backgroundColor:"#fff",
    height:"70%",
   },
   dataview:{
       justifyContent: "center",
        alignItems: "center",
         margin: "5%",
   },
   text:{
       color: "black",
   },
});

export default Styles;
