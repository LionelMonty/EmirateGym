import { StyleSheet} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import AppNavigator from "./navigation/AppNavigator";
import { useFonts, Fruktur_400Regular } from "@expo-google-fonts/fruktur";
import { Cinzel_400Regular } from "@expo-google-fonts/cinzel";

export default function App() {

  let [fontsLoaded] = useFonts({
    Fruktur_400Regular,
    Cinzel_400Regular,
  });

  if(!fontsLoaded) return null;

  return (
    <SafeAreaView style={styles.container}>
      <AppNavigator/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
