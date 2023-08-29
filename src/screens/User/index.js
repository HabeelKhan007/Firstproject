import * as React from 'react';
import {View,SafeAreaView,Image} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import styl from './style';

const carouselItems = [
  {
    image: require('../../assets/swipe1.jpg'),
  },
  {
    image: require('../../assets/swipe2.jpg'),
  },
  {
    image: require('../../assets/swipe3.jpg'),
  },
  {
    image: require('../../assets/swipe4.jpg'),
  },
  {
    image: require('../../assets/swipe5.jpg'),
  },
  {
    image: require('../../assets/swipe6.jpg'),
  },
]


const App = () => {

  const renderItem = ({ item, index }) => {
    return (
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Image source={item.image} style={styl.image} />
      </View>

    )
  }
  return (
    <SafeAreaView style={styl.safeareaview}>
      <View style={styl.carouselview}>
        <Carousel
          autoplay
          loop={true}
          layout={"default"}
          data={carouselItems}
          sliderWidth={300}
          itemWidth={250}
          renderItem={renderItem}
          inactiveSlideScale={0.9}
          activeSlideAlignment='center'
        />
      </View>
    </SafeAreaView>
  );
}

export default App;
