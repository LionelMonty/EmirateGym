import { StyleSheet, View, Image, Text } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const HomeHeader = () => {

    const navigation = useNavigation();

    const handleIconPress = () => {
    navigation.navigate('Notification'); // Navigate to MyOtherScreen
  };

    return (
        <View>
          <Header
            backgroundColor="#FF0000"
            placement="center"
            leftComponent={<Icon name="menu" color="#fff" size={25}/>}
            centerComponent={{ text: 'Emirate Gym', style: { color: '#fff', fontSize: 22 ,fontFamily: 'Merriweather_700Bold'} }}
            rightComponent={<Icon name="notifications" color="#fff" size={25} onPress = {handleIconPress} />}
          />
        </View>
      );

};

export default HomeHeader;

const styles = StyleSheet.create({

    header_container: {
        height: 50,
        backgroundColor: 'white'
    },
    header_title: {
        fontFamily: 'Merriweather_700Bold',
        fontSize: 26,
        color: '#FF0000',
        textAlign: 'center',
        textAlignVertical: 'center',
        flex: 1,
    }

});