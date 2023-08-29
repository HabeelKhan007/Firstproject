import { StyleSheet } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  backgroundimage: {
    height: responsiveHeight(100),
    width: responsiveWidth(100),
    alignItems: 'center',
  },
  textinput1: {
    borderColor: 'pink',
    borderWidth: 1,
    width: '90%',
    padding: 8,
    borderRadius: 10,
    margin: 10,
  },
  textinput2: {
    borderColor: 'pink',
    borderWidth: 1,
    borderRadius: 10,
    width: '90%',
    padding: 8,
    margin: 10,
  },
  text1: {
    color: 'white',
    marginBottom: 10,
    marginTop: 20,
    fontStyle: 'italic',
  },
  touchableopacity1: {
    padding: 10,
    margin: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'darkpink',
    borderWidth: 1,
  },
  text2: {
    color: 'darkblue',
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  touchableopacity2: {
    padding: 10,
    margin: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'darkpink',
    borderWidth: 1,
  },
  text3: {
    color: 'darkblue',
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});

export default styles;