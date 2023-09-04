import { View, Text, Image, Button, PermissionsAndroid, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { responsiveScreenWidth, responsiveScreenHeight, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';
import styles from './style';
import { FlatList } from 'react-native';


const TestScreen = () => {

    const [images, setImages] = useState([]);



    const openGallery = async () => {
        // if (images.length < 6) {

            console.log('image lenght', images.length)
            ImagePicker.openPicker({
                multiple: true,
            }).then(newimage => {
                // console.log("updated array", newimage)
                setImages(newimage)
                // const multipleImages = [...images, newimage]
                newimage.forEach(element => {
                // console.log('selected images',element)
                // const multipleImages = [...images, element]
                // console.log(' images',multipleImages)
             
                
                    // setImages(...images,element)
                });
                // setImages(multipleImages)
                // setPhoto(image.path)
            })

        // } else {
        //     alert('Limit Exceeded", "You can only add up to 6 images')
        // }
    }

    // const checkArray = () =>{
    //     console
    // }

    // const openCamera = async () =>{
    //     const cameraImage = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);

    //     if(cameraImage === PermissionsAndroid.RESULTS.GRANTED)
    //     {
    //         const result = await launchCamera({mediaType:'photo'})
    //         setPhoto(result.assets[0].uri)
    //     }
    // }
    // const deleteImage = (index) => {
    //     const updatedImages = [...images];
    //     updatedImages.splice(index, 1);
    //     setImages(updatedImages);
    // };



    return (
        <View style={styles.mainview} >

            <ScrollView horizontal={true} style={styles.scrollview}>
                <View style={styles.imagesmainview}>
                    {images.length  !== 0 ?
                        (
                            images.map((image, index) =>{
                                console.log(image)
                                return(
                                <View style={styles.imagesview}>
                                    <Image key={index} source={{ uri: image.path }} style={styles.image} />
                                    <TouchableOpacity style={styles.touchableopacity} onPress={() => deleteImage(index)}>
                                        <Text style={styles.touchabletext}>Delete Image</Text>
                                    </TouchableOpacity>
                                </View>
                                )
                                }
                            )

                        ) : (
                            <View>
                                <Text style={styles.text}>Add Image</Text>
                            </View>
                        )

                    }


                </View>

            </ScrollView>
            <View style={styles.buttonview}>
                <Button title='open Gallery' onPress={openGallery} />
            </View>
            {/* <View style={styles.buttonview}>
                <Button title='Take Image' onPress={()=>console.log('cjksabkjb',images)} />
            </View> */}
        </View>
    );
};

export default TestScreen;