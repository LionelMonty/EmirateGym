import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import React, {useState} from 'react';
import {auth} from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
const LoginScreen = props => {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const loginUser = () => {
    signInWithEmailAndPassword (auth, email, password)
    .then(() => {
      console.log('user logged In');
      props.navigation.navigate('Main');
    })
    .catch(error => {
      if (error.code === 'auth/user-not-found'){
        Alert.alert('Error','User not found with the provided credential');
      }
      else if (error.code === 'auth/invalid-email' ||error.code === 'auth/wrong-password'){
        Alert.alert('Error','Invalid email or password');
      }
      else{
        Alert.alert('Error','An error occurred');
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Emirate Gym</Text>
      <View style={styles.inputView}>
        <TextInput style={styles.inputText} placeholder="Email" value={email} onChangeText={email => setEmail(email)} placeholderTextColor="#003f5c" autoCapitalize='none' />
      </View>
      <View style={styles.inputView}>
        <TextInput style={styles.inputText} placeholder="Password" value={password} onChangeText={password => setPassword(password)} placeholderTextColor="#003f5c" secureTextEntry={true} />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={ loginUser}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { props.navigation.navigate('SignUp'); }}>
        <Text style={styles.signupText}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fb5b5a',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: '#003f5c',
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: '#fff',
  },
  signupText: {
    color: '#003f5c',
  },
});