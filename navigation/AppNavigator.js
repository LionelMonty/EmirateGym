import { createStackNavigator } from "@react-navigation/stack";
import NotificationPage from "../screens/NotificationPage";
import Setting from "../screens/Setting";
import GroupActivity from "../screens/GroupActivity";
import HomePage from "../screens/HomePage";

const Stack = createStackNavigator();

const AppNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name = 'Home' component= {HomePage} options={{ headerShown: false}}/>
            <Stack.Screen name = 'Notification' component= {NotificationPage} options={{ headerStyle: { backgroundColor: '#ff0000', }, headerTintColor: 'white', }}/>
            <Stack.Screen name = 'Settings' component= {Setting} options={{ headerStyle: { backgroundColor: '#ff0000', }, headerTintColor: 'white', }}/>
            <Stack.Screen name = 'Group Activities' component= {GroupActivity} options={{ headerStyle: { backgroundColor: '#ff0000', }, headerTintColor: 'white', }}/>
        </Stack.Navigator>
    );
}
export default AppNavigator;