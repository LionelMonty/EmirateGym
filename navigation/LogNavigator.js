import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";


const Stack = createStackNavigator();

const LogNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name = 'Login' component= {LoginScreen} options={{ headerShown: false}}/>
            <Stack.Screen name = 'SignUp' component= {SignupScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
    );
}
export default LogNavigator;