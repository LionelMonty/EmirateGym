import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet, Alert } from 'react-native';
import React, {useState, useContext} from 'react';
import { AuthContext } from '../context/AuthContext';
import {emailRegex, passwordRegex, nameRegex} from '../regex/RegularExpression';
import { AddUser } from '../database/Adding';
import { currentUserID } from '../database/Adding';
import { currentUserID2 } from './Receipt';
import { currentUserIDUpdate } from '../database/Update';

const SignupScreen = props => {

  const [user,setUser] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');

  const {signup} = useContext(AuthContext);

  const validateInput = () => {
    let isValid = true;

    if (!nameRegex.test(user)) {
      Alert.alert('Error','Invalid name');
      isValid = false;
    }
    
    else if (!emailRegex.test(email)) {
      Alert.alert('Error','Invalid email address');
      isValid = false;;
    }

    else if (!passwordRegex.test(password)) {
      Alert.alert('Error','Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one numeric digit');
      isValid = false;;
    }
    
    else if (password !== confirmPassword) {
      Alert.alert('Error','Passwords do not match');
      isValid = false;;
    } 

    return isValid;
  };

  const createUser = () => {
    signup (email, password)
    .then(signUser => {
      console.log('user created');
      const user_id = signUser.user.uid; //userID
      AddUser(user_id,user);
      currentUserID(user_id);
      currentUserID2(user_id);
      currentUserIDUpdate(user_id);
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
    if (validateInput()) {
      createUser();
      props.navigation.navigate('Login');
    }
  };

  return (
    <ImageBackground source={require('../images/l9.jpeg')} style={styles.background}>
      <View style={styles.overlay} />
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
    </ImageBackground>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  container: {
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
    color: '#fff',
  },
});

