import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts, Fruktur_400Regular } from "@expo-google-fonts/fruktur";
import { Cinzel_600SemiBold } from "@expo-google-fonts/cinzel";
import { Roboto_500Medium } from "@expo-google-fonts/roboto";
import { Merriweather_400Regular, Merriweather_700Bold } from "@expo-google-fonts/merriweather";
import BottomNavigation from './navigation/BottomNavigation';
import { AuthContextProvider } from './context/AuthContext';
import { Kanit_400Regular, Kanit_100Thin } from "@expo-google-fonts/kanit";

export default function App() {

  let [fontsLoaded] = useFonts({
    Fruktur_400Regular,
    Cinzel_600SemiBold,
    Roboto_500Medium,
    Merriweather_400Regular,
    Merriweather_700Bold,
    Kanit_400Regular,
    Kanit_100Thin,
  });

  if(!fontsLoaded) return null;

  return (
    
    <SafeAreaView style={styles.container}>
      <AuthContextProvider>
        <BottomNavigation/>
      </AuthContextProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
