import { View, Image, StyleSheet, Dimensions, Text } from 'react-native'
import React from 'react'

const windowWidth = Dimensions.get('window').width;

const GroupActivity = () => {
  return (
    <View style={styles.container}>

      <View style={styles.row}>
        <View style={styles.box}>
            <Image style={styles.image} source={require('../images/spinning.jpg')} />
            <Text style={styles.boxTitle}>Spinning</Text>
        </View>
        
        <View style={styles.box}>
            <Image style={styles.image} source={require('../images/abs.jpg')} />
            <Text style={styles.boxTitle}>Thighs abd glutes</Text>
        </View>

        <View style={styles.box}>
            <Image style={styles.image} source={require('../images/water.jpg')} />
            <Text style={styles.boxTitle}>Water aerobics</Text>
        </View>
        <View style={styles.box}>
            <Image style={styles.image} source={require('../images/zumba6.jpg')} />
            <Text style={styles.boxTitle}>Zumba</Text>
        </View>
      </View>

    </View>
  )
}

export default GroupActivity;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: '4%',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    row: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    box: {
      width: windowWidth * 0.4,
      height: windowWidth * 0.4,
      margin: 10,
      marginTop: 30,
      borderRadius: 100,
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      borderRadius: 100,
    },
    boxTitle: {
        textAlign: 'center',
        marginTop: 10,
    }
  });