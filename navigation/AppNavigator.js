import { createStackNavigator } from "@react-navigation/stack";
import NotificationPage from "../screens/NotificationPage";
import Setting from "../screens/Setting";
import GroupActivity from "../screens/GroupActivity";
import HomePage from "../screens/HomePage";
import TimeSlotScreen from "../screens/TimeSlotScreen";
import Reservation from "../screens/Reservation";

const Stack = createStackNavigator();

const AppNavigator = () => {
    return(
        <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#ff0000', }, headerTintColor: 'white', }}>
            <Stack.Screen name = 'Home' component= {HomePage} options={{ headerShown: false}}/>
            <Stack.Screen name = 'Notification' component= {NotificationPage} />
            <Stack.Screen name = 'Settings' component= {Setting} />
            <Stack.Screen name = 'Group Activities' component= {GroupActivity} />
            <Stack.Screen name = 'Time Slot' component= {TimeSlotScreen} />
            <Stack.Screen name = 'Reservation' component= {Reservation} />
        </Stack.Navigator>
    );
}
export default AppNavigator;