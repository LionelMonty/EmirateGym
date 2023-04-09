import {  View } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const HomeHeader = () => {

  const navigation = useNavigation();

  const handleIconPress = () => {
    navigation.navigate('Notification'); // Navigate to Notification Page
  };

  const handleMenuPress = () => {
    navigation.navigate('Settings'); // Navigate to Notification Page
  };



  return (
      <View>
        <Header
          backgroundColor="#FF0000"
          placement="center"
          leftComponent={<Icon name="menu" color="#fff" size={25} onPress = {handleMenuPress} />}
          centerComponent={{ text: 'Emirate Gym', style: { color: '#fff', fontSize: 22 ,fontFamily: 'Merriweather_700Bold'} }}
          rightComponent={<Icon name="notifications" color="#fff" size={25} onPress = {handleIconPress} />}
        />
      </View>
    );

};

export default HomeHeader;
