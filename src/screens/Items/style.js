import { StyleSheet } from 'react-native'
import React from 'react'
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import FontFamily from '../../assets/customfonts/fonts';

const styles = StyleSheet.create({
    headerview:{
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
        borderTopLeftRadius: 20, 
        borderTopRightRadius: 20,
    },
    flatlistview:{
        backgroundColor: "white", 
        height: responsiveHeight(86), 
        width: responsiveWidth(92), 
        marginLeft: "4%", 
        marginTop: "3%", 
        borderTopLeftRadius: 10, 
        borderTopRightRadius: 10,
    },
    imagesandtextview:{
        marginLeft: "4%",
    },
    images:{
        width: responsiveWidth(13), 
        height: responsiveHeight(7),  
    },
    texts:{
        color: "black", 
        alignSelf: "center", 
        fontFamily: FontFamily.OpenSans_Condensed_SemiBold,
    },
});


export default styles;