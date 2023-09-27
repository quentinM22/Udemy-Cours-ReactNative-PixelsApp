import React from 'react';
import { Button } from 'react-native';
import {View, StyleSheet, Text} from 'react-native';

const Home = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home</Text>
            <Button onPress={() => props.navigation.navigate('Portfolio')} title='Portfolio'/>
            <Button onPress={() => props.navigation.navigate('Photo')} title='Photo'/>
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

export default Home;
