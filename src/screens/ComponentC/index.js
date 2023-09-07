import { View, Text,Button,TextInput } from 'react-native';
import React,{useContext} from 'react';
import { nameContext } from '../ContextApi/inex';

const ComponentC = () => {
    const {name,setName} = useContext(nameContext);

    
  return (
    <View>
      <Text style={{color:"black",marginTop:"15%",alignSelf:"center"}}>ComponentC</Text>
      <View style={{marginTop:'10%',width:'70%',alignSelf:"center"}}>
      <Button title='Print Data' onPress={()=> setName('Habeel')} />
      </View>
    </View>
  );
};

export default ComponentC;