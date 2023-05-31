import React, { useState } from 'react';
import { View } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';

let v;

export const counter2 = (value) => {
    v= value;
    return v;
};

const CircularReservation = () => {

    const [value, setValue] = useState(0);

  return (
    <View>
      <CircularProgress
        radius = {70}
        value = {85}
        textColor = '#222'
        fontSive = {20}
        valueSuffix = {'%'}
        inActiveStrokeColor = {'#2ecc71'}
        inActiveStrokeOpacity = {0.2}
        inActiveStrokeWidth = {6}
        duration = {3000}
        onAnimationCompete = { () => setValue(50)}
      />
    </View>
  )
}

export default CircularReservation;