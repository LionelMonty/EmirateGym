import { View, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import GroupActivityCard from './GroupActivityCard'

const GroupActivityMenu = () => {
  return (
    <ScrollView>
        <View style={styles.container}>
          <View style={styles.row}>
            <GroupActivityCard GroupActivityImage = {require('../../images/spinning.jpg')} GroupActivityTtile = "Spinning"/>
            <GroupActivityCard GroupActivityImage = {require('../../images/abs.jpg')} GroupActivityTtile = "Thighs abd glutes"/>
            <GroupActivityCard GroupActivityImage = {require('../../images/water.jpg')} GroupActivityTtile = "Water aerobics"/>
            <GroupActivityCard GroupActivityImage = {require('../../images/zumba6.jpg')} GroupActivityTtile = "Zumba"/>
          </View>
        </View>
    </ScrollView>
  )
}

export default GroupActivityMenu;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: '4%',
        paddingVertical: '4%',
        backgroundColor: '#fff',
    },
    row: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginBottom: 25,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });