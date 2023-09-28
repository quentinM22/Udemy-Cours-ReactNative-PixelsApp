import React, { useState } from 'react';
import { FlatList, Image, View, Text, Pressable } from 'react-native';


import { globalStyles } from '../../styles/GlobalStyles';

import DATA from '../data/data.json'

import Color from '../../styles/Color';
import PressableCard from '../components/PressableCard';


const Home = (props) => {
const data = DATA

const renderItem = (data) => {
    const item = data.item
      return(
        <PressableCard item={item} />
      )
}
    return (
        <View style={globalStyles.container}>
            <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            />

        </View>
    );
}


export default Home;
