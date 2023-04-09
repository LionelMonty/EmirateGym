import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const NotificationPage = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.notification}>
                    <Image source={require('../images/gymRoom.jpg')} style={styles.avatar} />
                    <View style={styles.notificationContent}>
                        <Text style={styles.notificationTitle}>New Message</Text>
                        <Text style={styles.notificationText}>You have a new message from John Doe</Text>
                    </View>
                </View>
                <View style={styles.notification}>
                    <Image source={require('../images/gymRoom.jpg')} style={styles.avatar} />
                    <View style={styles.notificationContent}>
                        <Text style={styles.notificationTitle}>New Friend Request</Text>
                        <Text style={styles.notificationText}>You have a friend request from Jane Smith</Text>
                    </View>
                </View>
                <View style={styles.notification}>
                    <Image source={require('../images/gymRoom.jpg')} style={styles.avatar} />
                    <View style={styles.notificationContent}>
                        <Text style={styles.notificationTitle}>New Event Invitation</Text>
                        <Text style={styles.notificationText}>You have been invited to a party on Saturday at 7pm</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

export default NotificationPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
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
  });