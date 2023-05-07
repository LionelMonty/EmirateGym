import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ViewSchedule from '../components/Reservation/ViewSchedule';
import LabelSchedule from '../components/Reservation/LabelSchedule';
import MainStats from '../components/Reservation/MainStats';
import BookNowBtn from '../components/Reservation/BookNowBtn';

const AbdsReservation = () => {
  return (
    <View>
        <Text style={styles.title_container}>Thighs abd glutes Schedule</Text>
        <ViewSchedule picture={require('../images/abd.jpg')}/>
        <LabelSchedule/>
        <MainStats/>
        <BookNowBtn/>
    </View>
  )
}

export default AbdsReservation;

const styles = StyleSheet.create({
    title_container:{
        marginLeft: 20,
        marginVertical: 10, 
        fontSize: 24,
        fontFamily: 'Merriweather_400Regular',
    },
});