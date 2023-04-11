import React from 'react';
 import { TailwindProvider } from 'tailwindcss-react-native';
 import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Movie from './screens/Movie';




const Stack = createNativeStackNavigator();
 


export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
          <Stack.Screen   name="Home" component={HomeScreen} />
          <Stack.Screen   name="Movie" component={Movie} />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}
