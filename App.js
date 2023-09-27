import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Fonts
// import { useFonts, IBMPlexMono_500Medium, IBMPlexMono_700Bold } from '@expo-google-fonts/dev';
import * as SplashScreen from 'expo-splash-screen'
import { useFonts } from 'expo-font';
SplashScreen.preventAutoHideAsync()
// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator()
// Components
import Home from './src/screens/Home';
import Portfolio from './src/screens/Portfolio';
import Photo from './src/screens/Photo';

export default function App() {
  // Chargement Font
  let [fontsLoaded] = useFonts({
    // IBMPlexMono_500Medium, IBMPlexMono_700Bold
    "IBMPlexMono-Bold": require('./src/assets/fonts/IBMPlexMono-Bold.ttf'),
    "IBMPlexMono-Regular": require('./src/assets/fonts/IBMPlexMono-Regular.ttf')
  })
  
  if (!fontsLoaded) {
    return null;
  }else{
    SplashScreen.hideAsync()
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Portfolio" component={Portfolio} />
        <Stack.Screen name="Photo" component={Photo} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


