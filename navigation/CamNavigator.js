import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import CameraPage from '../screens/CameraPage';
import PhotoPage from '../screens/PhotoPage';

const Stack = createStackNavigator();

const CamNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#ff0000', }, headerTintColor: 'white', headerTitleAlign: 'center', headerTitleStyle: { fontSize: 20, fontFamily: 'Merriweather_700Bold'},}}>
        <Stack.Screen name = 'Camera' component= {CameraPage} />
        <Stack.Screen name = 'Image' component= {PhotoPage} />
    </Stack.Navigator>
  )
}

export default CamNavigator;