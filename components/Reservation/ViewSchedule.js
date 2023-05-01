import { View, StyleSheet,Dimensions, ImageBackground, FlatList } from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get('window');
const responsiveWidth = width * 0.9; // 90% of the screen width
const responsiveHeight = height * 0.3; // 25% of the screen height

const ViewSchedule = () => {

    const data = Array.from({ length: 28 }, (_, index) => ({ id: index }));

    const renderItem = ({ item }) => {
        let boxColor = 'rgba(245, 245, 245, 0.4)';
        if (item.id < 20) {
            boxColor = 'rgba(0, 255, 0, 0.3)';
        }
        return (
        <View style={[styles.smallBox, { backgroundColor: boxColor }]} />
        );
    };

    return (
        <View style={styles.main_container}>
            <ImageBackground style={styles.background_container} source={require('../../images/gf.jpg')}>
                <View style={styles.main}>
                    <View style={styles.main_smallBox}>
                        <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.id} numColumns={7} />
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default ViewSchedule;

const styles = StyleSheet.create({
    main_container: {
        height: responsiveHeight,
        width: responsiveWidth,
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 20,
        overflow: 'hidden',
    },
    background_container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        
    },
    main:{
        backgroundColor: 'rgba(245, 245, 245, 0.4)',
        height:'100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    main_smallBox:{
        width:'100%',
        borderRadius: 10,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    smallBox: {
        width: '12.7%',
        aspectRatio: 1,
        borderRadius: 10,
        margin: 2.5,
        justifyContent: 'center',
        alignItems: 'center',
    },

});