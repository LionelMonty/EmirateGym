import {  View } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const AdminHeader = () => {

    const navigation = useNavigation();

    const handleMenuPress = () => {
      navigation.navigate('Admin Setting'); // Navigate to Notification Page
    };
  
  return (
    <View>
        <Header
          backgroundColor="#FF0000"
          placement="center"
          leftComponent={<Icon name="menu" color="#fff" size={25} onPress = {handleMenuPress} />}
          centerComponent={{ text: 'Emirate Gym', style: { color: '#fff', fontSize: 22 ,fontFamily: 'Merriweather_700Bold'} }}
        />
      </View>
  )
}

export default AdminHeader