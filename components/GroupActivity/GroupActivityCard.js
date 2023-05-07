import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import {  useNavigation } from '@react-navigation/native';
import { navTitle } from '../TimeSlot/TimeSlotMain';

const windowWidth = Dimensions.get('window').width;

const GroupActivityCard = (props) => {
  const { GroupActivityImage, GroupActivityTtile, pageActivity } = props;

  const navigation = useNavigation();
  
  const navigateToTimeSlot = () => {
    navigation.navigate(pageActivity); 
    navTitle(GroupActivityTtile);
  }

  return (
    <TouchableOpacity onPress={navigateToTimeSlot}>
      <View style={styles.box}> 
        <Image style={styles.image} source={GroupActivityImage} />
        <Text style={styles.boxTitle}>{GroupActivityTtile}</Text>
      </View>
    </TouchableOpacity>
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