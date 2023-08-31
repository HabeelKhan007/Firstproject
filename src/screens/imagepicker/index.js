import { View, Text, Image, Button, PermissionsAndroid } from 'react-native';
import React, { useState } from 'react';
import { launchImageLibrary,launchCamera} from 'react-native-image-picker';
import styles from './style';


const ImagePicker = () => {

    const [photo, setPhoto] = useState();
    

    const openGallery = async () => {
        const result = await launchImageLibrary({
            mediaType:'photo',
        });
        setPhoto(result.assets[0].uri)
    }

    const openCamera = async () =>{
        const cameraImage = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);

        if(cameraImage === PermissionsAndroid.RESULTS.GRANTED)
        {
            const result = await launchCamera({mediaType:'photo'})
            setPhoto(result.assets[0].uri)
        }
    }


    return (
        <View style={styles.mainview} >

            <View style={{height:"60%",width:"60%",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>

            <View style={{ borderWidth: 1, height: "40%", width: "60%" }}>
                {photo ? (
                    <View>
                        <Image style={styles.image} source={{ uri: photo }} />
                    </View>
                ) : (
                    <View>
                        <Image style={{ height: "100%", width: "100%",resizeMode:"center"}} source={require('../../assets/camera.png')} />
                    </View>
                )
                }

            </View>
            <View style={{ borderWidth: 1, height: "40%", width: "60%",marginLeft:"4%" }}>
                {photo ? (
                    <View>
                        <Image style={styles.image} source={{ uri: photo }} />
                    </View>
                ) : (
                    <View>
                        <Image style={{ height: "100%", width: "100%",resizeMode:"center"}} source={require('../../assets/camera.png')} />
                    </View>
                )
                }

            </View>
            </View>
            <View style={styles.buttonview}>
                <Button title='open Gallery' onPress={openGallery} />
            </View>
            <View style={styles.buttonview}>
                <Button title='Take Image' onPress={openCamera} />
            </View>
        </View>
    );
};

export default ImagePicker;