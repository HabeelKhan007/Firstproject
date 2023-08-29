import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import React from 'react';
import FontFamily from '../../assets/customfonts/fonts';

const styles = StyleSheet.create({
  headerview:{
    flex: 1, 
    backgroundColor: "#2F80EC",
  },
  headertextview:{
    alignItems: "center",
  },
  text1:{
    marginTop: "3%", 
    fontFamily: FontFamily.OpenSans_Condensed_ExtraBold, 
    color: "white",
  },
  flatlistmainview:{
    flex: 1, 
    backgroundColor: "white", 
    marginTop: '5%',
  },
  imageandtextview:{
    margin: "4%", 
    marginLeft: "9%", 
    alignItems: "center",
  },
  imagesview:{
    backgroundColor: "gainsboro", 
    width: responsiveWidth(35), 
    height: responsiveHeight(20), 
    alignItems: "center", 
    justifyContent: "center",
  },
  images:{
    width: responsiveWidth(27), 
    height: responsiveHeight(15),
  },
  text2:{
    color: "black", 
    fontFamily: FontFamily.OpenSans_Condensed_SemiBold,
  },
});

export default styles;
