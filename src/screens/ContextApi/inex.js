import { View, Text } from 'react-native';
import React, { createContext } from 'react';
import ComponentB from '../ComponentB';
import { useState } from 'react';
export const nameContext = createContext("");

const ComponentA = () => {
    const[name,setName]=useState("");
    return (
<View style={{ flex: 1, marginTop: "10%" }}>
        <nameContext.Provider value={{name,setName}}>
            
                <Text style={{ color: "black",alignSelf:"center"}}>{name}</Text>
                <ComponentB />
            
        </nameContext.Provider>
        </View>
    );
};

export default ComponentA;