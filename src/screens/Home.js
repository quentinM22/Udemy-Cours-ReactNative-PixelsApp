import React from 'react';
import { FlatList, Image, View, Text } from 'react-native';


import { globalStyles } from '../../styles/GlobalStyles';

import DATA from '../data/data.json'


const Home = (props) => {
const data = DATA

const renderProfiles = (data) => {
    const item = data.item
      return(
        <View style={globalStyles.cardProfile}>
            <Text style={globalStyles.title}>{item.name}</Text>
            <Image source={{uri: item.img}} style={globalStyles.profileImg}/>
            <View style={globalStyles.infoContainer}>
                <Text>{item.country}</Text>
                <Text>{item.totalImg}</Text>
            </View>
        </View>
      )
}

    return (
        <View style={globalStyles.container}>
            <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={renderProfiles}
            />

        </View>
    );
}


export default Home;
