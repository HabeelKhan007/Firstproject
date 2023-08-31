import { View, Text, Image, Button, PermissionsAndroid, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { responsiveScreenWidth,responsiveScreenHeight } from 'react-native-responsive-dimensions';
import { launchImageLibrary,launchCamera} from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';
import styles from './style';
import { FlatList } from 'react-native';


const TestScreen = () => {

    const [images, setImages] = useState([]);
    

    const openGallery = async () => {
        ImagePicker.openPicker({
            cropping:true,
            multiple:true
        }).then(newimage => {
            const multipleImages = [...images,newimage]
            setImages(multipleImages)
            console.log("updated array",multipleImages)
            // setPhoto(image.path)
        })
    }

    // const openCamera = async () =>{
    //     const cameraImage = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);

    //     if(cameraImage === PermissionsAndroid.RESULTS.GRANTED)
    //     {
    //         const result = await launchCamera({mediaType:'photo'})
    //         setPhoto(result.assets[0].uri)
    //     }
    // }

    

    return (
        <View style={styles.mainview} >
            <View style={{height:"60%",padding:"10%",width:"90%",borderWidth:1,backgroundColor:"red"}}>   
            {images.map((image, index)=>{
                console.log("images", images);
                return(
                <Image key={index} source={{ uri: image[0].path }} style={styles.image} />
                )
               })
               }
            </View>
            <View style={styles.buttonview}>
                <Button title='open Gallery' onPress={openGallery} />
            </View>
            {/* <View style={styles.buttonview}>
                <Button title='Take Image' onPress={openCamera} />
            </View> */}
        </View>
    );
};

export default TestScreen;