import { View, Text,Button,TextInput } from 'react-native';
import React,{useContext} from 'react';
import { nameContext } from '../ContextApi/inex';
import styles from './style';

const ComponentC = () => {
    const {name,setName} = useContext(nameContext);

    
  return (
    <View>
      <Text style={styles.text}>ComponentC</Text>
      <View style={styles.buttonview}>
      <Button title='Print Data' onPress={()=> setName('Habeel')} />
      </View>
    </View>
  );
};

export default ComponentC;