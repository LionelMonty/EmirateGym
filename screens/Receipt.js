import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import {  useNavigation } from '@react-navigation/native';

const Receipt = () => {

    const navigation = useNavigation();

  return (
    <ScrollView>
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Image source={require('../images/check.png')} style={styles.smallImg}/>
            </View>
            <Text style={styles.mainText}>Transaction successful</Text>
            <Text style={styles.subText}>Mobile payment</Text>

            <View style={styles.subContainer}>
                <Text style={styles.subLeftText}>Total Amount</Text>
                <Text style={styles.leftText}>MUR 500.00</Text>

                <Text style={styles.subLeftText}>Beneficiary</Text>
                <Text style={styles.leftText}>Emirate Gym</Text>

                <Text style={styles.subLeftText}>From</Text>
                <Text style={styles.leftText}>yYvIi2l3YgeIQG1RvYoFTgMPsei2</Text>

                <Text style={styles.subLeftText}>Transaction reference</Text>
                <Text style={styles.leftText}>u3JlQDm2bJZN866ESGJ8</Text>

                <Text style={styles.subLeftText}>Date</Text>
                <Text style={styles.leftText}>01 April 2023</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Membership')}>
                <Text style={styles.buttonText}>Done</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
  )
}

export default Receipt;


const styles = StyleSheet.create({
    container: {
        marginHorizontal: 30,
        marginVertical: 40,
        backgroundColor: '#FFCCCC',
        flex: 1,
        borderRadius: 10,
        
    },
    imgContainer: {
        alignItems: 'center',
    },
    smallImg: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        marginTop: 20,
    },
    mainText: {
        textAlign:'center',
        marginTop: 30,
        fontSize: 16,
    },
    subText: {
        textAlign:'center',
        marginTop: 10,
        color: '#444444',
        fontSize: 13,
    },
    subContainer: {
        marginVertical: 20,
        
    },
    subLeftText: {
        color: '#444444',
        marginTop: 20,
        marginLeft: 20,
    },
    leftText: {
        marginLeft: 20,
    },
    button: {
        backgroundColor: 'red',
        marginHorizontal:30,
        padding: 10,
        borderRadius: 5,
        marginBottom: 25,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
});