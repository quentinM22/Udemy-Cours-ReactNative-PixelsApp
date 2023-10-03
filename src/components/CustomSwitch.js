import React from 'react';
import {View, StyleSheet, Switch, Text} from 'react-native';
import Color from '../../styles/Color';

const CustomSwitch = (props) => {
    return (
        <View style={styles.settingContainer}>
            <Text style={styles.label}>{props.label}</Text>
            <Switch
            trackColor={{false: "lightgray", true: 'coral'}}
            thumbColor={props.state ? Color.white : 'coral'}
                value={props.state}
                onValueChange={props.handleSwitch}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    settingContainer:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        paddingHorizontal: 25,
    },
    label:{
        fontSize: 18
    }
})

export default CustomSwitch;
