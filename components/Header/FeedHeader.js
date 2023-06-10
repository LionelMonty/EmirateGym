import {  View } from 'react-native';
import { Header, Icon } from 'react-native-elements';

const FeedHeader = (props) => {



    return (
        <View>
            <Header
            backgroundColor="#FF0000"
            placement="center"
            centerComponent={{ text: 'Feed', style: { color: '#fff', fontSize: 22 ,fontFamily: 'Merriweather_700Bold'} }}
            rightComponent={<Icon name="refresh" color="#fff" size={25} onPress = {props.loading} />}
            />
        </View>
    )
}

export default FeedHeader