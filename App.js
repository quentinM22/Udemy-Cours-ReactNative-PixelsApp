import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

// Fonts
// import { useFonts, IBMPlexMono_500Medium, IBMPlexMono_700Bold } from '@expo-google-fonts/dev';
import * as SplashScreen from 'expo-splash-screen'
import { useFonts } from 'expo-font';

// Navigation
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Components
import Home from './src/screens/Home';
import Portfolio from './src/screens/Portfolio';
import Photo from './src/screens/Photo';
import FAQ from './src/screens/FAQ';

import Color from './styles/Color';
import { FontAwesome5 } from '@expo/vector-icons';
import Selected from './src/screens/Selected';

SplashScreen.preventAutoHideAsync()
const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();



function MyDrawer() {
  return (
    <Drawer.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#546de5',
      },
      headerTintColor: Color.white,
      drawerActiveTintColor: 'coral',
      drawerInactiveTintColor: Color.white,
      drawerStyle:{
        backgroundColor: '#546de5',
        width: '45%'
      }
    }}>
      <Drawer.Screen name="Accueil" component={Home} options={{
        drawerIcon: ({color}) => <FontAwesome5 name="home" size={22} color={color} />
      }} /> 
      <Drawer.Screen name="FAQ" component={FAQ}
      options={{
        drawerIcon: ({color}) => <FontAwesome5 name="question" size={22} color={color} />
      }}
      />
    </Drawer.Navigator>
  );
}
function MyStack() {
  return (  
  <Stack.Navigator 
      screenOptions={{
        headerStyle: {
          backgroundColor: '#546de5',
        },
        headerTintColor: Color.white,
        headerTitleAlign: 'center'
      }}
      >
        <Stack.Screen name="Drawer" component={MyDrawer} 
        options={{
          // title: 'Accueil',
          headerShown: false
        }}/>
        <Stack.Screen name="Portfolio" component={Portfolio} 
        options={({route})=>{
          return{
          title: `Portfolio de ${route.params.name.toUpperCase()}`,
          }
        }}/>
        <Stack.Screen name="Photo" component={Photo} 
        options={{
          title: 'Photo',
        }}/>
      </Stack.Navigator>)
}
function MyTabs() {
  return (
    <Tab.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#546de5',
      },
      headerTintColor: Color.white,
      tabBarActiveTintColor: 'coral',
      tabBarInactiveTintColor: 'black',
    }}>
      <Tab.Screen name="Accueil" component={MyStack} 
      options={{
        headerShown: false,
        tabBarIcon: ({color}) => <FontAwesome5 name="home" size={22} color={color} />
      }}
      />
      <Tab.Screen name="Likes" component={SelectedStack} 
     options={{
      title:"Favoris",
      tabBarIcon: ({color}) => <FontAwesome5 name="heart" size={22} color={color} />
    }}
      />
    </Tab.Navigator>
  );
}
function SelectedStack(){
  return (
    <Stack.Navigator>
      <Stack.Screen name={'Selected'} component={Selected}
      options={{
        title: "Favoris",
        headerShown: false
      }}/>
      <Stack.Screen name={'Photo'} component={Photo}
      options={{
        title: "Photo",
        headerShown: false
      }}/>
    </Stack.Navigator>
  )
}
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
      <MyTabs />
    </NavigationContainer>
  )
}


