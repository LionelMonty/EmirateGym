import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {  useNavigation } from '@react-navigation/native';
import NotificationPage from '../screens/NotificationPage';

const HeaderRightIcon = () => {

    const navigation = useNavigation();
    const navigateToNotification = () => {
        navigation.navigate('Notification'); 
    }


    return (
        <View style={styles.headerRightIcon}>
            <TouchableOpacity onPress={navigateToNotification}>
                <Ionicons name="notifications-outline" size={25} color="black" style={{ marginRight: 10 }} />
            </TouchableOpacity>
        </View>
    );
}

export default HeaderRightIcon;

const styles = StyleSheet.create({
    headerRightIcon: {
        marginRight: 10,  
    },
  });