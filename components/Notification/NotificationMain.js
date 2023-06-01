import { StyleSheet, ScrollView, View } from 'react-native';
import React, {useEffect,useState} from 'react';
import NotificationCard from './NotificationCard';
import { getNotification } from '../../database/Read';

const NotificationMain = () => {

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    getNotification((data) => {
      setNotifications(data);
    });
  }, []);

  return (
      <ScrollView>
        <View style={styles.container}>
          {notifications.map((notification) => {
          return (
            <NotificationCard
              key={notification.id}
              NotificationImage={require("../../images/logoEG.jpg")}
              messageTitle={notification.title}
              notificationText={notification.text}
            />
          );
        })}
        </View>
      </ScrollView>
  )
}

export default NotificationMain

const styles = StyleSheet.create({
  container: {
      flex: 1,
      paddingHorizontal: 20,
      paddingVertical: 30,
  },
});
