import { StyleSheet, View, Image, Text } from 'react-native';

const HomeMenu = (props) => {
    const { imageSource, title } = props;

    return (
        <View style={styles.card_rectangle}>
            <Image source={imageSource} style={styles.image} />
            <Text style={styles.card_title}>{styles.title}</Text>
        </View>
    );
};

export default HomeMenu;

const styles = StyleSheet.create({

    card_rectangle: {
        height: 190,
        width: '100%',
        marginBottom: 20, 
        borderWidth: 1,
        borderColor: 'black',
    },
    image:{
        width: '100%',
        height: '100%',
    }

});