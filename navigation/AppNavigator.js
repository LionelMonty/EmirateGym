import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import HomePage from '../screens/HomePage';
import SocialMedia from '../screens/SocialMedia';
import Camera from '../screens/Camera';
import Membership from '../screens/Membership';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
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
                <Tab.Screen name = "Emirate Gym" component = {HomePage} options= {{headerTintColor: '#FF0000', headerTitleStyle: styles.headerTitle}} />
                <Tab.Screen name = "Feed" component = {SocialMedia} options= {{headerTintColor: '#FF0000', headerTitleStyle: styles.headerTitle}} />
                <Tab.Screen name = "Camera" component = {Camera} options= {{headerTintColor: '#FF0000', headerTitleStyle: styles.headerTitle}} />
                <Tab.Screen name = "Membership" component = {Membership} options= {{headerTintColor: '#FF0000', headerTitleStyle: styles.headerTitle}} />
                <Tab.Screen name = "Profile" component = {Profile} options= {{headerTintColor: '#FF0000', headerTitleStyle: styles.headerTitle}} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    headerTitle: {
      fontFamily: 'Cinzel_600SemiBold',
      fontSize: 26,
    },
  });

export default AppNavigator;