import { View, TextInput, TouchableOpacity, Alert, StyleSheet, Image, Text, ScrollView } from 'react-native';
import React from 'react';
import { Card } from 'react-native-elements';
import { AddMembership, checkNotification } from '../database/Adding';
import {  useNavigation } from '@react-navigation/native';

let value = {};

export const membershipDetail = (membership) => {
    value = membership;
    return value;
}

const sanitizeInput = (input) => {
  // Remove any non-numeric characters
  return input.replace(/[^0-9]/g, '');
};

const Payment = () => {

    const [cardNumber, setCardNumber] = React.useState('');
    const [expirationDate, setExpirationDate] = React.useState('');
    const [cvv, setCvv] = React.useState('');

    const navigation = useNavigation();

    const validateCardDetails = () => {
    // Sanitize input
    const sanitizedCardNumber = sanitizeInput(cardNumber);
    const sanitizedExpirationDate = sanitizeInput(expirationDate);
    const sanitizedCvv = sanitizeInput(cvv);

    // Validate Card Number
    if (!/^\d{16}$/.test(sanitizedCardNumber)) {
      Alert.alert('Invalid Card Number', 'Please enter a valid 16-digit card number');
      return;
    }

    // Validate Expiration Date
    if (!/^\d{4}$/.test(sanitizedExpirationDate)) {
      Alert.alert('Invalid Expiration Date', 'Please enter a valid 4-digit expiration date');
      return;
    }

    // Perform additional checks on the expiration date if required

    // Validate CVV
    if (!/^\d{3}$/.test(sanitizedCvv)) {
      Alert.alert('Invalid CVV', 'Please enter a valid 3-digit CVV');
      return;
    }

    // All fields are valid
    // Process the card details or navigate to the next screen
    //Alert.alert('Success', 'Card details are valid');
    AddMembership(value.title)
    const title = "Transaction Successful!";
    const text = "Congratulations! Your transaction has been successfully completed. Thank you for choosing our services.";
    checkNotification(title, text);
    setCardNumber('');
    setExpirationDate('');
    setCvv('');
    navigation.navigate('Receipt');
  };

  const handlePayment = () => {
      validateCardDetails();
  };

    return (
      <ScrollView>
        <View style={styles.container}>
           <Text style={styles.containerText}>Set up your credit or debit card</Text>
           <Card containerStyle={styles.cardContainer}>
                <Card.Title>{value.title}</Card.Title>
                <Card.Divider />
                <Text style={styles.price}>{value.price}</Text>
            </Card>
            <View style={styles.imgContainer}>
                <Image source={require('../images/visa.png')} style={styles.smallImg}/>
                <Image source={require('../images/mastercard.png')} style={styles.smallImg}/>
                <Image source={require('../images/ae.png')} style={styles.smallImg}/>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Card Number"
                    value={cardNumber}
                    onChangeText={setCardNumber}
                    keyboardType="numeric"
                    maxLength={16}
                />
                </View>
                <View style={styles.inputContainer}>
                <TextInput
                    style={[styles.input, { width: '50%', marginRight:16, }]}
                    placeholder="Expiration Date"
                    value={expirationDate}
                    onChangeText={setExpirationDate}
                    keyboardType="numeric"
                    maxLength={4}
                />
                <TextInput
                    style={[styles.input, { width: '40%' }]}
                    placeholder="CVV"
                    value={cvv}
                    onChangeText={setCvv}
                    keyboardType="numeric"
                    maxLength={3}
                />
            </View>
            <View style={styles.termContainer}>
              <Text style={styles.termTitle}>Refunds and Cancellations:</Text>
              <Text style={styles.termParagraph}>
                Please note that once a reservation is made through the App, it is considered final and non-refundable. We do not offer refunds or cancellations for any gym bookings or membership made through the app. We encourage you to carefully review your reservation details before confirming your booking/membership.
              </Text>
            </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={handlePayment}>
            <Text style={styles.buttonText}>Membership</Text>
        </TouchableOpacity>
      </ScrollView>
    )
}

export default Payment;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
      },
      containerText: {
        marginHorizontal:20,
        fontSize:30,
        fontFamily: "Kanit_400Regular",
      },
      cardContainer: {
        borderRadius: 10,
      },
      imgContainer: {
        display: 'flex',
        flexDirection: 'row', 
        marginHorizontal:20,
        marginTop: 5,
      },
      smallImg: {
        width: 60,
        height: 50,
        resizeMode: 'contain',
      },
      inputContainer: {
        flexDirection: 'row',
        marginBottom: 16,
        marginHorizontal:20,
      },
      input: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 8,
      },
      termContainer: {
        marginHorizontal:20,
      },
      termTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
      },
      termParagraph: {
        fontSize: 12,
        textAlign:'justify',
        color:'#444444',
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