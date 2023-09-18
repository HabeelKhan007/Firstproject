import { StyleSheet } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    // marginBottom: 10,
    alignItems:"center",
    width:responsiveWidth(40),
    height:responsiveHeight(20),
    alignSelf:"center",
    marginTop:"5%",
  },
  backgroundimage: {
    height: responsiveHeight(100),
    width: responsiveWidth(100),
    alignItems: 'center',
  },
  textinput1: {
    borderColor: 'black',
    color:"black",
    borderWidth: 1,
    width: '90%',
    borderRadius: 10,
    marginTop:"15%",
    marginLeft:"5%",
  },
  textinput2: {
    borderColor: 'black',
    color:"black",
    borderWidth: 1,
    width: '90%',
    borderRadius: 10,
    marginTop:"3%",
    marginLeft:"5%",
  },
  text1: {
    color: 'red',
    marginTop:"5%",
    fontStyle: 'italic',
    fontWeight:"bold",
    fontSize: 12,
  },
  touchableopacity1: {
    padding:"2%",
    marginTop:"10%",
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
    width:"50%",
    alignSelf:"center",
    backgroundColor:"blue",
  },
  text2: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  touchableopacity2: {
    marginLeft:"10%",
  },
  text3: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginTop:"5%",
  },
});

export default styles;