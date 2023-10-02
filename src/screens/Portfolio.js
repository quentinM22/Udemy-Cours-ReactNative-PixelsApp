import React, { useCallback, useLayoutEffect } from "react"
import {
	View,
	StyleSheet,
	Text,
	Image,
	ScrollView,
	Pressable,
	Alert,
} from "react-native"
import { globalStyles } from "../../styles/GlobalStyles"
import MaterialIconsHeader from "../components/MaterialIconsHeader"
import Color from "../../styles/Color"
import { useNavigation } from "@react-navigation/native"
import { useDispatch, useSelector } from "react-redux"
import { addSelectUser } from "../RTK/Slice/dataSlice"
// import Logo from '../components/Logo';
// import { useRoute } from '@react-navigation/native';
const Portfolio = (props) => {
	const data = props.route.params
	const userId = data.id

	const dispatch = useDispatch()
	const navigation = useNavigation()

	const userSelect = useSelector((state) =>
		state.data.selectUsers.some((
      user) => user.id === userId)
	)

	const handleDispatch = useCallback(() => {
		dispatch(addSelectUser(userId))
		if (userSelect) {
			Alert.alert(
				"Photos Effacés",
				`Les photos de ${data.name} sont effacées des favoris`,
				[{ text: "OK" }]
			)
		} else {
			Alert.alert(
				"Photos Enregistré",
				"Elles sont disponibles dans les favoris",
				[{ text: "OK" }]
			)
		}
	}, [userId, dispatch, userSelect])

	useLayoutEffect(() => {
		props.navigation.setOptions({
			headerStyle: { backgroundColor: data.favColor },
			headerRight: () => (
				<MaterialIconsHeader
					iconName="thumbs-up"
					iconColor={userSelect ? "red" :"white"}
					onPressIcon={handleDispatch}
				/>
			),
		})
	}, [props.navigation, userSelect])

	return (
		<View style={[globalStyles.container, { backgroundColor: data.favColor }]}>
			<ScrollView>
				<View style={{ alignItems: "center", marginTop: 30 }}>
					<View
						style={{
							padding: 5,
							backgroundColor: Color.white,
							borderRadius: 50,
						}}
					>
						<Image
							source={{ uri: data.img }}
							style={{ width: 150, height: 150, borderRadius: 50 }}
						/>
					</View>

					<Text style={[globalStyles.title, { textAlign: "center" }]}>
						{data.name}
					</Text>
				</View>
				<View style={{ padding: 20, backgroundColor: Color.white }}>
					<Text style={globalStyles.title}>Bio</Text>
					<Text style={globalStyles.text}>{data.desc}</Text>
					<Text style={globalStyles.text}>Pays: {data.country}</Text>
				</View>
				<View style={{ backgroundColor: data.favColor, padding: 20 }}>
					{data.photos.map((pic, index) => (
						<Pressable
							key={index}
							style={({ pressed }) => [
								{
									backgroundColor: pressed ? "lightgray" : "white",
									padding: 5,
									marginVertical: 15,
									borderBottomLeftRadius: 15,
									borderTopRightRadius: 15,
								},
							]}
							onPress={() => navigation.navigate("Photo", pic)}
						>
							<Image
								source={{ uri: pic.url }}
								style={{
									width: "100%",
									height: 200,
									borderBottomLeftRadius: 15,
									borderTopRightRadius: 15,
								}}
							/>
							<Text style={[globalStyles.text, { textAlign: "center" }]}>
								{pic.title}
							</Text>
						</Pressable>
					))}
				</View>
			</ScrollView>
		</View>
	)
}

export default Portfolio
