import { View, Text } from 'react-native';
import React, { createContext } from 'react';
import ComponentB from '../ComponentB';
import { useState } from 'react';
import styles from './style';
export const nameContext = createContext("");

const ComponentA = () => {
    const[name,setName]=useState("");
    return (
<View style={styles.mainview}>
        <nameContext.Provider value={{name,setName}}>
            
                <Text style={styles.text}>{name}</Text>
                <ComponentB />
            
        </nameContext.Provider>
        </View>
    );
};

export default ComponentA;