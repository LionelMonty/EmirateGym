import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CircularReservation from './CircularReservation'

const MainStats = () => {
  return (
    <View style={styles.stats_mainContainer}>
        <View style={styles.circular_mainContainer}>
            <CircularReservation/>
        </View>
        <View style={styles.circular_smallContainer}>
            <View style={styles.text_smallContainer}>
                <Text style={styles.text_title}>Reserved</Text>
                <Text style={styles.text_numRed}>20</Text>
            </View>
            <View style={styles.text_smallContainer}>
                <Text style={styles.text_title}>Available</Text>
                <Text style={styles.text_numGreen}>8</Text>
            </View>
        </View>
    </View>
  )
}

export default MainStats;

const styles = StyleSheet.create({
    stats_mainContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    circular_mainContainer:{
        marginRight:30,
    },
    circular_smallContainer:{
        flexDirection:'column',
    },
    text_title:{
        fontSize:24,
    },
    text_numRed:{
        justifyContent:'center',
        textAlign:'center',
        fontSize: 20,
        color:'red',
    },
    text_numGreen:{
        justifyContent:'center',
        textAlign:'center',
        fontSize: 20,
        color:'#2ecc71',
    }
});