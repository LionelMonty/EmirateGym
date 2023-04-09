import { StyleSheet, View, Image, Text } from 'react-native';

const HomeMenu = (props) => {
    const { imageSource, title } = props;

    return (
        <View>
            <Text style={styles.card_title}>{title}</Text>
            <View style={styles.card_rectangle}>
                <Image source={imageSource} style={styles.image} />   
            </View>
        </View>
    );
};

export default HomeMenu;

const styles = StyleSheet.create({

    card_rectangle: {
        height: 190,
        width: '100%',
        marginBottom: 30, 
        borderRadius: 10,
    },
    image:{
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    card_title: {
        paddingBottom: 10,
        fontSize: 24,
        fontFamily: 'Merriweather_400Regular',
    }

});