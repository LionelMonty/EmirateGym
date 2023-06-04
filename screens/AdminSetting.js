import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigation } from "@react-navigation/native";

const AdminSetting = () => {

  const navigation = useNavigation();
  const { logout } = useContext(AuthContext);

  const logoutUser = () => {
    logout()
      .then(() => console.log("user logout"))
      .catch((error) => console.log(error));
    navigation.navigate("Admin Login");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.componentContainer} onPress={logoutUser}>
        <Ionicons
          name="log-out-outline"
          size={24}
          color="black"
          style={styles.componentIcon}
        />
        <Text style={styles.componentText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AdminSetting;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    componentContainer: {
        marginVertical: 10,
        flexDirection: "row",
        width: "80%",
        height: 50,
        backgroundColor: "#b30000",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "space-between",
    },
    componentText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
        textAlign: "center",
        flex: 1,
        marginRight: 40,
        color: "white",
    },
    componentIcon: {
        marginLeft: 20,
        color: "white",
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
      },
      input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
      },
      button: {
        backgroundColor: '#007AFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
});
