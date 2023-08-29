import {StyleSheet} from 'react-native'
import React from 'react'
import {responsiveHeight,responsiveWidth} from 'react-native-responsive-dimensions';
import FontFamily from '../../assets/customfonts/fonts';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "gainsboro",
    },
    view1: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "white",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomWidth:0.5,
    },
    text1: {
        color: "black",
        marginLeft: "2%",
        marginTop: "1%",
        fontSize: 18,
        fontFamily: FontFamily.OpenSans_Condensed_Bold,
    },
    text2: {
        color: "red",
        marginRight: "2%",
        marginTop: "1%",
        fontSize: 14,
        fontFamily: FontFamily.OpenSans_Condensed_Bold,
    },
    flatlistview: {
        backgroundColor: "gainsboro",
    },
    imagesview: {
        backgroundColor: "white",
        paddingLeft: "2%",
        width: responsiveWidth(35),
    },
    images: {
        width: responsiveWidth(33),
        height: responsiveHeight(20),
        borderRadius: 10,
        marginTop: "2%",
    },
    iconview: {
        position: 'absolute',
        marginLeft: "80%",
        marginTop: "5%",
    },
    text3: {
        color: "black",
        fontFamily: FontFamily.OpenSans_Condensed_ExtraBold,
    },
    text4: {
        color: "grey",
        fontFamily: FontFamily.OpenSans_Condensed_Medium,
    },
    priceandiconview: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    text5: {
        color: "red",
    },
    flatlist2mainview:{
        flex:1,
    },
    flatlist2view: {
        backgroundColor: "white",
        padding: "2%",
        width: "100%",
        flexDirection: "row",
    },
    images2: {
        width: responsiveWidth(20),
        height: responsiveHeight(15),
        borderRadius: 5,
    },
    textsmainview: {
        marginLeft: "2%",
        width: "75%",
    },
    nameiconview: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    text6: {
        marginLeft: "2%",
        color: "black",
        fontSize: 15,
        fontFamily: FontFamily.OpenSans_Condensed_Bold,
    },
    text7: {
        color: "black",
        flexWrap: "wrap",
        fontFamily: FontFamily.OpenSans_Condensed_Light,
        marginLeft:"2%",
    },
    priceiconview: {
        flexDirection: "row",
        marginTop: "2%",
        justifyContent: "space-between",
    },
    text8: {
        color: "red",
    },
    texts9view: {
        backgroundColor: "white",
        marginTop: "2%",
        borderBottomWidth:0.5,
    },
    text9: {
        color: "black",
        fontFamily: FontFamily.OpenSans_Condensed_Bold,
        marginLeft: "2%",
    },
    text10: {
        color: "grey",
        marginLeft: "2%",
        fontFamily: FontFamily.OpenSans_Condensed_Light,
    },
    separator: {
        height:responsiveHeight(0.5),
        width:responsiveWidth(1.5),
    },
});

export default styles;


