import { View, Text, StyleSheet } from 'react-native';
import React, { useState, useEffect } from "react";
import ViewSchedule from '../components/Reservation/ViewSchedule';
import LabelSchedule from '../components/Reservation/LabelSchedule';
import MainStats from '../components/Reservation/MainStats';
import BookNowBtn from '../components/Reservation/BookNowBtn';
import { getReservedBooking } from '../database/Read';
import { checkTodayBooking } from '../database/Read';

let information = {};

export const waterValueInfo = (nameOfDay, tempTitle, selectedTime) => {
    return information = { nameOfDay: nameOfDay, tempTitle: tempTitle, selectedTime:selectedTime }
};

const WaterAerobicsReservation = () => {

    const [count, setCount] = useState(0);
    const title = information.tempTitle;

    useEffect(() => {
        getReservedBooking(information.nameOfDay, information.tempTitle, information.selectedTime, setCount);
        checkTodayBooking(information.nameOfDay, information.tempTitle, information.selectedTime);
    }, []);

    return (
      <View>
          <Text style={styles.title_container}>Water Aerobics Schedule</Text>
          <ViewSchedule picture={require('../images/aerobics.jpg')} count = {count}/>
          <LabelSchedule/>
          <MainStats count = {count} title = {title}/>
          <BookNowBtn/>
      </View>
    )
}

export default WaterAerobicsReservation;

const styles = StyleSheet.create({
    title_container:{
        marginLeft: 20,
        marginVertical: 10, 
        fontSize: 24,
        fontFamily: 'Merriweather_400Regular',
    },
});