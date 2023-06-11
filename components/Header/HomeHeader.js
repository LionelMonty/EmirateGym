import {  View } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import {Ionicons} from '@expo/vector-icons';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const HomeHeader = () => {

  const navigation = useNavigation();
  const {logout} = useContext(AuthContext);

    const logoutUser = () => {
        logout()
        .then(() => console.log('user logout'))
        .catch(error => console.log(error));
    };

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
          leftComponent={<Icon name="logout" color="#fff" size={25} onPress = {logoutUser} />}
          centerComponent={{ text: 'Emirate Gym', style: { color: '#fff', fontSize: 22 ,fontFamily: 'Merriweather_700Bold'} }}
          rightComponent={<Icon name="notifications" color="#fff" size={25} onPress = {handleIconPress} />}
        />
      </View>
    );

};

export default HomeHeader;
