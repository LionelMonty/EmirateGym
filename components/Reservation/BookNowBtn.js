import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { checkUserMembership } from '../../database/Adding'
import {  useNavigation } from '@react-navigation/native';

let info = []

export const bookingInfo = (selectedTime, nameOfDay, tempTitle) => {
  info = [selectedTime, nameOfDay, tempTitle];
  return info;
};

const BookNowBtn = () => {
  const navigation = useNavigation();

  const paymentPage = () => {
    navigation.navigate("Single Pay");
  };

  return (
    <TouchableOpacity style={styles.button} onPress={() => {checkUserMembership(info, paymentPage)}}>
        <Text style={styles.buttonText}>Book Now</Text>
    </TouchableOpacity>
  )
}

export default BookNowBtn;

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'red',
        margin:20,
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
      buttonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
});