import React from "react"
import { View, StyleSheet, Text, Button, Image, ScrollView } from "react-native"
import { globalStyles } from "../../styles/GlobalStyles"
import { useRoute } from "@react-navigation/native"

const Photo = (props) => {
    const route = useRoute()
	props.navigation.setOptions(
		{
			title: route.params.title,
			headerStyle: {
				backgroundColor: "#546de5",
			},
		},
		[props.navigation]
	)
	return (
        
		<View style={[globalStyles.container, { padding: 0 }]}>
            <ScrollView>
				<Image
					source={{ uri: route.params.url }}
					style={{ width: "100%", height: 300 }}
				/>
                <View>
                <Text style={globalStyles.title}> {route.params.title}</Text>
				<Text style={[globalStyles.text,{ padding: 20}]}>{route.params.photoDesc}</Text>
                </View>
                
                </ScrollView>
		</View>
        
	)
}

export default Photo
