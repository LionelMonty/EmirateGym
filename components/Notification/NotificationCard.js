import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const NotificationCard = (props) => {
    const { NotificationImage, messageTitle, notificationText } = props;
  return (
        
        <View style={styles.notification}>
            <Image source={NotificationImage} style={styles.avatar} />
            <View style={styles.notificationContent}>
                <Text style={styles.notificationTitle}>{messageTitle}</Text>
                <Text style={styles.notificationText}>{notificationText}</Text>
            </View>
        </View>

  );
}

export default NotificationCard;

const styles = StyleSheet.create({
    notification: {
        backgroundColor: '#f5f5f5',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    notificationTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    notificationText: {
        fontSize: 16,
        textAlign: 'justify',
        marginRight: 5,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
      },
    notificationContent: {
        flex: 1,
    },
})