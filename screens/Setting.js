import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Setting = props => {
    
    const {logout} = useContext(AuthContext);

    const logoutUser = () => {
        logout()
        .then(() => console.log('user logout'))
        .catch(error => console.log(error));
    };

    return (

        <View style={styles.container}>

            <TouchableOpacity
                style={styles.componentContainer}
                onPress={logoutUser}>
                <Ionicons name="log-out-outline" size={24} color="black" style={styles.componentIcon} />
                <Text style={styles.componentText}>Logout</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.componentContainer}
                onPress={() => props.navigation.navigate('Feed')}>
                <Ionicons name="newspaper" size={24} color="black" style={styles.componentIcon} />
                <Text style={styles.componentText}>Feed</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.componentContainer}
                onPress={() => props.navigation.navigate('Camera')}>
                <Ionicons name="camera" size={24} color="black" style={styles.componentIcon} />
                <Text style={styles.componentText}>Camera</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.componentContainer}
                onPress={() => props.navigation.navigate('Membership')}>
                <Ionicons name="person-circle" size={24} color="black" style={styles.componentIcon} />
                <Text style={styles.componentText}>Membership</Text>
            </TouchableOpacity>

        </View>
    );
}

export default Setting;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    componentContainer: {
        marginVertical: 10,
        flexDirection: 'row',
        width: '80%',
        height: 50,
        backgroundColor: '#b30000',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    componentText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
      textAlign: 'center',
      flex: 1,
      marginRight: 40,
      color: 'white',
    },
    componentIcon: {
        marginLeft: 20,
        color: 'white',
      },
  });
  