import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import AdminSetting from "../screens/AdminSetting";
import AdminHome from "../screens/AdminHome";

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
                  <Ionicons name="md-home" size={size} color={"#FF0000"} />
              ),
              tabBarLabelStyle: {
                color: "#FF0000",
              },
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
            <Stack.Screen name = 'Admin Login' component= {LoginScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>           
);
};

export default AdminBottomNavigator;
