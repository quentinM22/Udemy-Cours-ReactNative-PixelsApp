import React, { useCallback } from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import { globalStyles } from '../../styles/GlobalStyles';
import CustomSwitch from './CustomSwitch';
import { useState } from 'react';

const Settings = ({handleSettingModal}) => {
    const [isAnimal, setIsAnimal] = useState(true)
    const [isCars, setIsCars] = useState(true)
    const [isTravel, setIsTravel] = useState(true)
    const saveSettings = useCallback(()=>{
        const saveSettings = {
            animals: isAnimal,
            travel: isTravel,
            cars: isCars
        }
        console.log(saveSettings);
        handleSettingModal()
    }, [isAnimal,isCars,isTravel])
    
    return (
        <View style={{flex:1}}>
            <Text style={globalStyles.title}>Reglage</Text>
            <Text style={{...globalStyles.text, textAlign: 'center'}}>
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
                {
                     isAnimal === false && isTravel === false && isCars === false ? (
                        <Text style={{...globalStyles.text, color:'red', textAlign: 'center'}}>
                            Une catégorie minimum
                        </Text>
                     ):(
                        <Button 
                            title='Valider'
                            onPress={saveSettings}
                        />
                     )
                }
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
