import { View, Text, StyleSheet } from 'react-native';
import React, { useState, useEffect } from "react";
import SwimSchedule from '../components/Reservation/SwimSchedule';
import LabelSchedule from '../components/Reservation/LabelSchedule';
import MainStats from '../components/Reservation/MainStats';
import BookNowBtn from '../components/Reservation/BookNowBtn';
import { getReservedBooking } from '../database/Read';
import { checkTodayBooking } from '../database/Read';

let information = {};
let updatedCount;

export const swimmingValueInfo = (nameOfDay, tempTitle, selectedTime) => {
    return information = { nameOfDay: nameOfDay, tempTitle: tempTitle, selectedTime:selectedTime }
};

const SwimmingReservation = () => {

    const [count, setCount] = useState(0);
    const title = information.tempTitle;

    useEffect(() => {
        const fetchData = async () => {
            try {
                updatedCount = await getReservedBooking(information.nameOfDay, information.tempTitle, information.selectedTime, setCount);
              checkTodayBooking(information.nameOfDay, information.tempTitle, information.selectedTime);
            } catch (error) {
              console.error("Error fetching booking data: ", error);
            }
          };
      
          fetchData();
    }, []);

    return (
      <View>
          <Text style={styles.title_container}>Pool Schedule</Text>
          <SwimSchedule count = {count}/>
          <LabelSchedule/>
          <MainStats count = {count} title = {title}/>
          <BookNowBtn count = {count} title = {title}/>
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
