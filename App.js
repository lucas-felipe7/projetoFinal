import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Home';
import Shape from './src/screens/Shapes';
import Trucks from './src/screens/Trucks';
import Rodas from './src/screens/Rodas';
import Login from './src/screens/Login';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Home}>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Maze',}}/>
        <Stack.Screen name="Shape" component={Shape} />
        <Stack.Screen name="Trucks" component={Trucks} />
        <Stack.Screen name="Rodas" component={Rodas} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App; 