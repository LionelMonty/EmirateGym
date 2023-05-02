import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const LabelSchedule = () => {
  return (
    <View style={styles.label_bigContainer}>
            <View style={styles.label_smallContainer}>
                <View style={styles.boxColorGreen}/>
                <Text style={styles.label_text}>Already Reserved</Text>
            </View>
            <View style={styles.label_smallContainer}>
                <View style={styles.boxColorGray}/>
                <Text style={styles.label_text}>Available Capacity</Text>
            </View>
        </View>
  )
}

export default LabelSchedule;

const styles = StyleSheet.create({
    label_bigContainer:{
        flexDirection: 'row',
        margin:10,
        alignContent:'space-between',
        alignItems:'center',
        justifyContent:'center',
    },
    label_smallContainer:{
        margin: 10,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
    },
    boxColorGreen:{
        height:10,
        width:10,
        backgroundColor:'#2ecc71',
        borderWidth: 1, 
        borderColor: 'transparent', 
        borderStyle: 'solid',
        borderRadius:10,
    },
    boxColorGray:{
        height:10,
        width:10,
        backgroundColor:'gray',
        borderWidth: 1, 
        borderColor: 'transparent', 
        borderStyle: 'solid',
        borderRadius:10,
    },
    label_text:{
        marginLeft:5,
        fontSize: 14,
    },
});