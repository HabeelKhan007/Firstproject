import { View, Text } from 'react-native';
import React from 'react';
import FontFamily from '../../assets/customfonts/fonts';

const Review = () => {
  return (
    <View style={{alignItems:"center",justifyContent:"center"}}>
      <Text style={{fontFamily:FontFamily.OpenSans_Condensed_ExtraBold,color:"black"}}>No Review Yet</Text>
    </View>
  );
};

export default Review;