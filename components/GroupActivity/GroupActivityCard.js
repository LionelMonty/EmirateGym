import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import React from 'react';

const windowWidth = Dimensions.get('window').width;

const GroupActivityCard = (props) => {
  const { GroupActivityImage, GroupActivityTtile } = props;

  return (
        <View style={styles.box}>
            <Image style={styles.image} source={GroupActivityImage} />
            <Text style={styles.boxTitle}>{GroupActivityTtile}</Text>
        </View>
  )
}

export default GroupActivityCard;

const styles = StyleSheet.create({
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
        fontFamily: 'Roboto_500Medium',
    }
  });