import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import FontFamily from '../../assets/customfonts/fonts';

const stylees = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundimage: {
        width: "100%",
        height: "100%",
    },
    topiconsview: {
        flexDirection: "row",
        marginTop: "5%",
        marginLeft: "3%",
    },
    bookmarkicon: {
        marginLeft: "80%",
    },
    text1view: {
        marginTop: "8%",
        marginLeft: "6%",
    },
    text1: {
        fontFamily: FontFamily.OpenSans_Condensed_ExtraBold,
        fontSize: 18,
        color: "white",
    },
    text2view: {
        flexDirection: "row",
        marginLeft: "6%",
        marginTop: "2%",
    },
    text2: {
        fontFamily: FontFamily.OpenSans_Condensed_ExtraBold,
        color: "white",
    },
    text3view: {
        flexDirection: "row",
        marginLeft: "6%",
        marginTop: "2%",
    },
    text3: {
        fontFamily: FontFamily.OpenSans_Condensed_ExtraBold,
        color: "white",
    },
});

export default stylees;