import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FlatList, Image, View, Text, Pressable } from 'react-native';


import { globalStyles } from '../../styles/GlobalStyles';

// import DATA from '../data/data.json'

import Color from '../../styles/Color';
import PressableCard from '../components/PressableCard';
import NoData from '../components/NoData';



const Home = (props) => {
    const {selectCategories} = useSelector((state) => state.data);
// const data = DATA
const renderItem = (data) => {
    const item = data.item
      return(
        <PressableCard item={item} />
      )
}
    return selectCategories.length > 0 ? (
        <View style={globalStyles.container}>
            <FlatList
            data={selectCategories}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            />

        </View>
    ) : (
        <NoData>Pas d'utilisateur à afficher.</NoData>
    )
}


export default Home;
