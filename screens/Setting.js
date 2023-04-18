import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Ionicons} from '@expo/vector-icons';

const Setting = () => {
    
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.componentContainer}
                onPress={() => navigation.navigate('Home')}>
                <Ionicons name="home" size={24} color="black" style={styles.componentIcon} />
                <Text style={styles.componentText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.componentContainer}
                onPress={() => navigation.navigate('Feed')}>
                <Ionicons name="newspaper" size={24} color="black" style={styles.componentIcon} />
                <Text style={styles.componentText}>Feed</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.componentContainer}
                onPress={() => navigation.navigate('Camera')}>
                <Ionicons name="camera" size={24} color="black" style={styles.componentIcon} />
                <Text style={styles.componentText}>Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.componentContainer}
                onPress={() => navigation.navigate('Membership')}>
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
  