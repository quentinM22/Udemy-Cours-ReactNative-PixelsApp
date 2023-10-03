import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { globalStyles } from '../../styles/GlobalStyles';
import CustomSwitch from './CustomSwitch';
import { useState } from 'react';

const Settings = () => {
    const [isAnimal, setIsAnimal] = useState(true)
    const [isCars, setIsCars] = useState(true)
    const [isTravel, setIsTravel] = useState(true)
    const saveSettings=()=>{
        const saveSettings = {
            animals: isAnimal,
            travel: isTravel,
            cars: isCars
        }
        console.log(saveSettings);
    }
    return (
        <View style={{flex:1}}>
            <Text style={globalStyles.title}>Reglage</Text>
            <Text style={globalStyles.text}>
                Utiliser les paramètre pour gérer les catégories à afficher.
            </Text>
            <View style={styles.separator}></View>
            <CustomSwitch 
                label="Animaux"
                state={isAnimal}
                handleSwitch={(newVal)=> setIsAnimal(newVal)}
            />
            <CustomSwitch 
                label="Voyage"
                state={isTravel}
                handleSwitch={(newVal)=> setIsTravel(newVal)}
                />
            <CustomSwitch 
                label="Voiture"
                state={isCars}
                handleSwitch={(newVal)=> setIsCars(newVal)}
                />
        </View>
    );
}

const styles = StyleSheet.create({
    separator:{
       borderWidth: 0.5,
       marginVertical: 20,
       borderColor: "lightgrey" 
    }
})

export default Settings;
