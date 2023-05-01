import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import ViewSchedule from '../components/Reservation/ViewSchedule';


const Reservation = () => {
    return (
        <View>
        <Text style={styles.title_container}>Gym Schedule</Text>
        <ViewSchedule/>
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
});