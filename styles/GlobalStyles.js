import {StyleSheet} from 'react-native';
import Color from './Color';

export const globalStyles = StyleSheet.create({
    container:{

        backgroundColor: "#70a1ff",
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        height: "100%"
    },
    cardProfile:{
        padding: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
        backgroundColor: Color.white,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
    },
    title:{
        fontFamily: "IBMPlexMono-Bold",
        fontSize: 25,
        padding: 10
    },
    profileImg:{
        width: 350,
        height: 350,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15
    },
    infoContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    }
})