import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ViewSchedule from '../components/Reservation/ViewSchedule';
import LabelSchedule from '../components/Reservation/LabelSchedule';
import MainStats from '../components/Reservation/MainStats';
import BookNowBtn from '../components/Reservation/BookNowBtn';

const Reservation = () => {
    return (
            <View>
                <Text style={styles.title_container}>Gym Schedule</Text>
                <ViewSchedule/>
                <LabelSchedule/>
                <MainStats/>
                <BookNowBtn/>
            </View>
    )
}

export default Reservation;

const styles = StyleSheet.create({
    title_container:{
        marginLeft: 20,
        marginVertical: 10, 
        fontSize: 24,
        fontFamily: 'Merriweather_400Regular',
    },
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