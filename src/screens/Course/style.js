import { StyleSheet } from 'react-native'
import React from 'react'
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import FontFamily from '../../assets/customfonts/fonts';

const styll = StyleSheet.create({

  mainView: {
    flex: 1,
    backgroundColor: 'rgb(47,128,235)',
  },
  contentContainer: {
    flexGrow: 1,
  },
  placeholder1: {
    borderWidth: 1,
    borderLeftWidth: 0,
    borderColor: 'grey',
    paddingHorizontal: '2%',
    fontSize: 13,
    width: responsiveWidth(75),
    marginHorizontal: '8%',
    alignSelf: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    color: 'black',
    backgroundColor: 'white',
    marginLeft: '-0.8%',
    height: responsiveHeight(7),
  },
  menuview: {
    backgroundColor: 'rgb(47,128,235)',
    height: responsiveHeight(16),
  },
  iconimagemainview: {
    flexDirection: 'row',
  },
  iconview: {
    marginTop: '5%',
    marginLeft: '5%',
  },
  imageview: {
    width: '6%',
    height: '34%',
    marginTop: '5%',
    marginLeft: '6%',
    borderRadius: 100,
  },
  image: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 100,
  },
  textview1: {
    marginTop: '5%',
    marginLeft: '2%',
  },
  text: {
    color: 'white',
    fontFamily: FontFamily.OpenSans_Condensed_ExtraBold,
  },
  iconview2: {
    marginTop: '5%',
    marginLeft: '53%',
  },
  textinputmainview: {
    flexDirection: 'row',
  },
  searchiconview: {
    marginTop: '0.3%',
    marginLeft: '5%',
    backgroundColor: 'white',
    height: responsiveHeight(6.76),
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderRightWidth: 0,
  },
  notificationicon: {
    marginLeft: '40%',
    marginTop: '5%',
  },
  containerview: {
    backgroundColor: 'gainsboro',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  imagesmainview: {
    backgroundColor: 'white',
    width: '95%',
    marginLeft: '2%',
    borderRadius: 20,
    padding: '3%',
    marginTop: '2%',
  },
  imagesview: {
    flexDirection: 'row',
    width: '20%',
  },
  image1view: {
    height: responsiveHeight(9),
    width: '90%',
    marginLeft: '26%',
    backgroundColor: 'rgb(207,241,197)',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image1: {
    height: responsiveHeight(6),
    width: responsiveWidth(11),
  },
  image2view: {
    height: responsiveHeight(9),
    width: '90%',
    marginLeft: '30%',
    backgroundColor: 'rgb(238,225,193)',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image2: {
    height: responsiveHeight(6),
    width: responsiveWidth(11),
  },
  image3view: {
    height: responsiveHeight(9),
    width: '90%',
    marginLeft: '30%',
    backgroundColor: 'rgb(197,232,236)',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image3: {
    height: responsiveHeight(6),
    width: responsiveWidth(11),
  },
  image4view: {
    height: responsiveHeight(9),
    width: '90%',
    marginLeft: '30%',
    backgroundColor: 'rgb(250,212,213)',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image4: {
    height: responsiveHeight(6),
    width: responsiveWidth(11),
  },
  textsmainview: {
    flexDirection: 'row',
    marginTop: '1%',
  },
  text1: {
    color: 'black',
    fontFamily: FontFamily.OpenSans_Condensed_Medium,
    marginLeft: '7%',
    fontSize: 12,
  },
  text2: {
    marginLeft: '13%',
    color: 'black',
    fontSize: 13,
    fontFamily: FontFamily.OpenSans_Condensed_Medium,

  },
  text3: {
    marginLeft: '10%',
    color: 'black',
    fontSize: 13,
    fontFamily: FontFamily.OpenSans_Condensed_Medium,
  },
  text4: {
    marginLeft: '10%',
    color: 'black',
    fontSize: 13,
    fontFamily: FontFamily.OpenSans_Condensed_Medium,
  },
  swipermainview: {
    backgroundColor: 'white',
    width: '95%',
    marginLeft: '2%',
    borderRadius: 20,
    marginTop: '2%',
    padding: '3%',
  },
  swiperview: {
    height: responsiveHeight(25),
  },
  mappingmainview: {
    backgroundColor: 'white',
    width: '95%',
    marginLeft: '2%',
    borderRadius: 20,
    marginTop: '2%',
    height: responsiveHeight(32.5),
  },
  textview2: {
    flexDirection: 'row',
    borderBottomWidth: 0.2,
  },
  text5: {
    color: 'black',
    fontSize: 10,
    marginLeft: '5%',
    marginTop: '1%',
    fontSize: 13,
    fontFamily: FontFamily.OpenSans_Condensed_ExtraBold,
  },
  text6: {
    color: 'red',
    fontSize: 9,
    marginLeft: '59%',
    marginTop: '2%',
    fontSize: 10,
    fontFamily: FontFamily.OpenSans_Condensed_ExtraBold,
  },
  mappingitemsmainview: {
    width: '100%',
    height: responsiveHeight(55),
    width: responsiveWidth(90),
    marginLeft: "3%",
  },
  mapimagesview: {
    marginTop: "2%",
    height: responsiveHeight(25),
    width: responsiveWidth(40),
    backgroundColor: "white",
  },
  mapimagesview2: {
    backgroundColor: "gainsboro",
    margin: "3%",
    marginTop: "0%",
    alignItems: "center",
    justifyContent: "center",
    height: responsiveHeight(20),
    borderRadius: 10,
    width: responsiveWidth(35),
  },
  mapimages: {
    width: responsiveWidth(27),
    height: responsiveHeight(15),
  },
});


export default styll;