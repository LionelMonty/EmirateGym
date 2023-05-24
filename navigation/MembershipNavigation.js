import { createStackNavigator } from "@react-navigation/stack";
import Membership from "../screens/Membership";
import Payment from "../screens/Payment";
import Receipt from "../screens/Receipt";

const Stack = createStackNavigator();

const MembershipNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#ff0000', }, headerTintColor: 'white', headerTitleAlign: 'center', headerTitleStyle: { fontSize: 20, fontFamily: 'Merriweather_700Bold'},}}>
        <Stack.Screen name = 'Membership' component= {Membership} />
        <Stack.Screen name = 'Payment' component= {Payment} />
        <Stack.Screen name = 'Receipt' component= {Receipt} />
    </Stack.Navigator>
  )
}

export default MembershipNavigation