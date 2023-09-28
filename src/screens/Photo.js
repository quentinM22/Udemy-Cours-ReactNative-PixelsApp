import React from 'react';
import {View, StyleSheet, Text, Button, Image} from 'react-native';
import { globalStyles } from '../../styles/GlobalStyles';

const Photo = (props) => {
    props.navigation.setOptions({
        title: `Photo`,
        headerStyle: {
            backgroundColor: '#546de5',
        }
}, [props.navigation])
    return (
        <View style={globalStyles.container}>
        <Text style={globalStyles.title}> {props.route.params.title}</Text>
        <Image source={{uri: props.route.params.url}}
        style={{width: 400, height: 400}}
        />
        <View>
            <Text style={globalStyles.text}>{props.route.params.photoDesc}</Text>
        </View>
    </View>
    );
}


export default Photo;
