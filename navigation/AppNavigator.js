import { createStackNavigator } from "@react-navigation/stack";
import NotificationPage from "../screens/NotificationPage";
import Setting from "../screens/Setting";
import GroupActivity from "../screens/GroupActivity";
import HomePage from "../screens/HomePage";
import TimeSlotScreen from "../screens/TimeSlotScreen";
import Reservation from "../screens/Reservation";
import SwimmingReservation from "../screens/SwimmingReservation";
import SpinningReservation from "../screens/SpinningReservation";
import WaterAerobicsReservation from "../screens/WaterAerobicsReservation";
import ZumbaReservation from "../screens/ZumbaReservation";
import AbdsReservation from "../screens/AbdsReservation";
import DayPayment from "../screens/DayPayment";
import Receipt from "../screens/Receipt";

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
            <Stack.Screen name = 'Swimming Reservation' component= {SwimmingReservation} />
            <Stack.Screen name = 'Spinning Reservation' component= {SpinningReservation} />
            <Stack.Screen name = 'Aerobics Reservation' component= {WaterAerobicsReservation} />
            <Stack.Screen name = 'Zumba Reservation' component= {ZumbaReservation} />
            <Stack.Screen name = 'Thighs abd glutes Reservation' component= {AbdsReservation} />
            <Stack.Screen name = 'Single Pay' component= {DayPayment} />
            <Stack.Screen name = 'Invoice' component= {Receipt} />
        </Stack.Navigator>
    );
}
export default AppNavigator;