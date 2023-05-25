import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ImageBackground  } from 'react-native';
import React, {useState, useContext} from 'react';
import { AuthContext } from '../context/AuthContext';
import { currentUserID } from '../database/Adding';
import { currentUserID2 } from './Receipt';
import { currentUserIDUpdate } from '../database/Update';

const LoginScreen = props => {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const {login} = useContext(AuthContext);

  const loginUser = () => {
    login (email, password)
    .then(logUser => {
      console.log('user logged In');
      setEmail('');
      setPassword('');
      props.navigation.replace('Main');
      const actual_user_id = logUser.user.uid; //userID
      currentUserID(actual_user_id);
      currentUserID2(actual_user_id);
      currentUserIDUpdate(actual_user_id);
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
    <ImageBackground source={require('../images/l6.jpeg')} style={styles.background}>
      <View style={styles.overlay} />
      <View style={styles.container}>
        <Text style={styles.logo}>Emirate Gym</Text>
        <View style={styles.inputView}>
          <TextInput style={styles.inputText} placeholder="Email" value={email} onChangeText={email => setEmail(email)} placeholderTextColor="#003f5c" autoCapitalize='none' />
        </View>
        <View style={styles.inputView}>
          <TextInput style={styles.inputText} placeholder="Password" value={password} onChangeText={password => setPassword(password)} placeholderTextColor="#003f5c" secureTextEntry={true} />
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={ loginUser }>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { props.navigation.navigate('SignUp'); }}>
          <Text style={styles.signupText}>Don't have an account? Signup</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;

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
    color: '#fff',
  },
});