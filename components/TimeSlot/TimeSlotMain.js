import { View, ScrollView } from 'react-native'
import React from 'react'
import DateString from './DateString'
import BoxSlot from './BoxSlot'

const timeSlots = [
    { timeText: '7h00 - 8h00' },
    { timeText: '8h00 - 9h00' },
    { timeText: '9h00 - 10h00' },
    { timeText: '10h00 - 11h00' },
    { timeText: '11h00 - 12h00' },
    { timeText: '12h00 - 13h00' },
    { timeText: '13h00 - 14h00' },
    { timeText: '14h00 - 15h00' },
    { timeText: '15h00 - 16h00' },
    { timeText: '16h00 - 17h00' },
    { timeText: '17h00 - 18h00' },
    { timeText: '18h00 - 19h00' },
    { timeText: '19h00 - 20h00' },
  ];

const TimeSlotMain = () => {
    
  return (
    <ScrollView>
        <View>
            <DateString/>
            {timeSlots.map((slot, index) => (
                <BoxSlot key={index} timeText={slot.timeText} />
            ))}
        </View>
    </ScrollView>
  )
}

export default TimeSlotMain