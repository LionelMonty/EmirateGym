import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import SocialMedia from '../screens/SocialMedia';
import Camera from '../screens/Camera';
import Membership from '../screens/Membership';
import Profile from '../screens/Profile';
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from './AppNavigator';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {

    return(
        <NavigationContainer>
            <Tab.Navigator 
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        let iconName;

                        if (route.name === 'Emirate Gym') {
                            iconName = 'home';
                        } else if (route.name === 'Feed') {
                            iconName = 'md-newspaper';
                        } else if (route.name === 'Camera') {
                            iconName = 'add-circle-outline';
                        } else if (route.name === 'Membership') {
                            iconName = 'md-people';
                        } else if (route.name === 'Profile') {
                            iconName = 'person-circle';
                        }


                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#FF0000',
                    tabBarInactiveTintColor: 'gray',
                })}>
                <Tab.Screen name="Emirate Gym" component={AppNavigator} options={{ headerShown: false }} />
                <Tab.Screen name = "Feed" component = {SocialMedia} />
                <Tab.Screen name = "Camera" component = {Camera} />
                <Tab.Screen name = "Membership" component = {Membership} />
                <Tab.Screen name = "Profile" component = {Profile} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

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

export default BottomNavigation;