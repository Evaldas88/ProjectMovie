import React from 'react';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Movies from './screens/Movies.js';
import MovieInfo from './components/MovieInfo';
import VideoPlayer from './components/VideoPlayer';
import LoginScreen from './screens/LoginScreen';
 


const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <TailwindProvider>
         <NavigationContainer>
          <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Movies" component={Movies} />
            <Stack.Screen name="MovieInfo" component={MovieInfo} />
            <Stack.Screen name="VideoPlayer" component={VideoPlayer} />
          </Stack.Navigator>
        </NavigationContainer>
     </TailwindProvider>
  );
}
