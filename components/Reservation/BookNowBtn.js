import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const BookNowBtn = () => {
  return (
    <TouchableOpacity style={styles.button}>
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