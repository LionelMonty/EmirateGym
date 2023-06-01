import { View, Image, StyleSheet } from 'react-native'
import React from 'react'

const PhotoPage = ({ route }) => {

    const { photo } = route.params;

    return (
        <View style={styles.container}>
            <Image source={{ uri: photo }} style={styles.image} />
        </View>
    )
}

export default PhotoPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
      },
});