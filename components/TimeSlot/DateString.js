import { StyleSheet, View, Text } from 'react-native';
import React, { useState,useEffect } from 'react';

export const getFormattedDate = (date) => {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const dayOfWeek = daysOfWeek[date.getDay()];
        const dayOfMonth = date.getDate();
        const monthOfYear = monthsOfYear[date.getMonth()];
        const year = date.getFullYear();
        return `${dayOfWeek} ${dayOfMonth} ${monthOfYear} ${year}`;
    }
    

const DateString = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    
    
    const updateCurrentDate = () => {
        setCurrentDate(new Date());
    };
    
      useEffect(() => {
        updateCurrentDate();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.dateText}>{getFormattedDate(currentDate)}</Text>
        </View>
    );
};

export default DateString;


const styles = StyleSheet.create({
    container: {
        padding: 20,
      },
      dateText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
      },
});

