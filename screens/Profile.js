import {Text, View, StyleSheet, Image, Dimensions, ScrollView} from 'react-native';
import { Card } from 'react-native-elements';
import { readUserProfileGallery } from '../database/Read';
import React, { useEffect, useState } from 'react';
import FeedHeader from '../components/Header/FeedHeader';

const ScreenWidth = Dimensions.get('window').width;

const Profile = () => {

    const [arrayDetail, setArrayDetail] = useState([]);
    const [refresh, setRefresh] = useState(true);

    useEffect(() => {
        const getPhoto = async () => {
          try {
            if(refresh){
              const { arrayDetail: fetchedArrayDetail } = await readUserProfileGallery();
              setArrayDetail(fetchedArrayDetail);
              setRefresh(false);
            }
            
          } catch (error) {
            console.error(error);
          }
        };
    
        getPhoto();
  
    }, [refresh]);
    
    const renderBoxes = () => {
        return arrayDetail
            .sort((a, b) => new Date(b.creation) - new Date(a.creation))
            .map((photo, index) => (
                <View key={index} style={styles.box} >
                    <Image source={{ uri: photo.photoName }} style={styles.photoGallery}/>
                </View>
            ));
    };

    const handleRefresh = () => {
        setRefresh(true);
    };

    return (
        <>
            <FeedHeader loading = {handleRefresh} title = "Profile"/>
            <View style={styles.mainContainer}>
                <View style={styles.photo_username}>
                    <Image source={require('../images/visa.png')} style={styles.profilePic}/>
                    <Text style={styles.text}>Lionel Monty</Text>
                </View>
                <Card.Divider style={styles.sperator}/>
                <ScrollView>
                    <View style={styles.row}>
                        {renderBoxes()}
                    </View>
                </ScrollView>
            </View>
        </>
    );
}

export default Profile;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginVertical: 20,
    },
    photo_username: {
        flexDirection: 'column',
        alignSelf:'center',
    },
    profilePic: {
        width: 100,
        height: 100,
        borderRadius: 50,
        resizeMode: 'contain',
    },
    text: {
        textAlign: 'center',
        marginVertical: 10,
    },
    sperator: {
        marginHorizontal: 15,
        marginBottom:10
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    box: {
        width: ScreenWidth / 3.11, // Divide the screen width by the desired number of boxes per row
        height: 100,
        margin:2,
    },
    photoGallery: {
        width: ScreenWidth / 3.11,
        height: 100,
    },
});