import { View, ScrollView, TouchableOpacity } from 'react-native'
import DateString, {getFormattedDate} from './DateString'
import BoxSlot from './BoxSlot'
import React, { useState, useEffect } from 'react';
import {  useNavigation } from '@react-navigation/native';

const timeSlots = [
    { id: '1', timeText: '7h00 - 8h00' },
    { id: '2', timeText: '8h00 - 9h00' },
    { id: '3', timeText: '9h00 - 10h00' },
    { id: '4', timeText: '10h00 - 11h00' },
    { id: '5', timeText: '11h00 - 12h00' },
    { id: '6', timeText: '12h00 - 13h00' },
    { id: '7', timeText: '13h00 - 14h00' },
    { id: '8', timeText: '14h00 - 15h00' },
    { id: '9', timeText: '15h00 - 16h00' },
    { id: '10', timeText: '16h00 - 17h00' },
    { id: '11', timeText: '17h00 - 18h00' },
    { id: '12', timeText: '18h00 - 19h00' },
    { id: '13', timeText: '19h00 - 20h00' },
];

let tempTitle = '';

export const navTitle = (title) =>{
  tempTitle = title;
  return tempTitle;
}



const TimeSlotMain = props => {
  const navigation = useNavigation();
  const [selectedTime, setSelectedTime] = useState(null);


  const handleTimeSlotPress = (time) => {
    setSelectedTime(time);
    if (tempTitle === 'Gym') {
      navigation.navigate('Reservation');
    }
    if (tempTitle === 'Swimming Pool') {
      navigation.navigate('Swimming Reservation');
    }
    
  }

  //display time
  console.log(selectedTime);

  //import name of day
  const nameOfDay = getFormattedDate(new Date()).split(" ")[0];
  console.log(nameOfDay);

  const checkDay = () => {
    if (nameOfDay === 'Saturday') {
      return timeSlots.slice(0, 11);
    } else if (nameOfDay === 'Sunday') {
      return timeSlots.slice(0, 5);
    } else {
      return timeSlots;
    }
  }

    return (
      <ScrollView>
          <View>
              <DateString/>
              {checkDay().map((item) => (
                <TouchableOpacity key={item.id} onPress={() => handleTimeSlotPress(item.timeText)}>
                  <BoxSlot timeText={item.timeText} />
                </TouchableOpacity>
              ))}
          </View>
      </ScrollView>
    )
}

export default TimeSlotMain