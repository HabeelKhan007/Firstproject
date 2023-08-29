import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserData = () => {

    const [data, setData] = useState();
    const [name, setName] = useState();
    const [id, setId] = useState();
    const [cnic, setCnic] = useState();

    const Array = [
        {
            id: '1',
            name: 'Habeel',
            cnic: "1720199797189",
        },
    ]

    const listData = async () => {
        setData(Array)
        setName(Array[0].name)
        setId(Array[0].id)
        setCnic(Array[0].cnic)

        console.log('data is ', Array[0].name)
    }


    return (
        <View style={{ alignItems: "center" }}>
            <View style={{ width: "100%" }}>
                <Button title='List' onPress={() => (listData())} />
            </View>
            {data ? (
                <View style={{ backgroundColor: "gainsboro", width: "70%", marginTop: "5%" }}>
                    <Text style={{ color: "black" }}>User Id: {id}</Text>
                    <Text style={{ color: "black" }}>User Name: {name}</Text>
                    <Text style={{ color: "black" }}>User Cnic: {cnic}</Text>
                </View>
            ) : (
                <View></View>
            )

            }
        </View>
    );
};

export default UserData;