import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BottomNavigation from "./BottomNavigation";
import NotificationPage from "../screens/NotificationPage";
import Setting from "../screens/Setting";
import GroupActivity from "../screens/GroupActivity";


const Stack = createStackNavigator();

const AppNavigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name = 'HomeBar' component= {BottomNavigation} options = {{ headerShown: false }}/>
                <Stack.Screen name = 'Notification' component= {NotificationPage} options={{ headerStyle: { backgroundColor: '#ff0000', }, headerTintColor: 'white', }}/>
                <Stack.Screen name = 'Settings' component= {Setting} options={{ headerStyle: { backgroundColor: '#ff0000', }, headerTintColor: 'white', }}/>
                <Stack.Screen name = 'Group Activities' component= {GroupActivity} options={{ headerStyle: { backgroundColor: '#ff0000', }, headerTintColor: 'white', }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default AppNavigator;