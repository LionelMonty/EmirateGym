import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BottomNavigation from "./BottomNavigation";
import NotificationPage from "../screens/NotificationPage";

const Stack = createStackNavigator();

const AppNavigator1 = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name = 'HomeBar' component= {BottomNavigation} options = {{ headerShown: false }}/>
                <Stack.Screen name = 'Notification' component= {NotificationPage}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default AppNavigator1;