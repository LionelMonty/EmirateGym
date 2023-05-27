import { View, ScrollView, TouchableOpacity } from 'react-native'
import DateString, {getFormattedDate} from './DateString'
import BoxSlot from './BoxSlot'
import React, { useState } from 'react';
import {  useNavigation } from '@react-navigation/native';
import moment from "moment";
import { bookingInfo } from '../Reservation/BookNowBtn';

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
    if (tempTitle === 'Spinning') {
      navigation.navigate('Spinning Reservation');
    }
    if (tempTitle === 'Thighs abd glutes') {
      navigation.navigate('Thighs abd glutes Reservation');
    }
    if (tempTitle === 'Water aerobics') {
      navigation.navigate('Aerobics Reservation');
    }
    if (tempTitle === 'Zumba') {
      navigation.navigate('Zumba Reservation');
    }

  }

  //selected time
  console.log(selectedTime);

  //import name of day
  const x = getFormattedDate(new Date()).split(" ")[1];
  const y = getFormattedDate(new Date()).split(" ")[2];
  const z = getFormattedDate(new Date()).split(" ")[3];
  const nameOfDay =  `${x} ${y} ${z}`;

/*   // Parse the input date strings
  var d1 = moment("26 June 2023 at 15:45:49 UTC+4", "DD MMMM YYYY [at] HH:mm:ss [UTC]Z");
  var d2 = moment("26 July 2023", "DD MMMM YYYY");

  // Compare the dates using the functions
  console.log(d1.isAfter(d2)); // false
  console.log(d1.isBefore(d2)); // true
  console.log(d1.isSame(d2)); // false
  console.log(d1.isSameOrAfter(d2)); // false */

  console.log(nameOfDay);

  console.log(tempTitle);

  console.log(bookingInfo(selectedTime, nameOfDay, tempTitle));

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