import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';
import { createStackNavigator } from "@react-navigation/stack";
import LogNavigator from './LogNavigator';
import AdminSetting from "../screens/AdminSetting";
import AdminHome from "../screens/AdminHome";
import AdminNotification from "../screens/AdminNotification";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AdminHomeMethod = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen
            name="Admin Main"
            component={AdminHome}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                  <Ionicons name="md-home" size={size} color={color} />
              ),
              tabBarLabelStyle: {
                color: "#FF0000",
              },
              tabBarActiveTintColor: '#FF0000',
              tabBarInactiveTintColor: 'gray',
            }}
        />
        <Tab.Screen
            name="Admin Notification"
            component={AdminNotification}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                  <Ionicons name="notifications-outline" size={size} color={color} />
                  ),
              tabBarLabelStyle: {
                color: "#FF0000",
              },
              tabBarActiveTintColor: '#FF0000',
              tabBarInactiveTintColor: 'gray',
            }}
        />
    </Tab.Navigator>
  )
};

const AdminBottomNavigator = () => {
  return(
        <Stack.Navigator>
            <Stack.Screen name = 'Admin Home' component= {AdminHomeMethod} options={{ headerShown: false }}/>
            <Stack.Screen name = 'Admin Setting' component= {AdminSetting} />
            <Stack.Screen name = 'Admin Login' component= {LogNavigator} options={{ headerShown: false }}/>
        </Stack.Navigator>           
);
};

export default AdminBottomNavigator;
