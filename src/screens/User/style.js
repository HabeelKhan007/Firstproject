import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth, } from 'react-native-responsive-dimensions';

const styl = StyleSheet.create({
    image: {
        marginLeft: "10%",
        height: "100%",
        width: "100%",
        borderRadius: 10,
    },
    safeareaview: {
        height: "100%",
        backgroundColor: 'white',
    },
    carouselview: {
        flexDirection: 'row',
        alignItems:"center",
    },
});

export default styl;