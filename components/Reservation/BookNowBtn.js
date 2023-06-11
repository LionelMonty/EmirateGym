import { Text, StyleSheet, TouchableOpacity, View, Dimensions } from 'react-native'
import React, { useState } from 'react';
import { checkUserMembership } from '../../database/Adding';
import {  useNavigation } from '@react-navigation/native';
import { checkBookingExist } from '../../database/Read';

let info = [];

export const bookingInfo = (selectedTime, nameOfDay, tempTitle) => {
  info = [selectedTime, nameOfDay, tempTitle];
  return info;
};

const { width } = Dimensions.get('window');
const responsiveWidth = width * 0.42; // 90% of the screen width

const BookNowBtn = (props) => {
  const navigation = useNavigation();

  const paymentPage = () => {
    navigation.navigate("Single Pay");
  };

  const check = () => {
    if(props.title === "Swimming Pool") {
      return props.count === 8;
    }
    else{
      return props.count === 28;
    }
  }

  const handleBookNow = () => {
    if (!check()) {
      checkUserMembership(info, paymentPage());
    }
  };

  return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.buttonBook} onPress={() => {checkUserMembership(info, paymentPage)}}>
            <Text style={styles.buttonText}>Book Now</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonCancel} onPress={() => {checkBookingExist(info)}}>
            <Text style={styles.buttonText}>Cancel Booking</Text>
        </TouchableOpacity>
      </View>
  )
}

export default BookNowBtn;

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    alignSelf:'center',
  },
  buttonBook: {
      backgroundColor: 'green',
      margin:5,
      padding: 10,
      borderRadius: 5,
      marginTop: 20,
      width:responsiveWidth,
  },
  buttonCancel: {
    backgroundColor: 'red',
    margin:5,
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width:responsiveWidth,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});