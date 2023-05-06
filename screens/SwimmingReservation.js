import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import SwimSchedule from '../components/Reservation/SwimSchedule';
import LabelSchedule from '../components/Reservation/LabelSchedule';
import MainStats from '../components/Reservation/MainStats';
import BookNowBtn from '../components/Reservation/BookNowBtn';

const SwimmingReservation = () => {
  return (
    <View>
        <Text style={styles.title_container}>Pool Schedule</Text>
        <SwimSchedule/>
        <LabelSchedule/>
        <MainStats/>
        <BookNowBtn/>
    </View>
  )
}

export default SwimmingReservation;

const styles = StyleSheet.create({
    title_container:{
        marginLeft: 20,
        marginVertical: 10, 
        fontSize: 24,
        fontFamily: 'Merriweather_400Regular',
    },

});
