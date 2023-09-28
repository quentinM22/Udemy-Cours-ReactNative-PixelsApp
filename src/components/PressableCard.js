import React from 'react';
import {View, StyleSheet, Image, Text, Pressable} from 'react-native';
import Color from '../../styles/Color';
import { globalStyles } from '../../styles/GlobalStyles';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

const PressableCard = ({item}) => {
    const navigation = useNavigation()
    return (
        <Pressable 
        style={({pressed}) => [
           { backgroundColor: pressed ? 'lightgray' : Color.white },
            globalStyles.cardProfile
         ]}
        onPress={() => navigation.navigate('Portfolio', item)}
        >
            <Text style={globalStyles.title}>{item.name}</Text>
            <Image source={{uri: item.img}} style={globalStyles.profileImg}/>
            <View style={globalStyles.infoContainer}>
                <Text>{item.country}</Text>
                <Text style={globalStyles.alignCenter}>{item.photos.length} <FontAwesome name="picture-o" size={18} color="black" /></Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({})

export default PressableCard;
