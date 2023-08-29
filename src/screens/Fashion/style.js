import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import React from 'react';
import FontFamily from '../../assets/customfonts/fonts';

const styles = StyleSheet.create({
   headermainview:{
        flex: 1, 
        backgroundColor: "#2F80EC",
   },
   iconandtextview:{
       flexDirection: "row", 
       marginTop: "5%", 
       marginLeft: "3%",
   },
   text1:{
       marginLeft: '25%', 
       fontFamily: FontFamily.OpenSans_Condensed_ExtraBold, 
       fontSize: 15, 
       color: "white",
   },
   flatlistmainview:{
       flex: 1, 
       backgroundColor: "gainsboro", 
       marginTop: "2%", 
       borderTopRightRadius: 20, 
       borderTopLeftRadius: 20,
   },
   tabsmainview:{
       flexDirection: "row",
   },
   tab1view:{
       backgroundColor: "white", 
       marginTop: "2%", 
       width: "15%", 
       marginLeft: "5%", 
       alignItems: "center", 
       borderRadius: 2,
   },
   tabtexts:{
       color: "black",
   },
   tab2view:{
       backgroundColor: "white", 
       marginTop: "2%", 
       width: "18%", 
       marginLeft: "2%", 
       alignItems: "center", 
       borderRadius: 2,
   },
   tab3view:{
       backgroundColor: "white", 
       marginTop: "2%", 
       width: "12%", 
       marginLeft: "2%", 
       alignItems: "center", 
       borderRadius: 2,
   },
   flatlistview:{
       backgroundColor: "grey", 
       marginTop: "3%", 
       marginLeft: "5%", 
       height: responsiveHeight(82), 
       width: responsiveWidth(90), 
       borderTopRightRadius: 20, 
       borderTopLeftRadius: 20,
   },
   imagesandtextsview:{
       margin: "4%", 
       alignItems: "center", 
       justifyContent: "center",
   },
   imagesview:{
       marginLeft: "3%" ,
   },
   images:{
       height: responsiveHeight(20), 
       width: responsiveWidth(35), 
       borderRadius: 10,
   },
   text2:{
       color: "black", 
       fontFamily: FontFamily.OpenSans_Condensed_Bold,
   },
   text3:{
       color: "blue",
   },
});

export default styles;
