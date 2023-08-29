import { StyleSheet } from 'react-native';
import React from 'react';

const stylles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  flatlist: {
    width: '100%',
  },
  view: {
    width: '95%',
    height: 150,
    margin: "3%",
    backgroundColor: '#4CC552',
    flexDirection: 'row',
    borderRadius: 30,
  },
  view1: {
    width: '20%',
    height: '50%',
    marginLeft: '5%',
    marginTop: '8%',
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
  text: {
    color: 'black',
    marginLeft: '5%',
    marginTop: '10%',
    fontSize: 20,
  },
  text1: {
    color: 'black',
    marginLeft: '6%',
    marginTop: '1%',
  },
  view2: {
    flexDirection: 'row',
  },
  view3: {
    marginLeft: "4%",
    marginTop: "8%",
  },
  text2: {
    color: 'black',
    fontSize: 12,
  },
  view4: {
    marginLeft: "3%",
    flexDirection: 'row',
  },
  text3: {
    color: 'black',
    fontSize: 10,
    marginLeft: '10%',
  },
});

export default stylles;