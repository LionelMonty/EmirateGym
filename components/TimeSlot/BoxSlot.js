import React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';

const BoxSlot = ({timeText}) => {
  const { width } = Dimensions.get('window');
  const containerWidth = width * 0.8;

  return (
    <View style={[styles.container, { width: containerWidth }]}>
      <View style={styles.time}>
        <Text style={styles.timeText}>{timeText}</Text>
      </View>
    </View>
  );
};

export default BoxSlot;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  time: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

