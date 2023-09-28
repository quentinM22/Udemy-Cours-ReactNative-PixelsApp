import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';

const MaterialIconsHeader = ({onPressIcon, iconName, iconColor}) => {
    return (
        <Pressable 
        onPress={onPressIcon}
        style={({pressed})=>
        pressed && styles.iconPressed
        }>
            <FontAwesome5 name={iconName} size={20} color={iconColor} />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    iconPressed:{
        opacity : 0.2
    }
})

export default MaterialIconsHeader;
