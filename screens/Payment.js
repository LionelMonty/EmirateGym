import { View, TextInput, Button, StyleSheet, Image, Text } from 'react-native';
import React from 'react';
import { Card } from 'react-native-elements';

let value = {};

export const membershipDetail = (membership) => {
    value = membership;
    return value;
}

const Payment = () => {

    const [cardNumber, setCardNumber] = React.useState('');
    const [expirationDate, setExpirationDate] = React.useState('');
    const [cvv, setCvv] = React.useState('');

    const handlePayment = () => {
        // Perform payment logic here
    };

    return (
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
        </View>
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
     
  });