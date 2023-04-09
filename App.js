import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from "react-native-safe-area-context";
import AppNavigator1 from "./navigation/AppNavigator1";
import { useFonts, Fruktur_400Regular } from "@expo-google-fonts/fruktur";
import { Cinzel_600SemiBold } from "@expo-google-fonts/cinzel";
import { Roboto_500Medium } from "@expo-google-fonts/roboto";
import { Merriweather_400Regular, Merriweather_700Bold } from "@expo-google-fonts/merriweather";

export default function App() {

  let [fontsLoaded] = useFonts({
    Fruktur_400Regular,
    Cinzel_600SemiBold,
    Roboto_500Medium,
    Merriweather_400Regular,
    Merriweather_700Bold
  });

  if(!fontsLoaded) return null;

  return (
    <SafeAreaView style={styles.container}>

        <AppNavigator1/>

      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
