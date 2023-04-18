import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SignupScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Emirate Gym</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Full Name"
          placeholderTextColor="#003f5c"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#003f5c"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity style={styles.signupBtn}>
        <Text style={styles.signupText}>SIGNUP</Text>
      </TouchableOpacity>
      <TouchableOpacity>
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

