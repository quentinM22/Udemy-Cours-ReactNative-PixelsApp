import React from "react"
import { View, StyleSheet, Text, Button, Image, ScrollView } from "react-native"
import { globalStyles } from "../../styles/GlobalStyles"

const Photo = (props) => {
	props.navigation.setOptions(
		{
			title: `Photo`,
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
					source={{ uri: props.route.params.url }}
					style={{ width: "100%", height: 300 }}
				/>
                <View>
                <Text style={globalStyles.title}> {props.route.params.title}</Text>
				<Text style={[globalStyles.text,{ padding: 20}]}>{props.route.params.photoDesc}</Text>
                </View>
                
                </ScrollView>
		</View>
        
	)
}

export default Photo
