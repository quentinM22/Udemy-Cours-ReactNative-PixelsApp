import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const Photo = (props) => {
    return (
        <View style={styles.container}>
        <Text style={styles.text}>Photo</Text>
        <Button onPress={() => props.navigation.goBack()} title='Portfolio'/>
        <Button onPress={() => props.navigation.navigate('Home')} title='Home'/>
        
    </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#f8c291",
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        height: "100%"
    },
    text:{
        fontFamily: "IBMPlexMono-Bold",
        fontSize: 25
    }
})

export default Photo;
