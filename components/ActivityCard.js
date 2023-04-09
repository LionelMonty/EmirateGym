import {View, StyleSheet, ScrollView} from 'react-native';
import HomeMenu from "./HomeMenu";
import HomeHeader from './Header/HomeHeader';

const ActivityCard = () => {
    return (
        <>
            <HomeHeader/>
            <ScrollView>
                <View style={styles.card}>
                    <HomeMenu imageSource={require('../images/gymRoom.jpg')} title="Gym" />
                    <HomeMenu imageSource={require('../images/swimming.jpeg')} title="Swimming Pool" />
                    <HomeMenu imageSource={require('../images/group.jpeg')} title="Group Activity" />
                </View>
            </ScrollView>
        </>
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