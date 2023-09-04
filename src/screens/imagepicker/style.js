import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import React from 'react';
import FontFamily from '../../assets/customfonts/fonts';

const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    // alignItems:"center",
    // justifyContent:"center",
  },
  image: {
    width: "98%",
    height: "100%",
    marginLeft: "1%",
    // resizeMode:"center",
    // marginTop:"5%",

  },
  buttonview: {
    width: "60%",
    marginTop: "10%",
    marginBottom: "50%",
    alignSelf: "center",
  },
  scrollview: {
    backgroundColor: "gainsboro",
    height: "5%",
  },
  imagesmainview: {
    flexDirection: 'row',
    height: "40%",
    marginTop: "3%",
  },
  imagesview: {
    height: responsiveHeight(40),
    width: responsiveWidth(100),
  },
  touchableopacity: {
    width: "40%",
    height: "20%",
    backgroundColor: "red",
    alignSelf: "center",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: "5%",
  },
  touchabletext: {
    fontSize: 20,
  },
  text: {
    color: "black",
    fontSize:20,
  },
});

export default styles;
