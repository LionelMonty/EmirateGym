import React, { useState } from 'react';
import { View } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';

let v;
let percentage;

export const counter2 = (value) => {
    v= value;
    return v;
};

const CircularReservation = (props) => {

  const check = () => {
    if(props.title === "Swimming Pool") {
      percentage = (props.count / 8) * 100; 
      return percentage;
    }
    else{
      percentage = (props.count / 28) * 100;
      return percentage;
    }
  }

  return (
    <View>
      <CircularProgress
        radius = {70}
        value = {check()}
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