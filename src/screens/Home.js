import React, { useLayoutEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FlatList, View, Modal, StyleSheet, Text } from 'react-native';


import { globalStyles } from '../../styles/GlobalStyles';

// import DATA from '../data/data.json'

import Color from '../../styles/Color';
import PressableCard from '../components/PressableCard';
import NoData from '../components/NoData';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import Settings from '../components/Settings';



const Home = (props) => {
    const [toggleModal , setToggleModal] = useState(false)
    const navigation = useNavigation()
    const {selectCategories} = useSelector((state) => state.data);
// const data = DATA
useLayoutEffect(()=>{
    navigation.setOptions({
        headerRight: () => (
            <View style={{paddingHorizontal: 10}}>
                <MaterialIcons 
                name="settings" 
                size={24} 
                color="white"
                onPress={ handleSettingModal}
                />
             </View>
        )
    })
})
const handleSettingModal = () => {
    setToggleModal(!toggleModal)
}
const renderItem = (data) => {
    const item = data.item
      return(
        <PressableCard item={item} />
      )
}
    return selectCategories.length > 0 ? (
        <View style={globalStyles.container}>
            <Modal
            visible={toggleModal}
            animationType='slide'
            >
                <View 
                style={styles.modalBody}
                >
                <View
                 style={styles.modalContent}
                >
                         <MaterialIcons 
                name="close" 
                size={32} 
                color="black"
                onPress={ handleSettingModal}
                style={styles.modalClose}
                />
                <Settings />
                </View>
                </View>
            </Modal>
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

const styles = StyleSheet.create({
    modalBody:{
       flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal: 25,
        paddingVertical: 50,
        backgroundColor: 'rgba(0,0,0,0.4)'
    },
    modalContent:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.white,
        padding: 25,
        borderRadius: 15
    },
    modalClose:{
        position: 'absolute',
        top:0,
        right:0,
        padding: 10
    }
})

export default Home;