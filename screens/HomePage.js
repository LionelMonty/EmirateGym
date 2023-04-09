import {View} from 'react-native';
import ActivityCard from '../components/ActivityCard';
import BottomNavigation from '../navigation/BottomNavigation';
import HomeHeader from '../components/Header/HomeHeader';

const HomePage = () => {
    return (
        <View>
            <HomeHeader/>
            <ActivityCard/>
        </View>
    );
}

export default HomePage;