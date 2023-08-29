import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Home from '../Home';
import Product from '../Product';
import FontFamily from '../../assets/customfonts/fonts';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import styles from './style';
import { useNavigation } from '@react-navigation/native';


const ITEMS = [
    {
        id: '1',
        image: require('../../assets/dress.png'),
        name: "Fashion",
        color: "#FF57",
    },
    {
        id: '2',
        image: require('../../assets/electronics1.png'),
        name: "Electronics",
        color: "#F4E9B9",
    },
    {
        id: '3',
        image: require('../../assets/car.png'),
        name: "Cars",
        color: "#FF3",
    },
    {
        id: '4',
        image: require('../../assets/grocery1.png'),
        name: "Grocery",
        color: "#F8D8D7",
    },
    {
        id: '5',
        image: require('../../assets/mobile1.png'),
        name: "Smart Phones",
        color: "#C5ECEE",
    },
    {
        id: '6',
        image: require('../../assets/book.png'),
        name: "Books",
        color: "#D0F1CB",
    },
    {
        id: '7',
        image: require('../../assets/burger.png'),
        name: "Food",
        color: "#FFE7F9",
    },
    {
        id: '8',
        image: require('../../assets/plane.png'),
        name: "Travelling",
        color: "#F3E5CE",
    },
    {
        id: '9',
        image: require('../../assets/jewelry.png'),
        name: "Jewellry",
        color: "#EAE8FE",
    },
    {
        id: '10',
        image: require('../../assets/tennis.png'),
        name: "Sports",
        color: "#EAE",
    },
];
const Items = () => {

    const navigation = useNavigation();
    function nav(id) {
        console.log('ddd', id);
        switch (id) {
            case '1':
                navigation.navigate('Fashion');
                break;
            // case '2':
            //     navigation.navigate('Review');
            //     break;
            // case '3':
            //     navigation.navigate('Signup');
            //     break;
            // case '4':
            //     navigation.navigate('Home');
            //     break;
            // case '5':
            //     navigation.navigate('About');
            //     break;
            // case '6':
            //     navigation.navigate('Login');
            //     break;

            default:


        }
    };
    return (
        <View style={styles.headerview}>
            <View style={styles.iconandtextview}>
                <TouchableOpacity onPress={() => navigation.navigate(Home)}>
                    <AntDesign name='arrowleft' size={20} color={'white'} />
                </TouchableOpacity>
                <Text style={styles.text1}>All Categories</Text>
            </View>

            <View style={styles.flatlistmainview}>
                <View style={styles.flatlistview}>
                    <FlatList
                        numColumns={4}
                        key={4}
                        data={ITEMS}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => nav(item.id)}>
                                <View style={styles.imagesandtextview}>
                                    <View style={{
                                        width: responsiveWidth(19),
                                        height: responsiveHeight(10),
                                        marginTop: "10%",
                                        backgroundColor: item.color,
                                        borderRadius: 100,
                                        alignItems: "center",
                                        justifyContent: "center"}}>
                                        <Image
                                            source={item.image}
                                            style={styles.images}
                                        />
                                    </View>
                                    <Text style={styles.texts}>{item.name}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </View>

        </View>
    );
};

export default Items;