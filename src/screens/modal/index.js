import { View, Text, Button, Modal, FlatList } from 'react-native';
import React from 'react';
import Styles from './style';
import { useState } from 'react';

const ModalItems = [
    {
        name:"Habeel",
        number:"03102852938",
    },
    {
        name: "Momin",
        number: "03102853275",
    },
    {
        name: "Inam",
        number: "03102859387",
    },
];


const ModalApp = () => {

    const[showModal, setShowModal] = useState(false);
    return (
        <View style={Styles.mainview}>
        <Modal
        transparent={true}
        visible={showModal}
        animationType='slide'
        >
            <View style={Styles.modalmainview}>
                <View style={Styles.flatlistmainview}>
                    <FlatList
                        data={ModalItems}
                        renderItem={({item}) => (
                            <View style={Styles.dataview}>
                                <Text style={Styles.text}>{"Name:" + item.name}</Text>
                                <Text style={Styles.text}>{"Number:" +item.number}</Text>
                            </View>
                        )}
                    />
                        <Button title='Close Modal' onPress={() => setShowModal(false)}/>
                </View>
            </View>
        </Modal>
            <View style={Styles.buttonview}>
                <Button title='Open Modal' onPress={() => setShowModal(true)} />
            </View>
        </View>
    );
};

export default ModalApp;