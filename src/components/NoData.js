import { View, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '../../styles/GlobalStyles'

const NoData = ({children}) => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Text style={globalStyles.title}>{children}</Text>
    </View>
  )
}

export default NoData