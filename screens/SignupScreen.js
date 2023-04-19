import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import React, {useState} from 'react';
import {auth} from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {emailRegex, passwordRegex, nameRegex} from '../regex/RegularExpression';

const SignupScreen = props => {

  const [user,setUser] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');

  const validateInput = () => {
    let isValid = true;

    if (!nameRegex.test(user)) {
      alert('Invalid name');
      isValid = false;
    }
    
    if (!emailRegex.test(email)) {
      alert('Invalid email address');
      isValid = false;;
    }

    if (!passwordRegex.test(password)) {
      alert('Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one numeric digit');
      isValid = false;;
    }
    
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      isValid = false;;
    } 

    return isValid;
  };

  const createUser = () => {
    console.log(email, password);
    createUserWithEmailAndPassword (auth, email, password)
    .then(() => {
      console.log('user created');
      props.navigation.navigate('Login');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use'){
        Alert.alert('Error','This email address is already in use');
      }
      else{
        Alert.alert('Error',error.message);
      }
    });
  };

  const signUpUser = () => {
    if (validateInput()) createUser();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Emirate Gym</Text>
      <View style={styles.inputView}>
        <TextInput style={styles.inputText} placeholder="Full Name" value={user} onChangeText={user => setUser(user)} placeholderTextColor="#003f5c" />
      </View>
      <View style={styles.inputView}>
        <TextInput style={styles.inputText} placeholder="Email" value={email} onChangeText={email => setEmail(email)} placeholderTextColor="#003f5c" />
      </View>
      <View style={styles.inputView}>
        <TextInput style={styles.inputText} placeholder="Password" value={password} onChangeText={password => setPassword(password)} placeholderTextColor="#003f5c" secureTextEntry={true} />
      </View>
      <View style={styles.inputView}>
        <TextInput style={styles.inputText} placeholder="Confirm Password" value={confirmPassword} onChangeText={confirmPassword => setConfirmPassword(confirmPassword)} placeholderTextColor="#003f5c" secureTextEntry={true} />
      </View>
      <TouchableOpacity style={styles.signupBtn}>
        <Text style={styles.signupText} onPress = {signUpUser}>SIGNUP</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { props.navigation.navigate('Login') }}>
        <Text style={styles.loginText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;

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
  signupBtn: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  signupText: {
    color: '#fff',
  },
  loginText: {
    color: '#003f5c',
  },
});

