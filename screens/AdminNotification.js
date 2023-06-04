import { View, TextInput, TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";
import React, { useState } from "react";
import AdminHeader from "../components/Header/AdminHeader";
import { checkUserExist } from "../database/Read";
import Toast from 'react-native-toast-message';

const { width } = Dimensions.get('window');
const responsiveWidth = width * 0.9;

const AdminNotification = () => {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
  
    const handleButtonPress = () => {
      // Perform some action with the title and text
      if(title!=="" && text !==""){
        checkUserExist(title, text);
        Toast.show({
          type: 'success',
          text1: 'Message Sent!',
          text2: 'Your message has been successfully sent.',
        });
      }
      setTitle(""); 
      setText("");
    };
  
    return (
      <View style={styles.mainContainer}>
        <AdminHeader />
        <View style={styles.container}>
        <Text style={styles.text}>Push Notification Manager</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter title"
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter text"
            value={text}
            onChangeText={setText}
            multiline={true}
          />
          <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}

export default AdminNotification;

const styles = StyleSheet.create({
    mainContainer:{
      flex: 1,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
      alignItems: 'center',
      color:"#ff0000",
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
      backgroundColor: '#FF0000',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      width:responsiveWidth,
      marginVertical: 20,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign:"center",
    },
  
  });