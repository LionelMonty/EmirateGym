import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import SocialMedia from '../screens/SocialMedia';
import Profile from '../screens/Profile';
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from './AppNavigator';
import LogNavigator from './LogNavigator';
import {  useContext } from 'react';
import MembershipNavigation from './MembershipNavigation';
import CamNavigator from './CamNavigator';
import AdminBottomNavigator from './AdminBottomNavigator';

import { createStackNavigator } from "@react-navigation/stack";
import { AuthContext } from '../context/AuthContext';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Home = () => {
    return(
        <Tab.Navigator 
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'Emirate Gym') {
                        iconName = 'home';
                    } else if (route.name === 'Feed') {
                        iconName = 'md-newspaper';
                    } else if (route.name === 'Photo') {
                        iconName = 'add-circle-outline';
                    } else if (route.name === 'MembershipNavigation') {
                        iconName = 'md-people';
                    } else if (route.name === 'Profile') {
                        iconName = 'person-circle';
                    }


                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#FF0000',
                tabBarInactiveTintColor: 'gray',
                headerStyle: { backgroundColor: '#ff0000', }, 
                headerTintColor: 'white',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontSize: 20,
                    fontFamily: 'Merriweather_700Bold'
                  },
            })}>
            <Tab.Screen name="Emirate Gym" component={AppNavigator} options={{ headerShown: false }} />
            <Tab.Screen name = "Feed" component = {SocialMedia} options={{ headerShown: false }}/>
            <Tab.Screen name = "Photo" component = {CamNavigator} options={{ headerShown: false }}/>
            <Tab.Screen name = "MembershipNavigation" component = {MembershipNavigation} options={{ headerShown: false }}/>
            <Tab.Screen name = "Profile" component = {Profile} />
        </Tab.Navigator>
    );
};

const BottomNavigation = () => {
    const {userAccount} = useContext(AuthContext);
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {userAccount ? (
                    <Stack.Screen name = 'Main' component= {Home} />
                    
                ) : (
                    <Stack.Screen name = 'Auth' component= {LogNavigator} />
                )}
                <Stack.Screen name = 'Admin' component= {AdminBottomNavigator} />
          </Stack.Navigator>           
        </NavigationContainer>
    );
}

export default BottomNavigation;

const styles = StyleSheet.create({
    headerTitle: {
      fontFamily: 'Merriweather_700Bold',
      fontSize: 26,
    },
    headerRightIcon: {
        marginRight: 10,  
    },
    headerLeftIcon: {
        marginLeft: 20,
    }
  });

