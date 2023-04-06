import {View, StyleSheet, ScrollView} from 'react-native';
import HomeMenu from "./HomeMenu";

const ActivityCard = () => {
    return (
        <ScrollView>
            <View style={styles.card}>
                
                <HomeMenu 
                    imageSource={require('../images/gym.jpg')}
                    title="Box 1"
                />
                <HomeMenu 
                    imageSource={require('../images/swim.jpg')}
                    title="Box 1"
                />
                <HomeMenu 
                    imageSource={require('../images/gym.jpg')}
                    title="Box 1"
                />
                
            </View>
        </ScrollView>
    );
}

export default ActivityCard;

const styles = StyleSheet.create({

    card: {
        flex: 1,
        flexDirection: 'column',
        margin: 20, 
    },

});