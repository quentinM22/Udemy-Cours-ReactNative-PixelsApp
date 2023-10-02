import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import NoData from '../components/NoData'
import { useNavigation } from '@react-navigation/native'
import { globalStyles } from '../../styles/GlobalStyles'

const Selected = () => {
  const {selectUsers} = useSelector(state => state.data)
  const navigation = useNavigation()
  const ListItem = ({item}) => {
    return (
      item.photos.map((pic,i) =>
      <Pressable 
        key={i}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'lightgray' : 'white',
            padding: 5,
            marginVertical: 15,
            borderBottomLeftRadius: 15,
            borderTopRightRadius: 15,
          },
        ]}
        onPress={() => navigation.navigate('Photo', pic)}
       >
        <Image source={{uri: pic.url}} style={{width: '100%', height: 200, borderBottomLeftRadius:15, borderTopRightRadius: 15}}/>
        <Text style={[globalStyles.text, {textAlign: 'center'}]}>{pic.title}</Text>
      </Pressable>
      )
    )
  }

  return selectUsers.length === 0 ? (
    <NoData>Aucune Image dans les favoris.</NoData>
  ):(
    <FlatList
 data={selectUsers}
 renderItem={({item})=>  <ListItem item={item} />}
 keyExtractor={item => item.id}
    />

  )
}

export default Selected
