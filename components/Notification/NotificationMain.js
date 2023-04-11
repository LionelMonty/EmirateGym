import { StyleSheet, ScrollView, View } from 'react-native'
import React from 'react'
import NotificationCard from './NotificationCard'

const NotificationMain = () => {
  return (
      <ScrollView>
        <View style={styles.container}>
          <NotificationCard NotificationImage={require('../../images/gymRoom.jpg')} messageTitle="New Message" notificationText = "You have a new message from John Doe"/>
          <NotificationCard NotificationImage={require('../../images/gymRoom.jpg')} messageTitle="New Friend Request" notificationText = "You have a friend request from Jane Smith"/>
          <NotificationCard NotificationImage={require('../../images/gymRoom.jpg')} messageTitle="New Event Invitation" notificationText = "You have been invited to a party on Saturday at 7pm"/>
        </View>
      </ScrollView>
  )
}

export default NotificationMain

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal: 20,
      paddingVertical: 30,
  },
});
