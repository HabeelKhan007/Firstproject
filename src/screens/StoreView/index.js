import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import FontFamily from '../../assets/customfonts/fonts';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../Actions';



const DATA = [
    {
        id: 1,
        name: "Red Shoes",
        image: require('../../assets/shoe1.jpg'),
        brand: "Nike",
        quantity: 0,
        price: 5000,
    },
    {
        id: 2,
        name: "Blue Shoes",
        image: require('../../assets/shoe2.jpg'),
        brand: "Bata",
        quantity: 0,
        price: 1000,
    },
    {
        id: 3,
        name: "Grey Shoes",
        image: require('../../assets/shoe3.jpg'),
        brand: "Gucci",
        quantity: 0,
        price: 4000,
    },
    {
        id: 4,
        name: "Dark Blue",
        image: require('../../assets/shoe4.jpg'),
        brand: "Service",
        quantity: 0,
        price: 2000,
    },
];

const Store = () => {

    const navigation = useNavigation();

    const dispatch = useDispatch();

    const addItem=(item)=>{
        dispatch(addItemToCart(item))
    }

    return (
        <View style={{ flex: 1, backgroundColor: "gainsboro" }}>
            <View style={{
                width: "100%",
                height: "8%",
                backgroundColor: "white",
            }}>
                <Text style={{
                    color: "black",
                    fontSize: 18,
                    marginLeft: "4%",
                    marginTop: "2%",
                    fontFamily: FontFamily.OpenSans_Condensed_Bold,
                }} >Redux Tool Kit Demo</Text>
            </View>
            <FlatList
                data={DATA}
                renderItem={({ item }) => (
                    <View style={{ backgroundColor: "white", flexDirection: "row", width: "95%", marginTop: "5%", borderRadius: 10, alignSelf: "center" }}>
                        <View style={{ width: responsiveWidth(30), height: responsiveHeight(20) }}>
                            <Image
                                source={item.image}
                                style={{ width: "100%", height: "100%", resizeMode: "cover", borderRadius: 10 }}
                            />
                        </View>
                        <View>
                            <Text style={{ color: "black", marginTop: "5%", marginLeft: "5%", fontSize: 15, fontFamily: FontFamily.OpenSans_Condensed_Bold }}>{item.name}</Text>
                            <Text style={{ color: "black", marginTop: "5%", marginLeft: "5%" }}>{item.brand}</Text>
                            <Text style={{ color: "green", marginTop: "5%", marginLeft: "5%" }}>{item.price}</Text>

                            <View style={{ flexDirection: "row" }}>
                                {item.quantity == 0 ? (<TouchableOpacity
                                    style={{
                                        width: responsiveWidth(30),
                                        height: responsiveHeight(4),
                                        backgroundColor: "green",
                                        marginTop: "2%",
                                        marginLeft: "2%",
                                        alignItems: "center",
                                        borderRadius: 5
                                    }}
                                    onPress={() =>{addItem(item)}}
                                    >
                                    <Text>Add To Cart</Text>
                                </TouchableOpacity>) : null
                                }
                                {item.quantity == 0 ? null : (<TouchableOpacity
                                    style={{
                                        width: responsiveWidth(5),
                                        height: responsiveHeight(4),
                                        backgroundColor: "green",
                                        marginTop: "2%",
                                        marginLeft: "2%",
                                        alignItems: "center",
                                        borderRadius: 5
                                    }}>
                                    <Text>+</Text>
                                </TouchableOpacity>)}

                                <Text style={{ color: "black", alignSelf: "center", marginLeft: "2%" }}>{'0'}</Text>
                                {item.quantity == 0 ? null : (<TouchableOpacity
                                    style={{
                                        width: responsiveWidth(5),
                                        height: responsiveHeight(4),
                                        backgroundColor: "green",
                                        marginTop: "2%",
                                        marginLeft: "2%",
                                        alignItems: "center",
                                        borderRadius: 5
                                    }}>
                                    <Text>-</Text>
                                </TouchableOpacity>)}
                                <TouchableOpacity
                                    style={{
                                        width: responsiveWidth(5),
                                        height: responsiveHeight(4),
                                        backgroundColor: "green",
                                        marginTop: "2%",
                                        marginLeft: "2%",
                                        alignItems: "center",
                                        borderRadius: 5
                                    }}>
                                    <Text>-</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                )}
            />
        </View>
    );
};

export default Store;