import {Text, View, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Rating } from "react-native-ratings";
import Icon from 'react-native-vector-icons/FontAwesome';
import { readFeed } from '../database/Read';
import React, { useEffect, useState } from 'react';
import FeedHeader from '../components/Header/FeedHeader';

const { height } = Dimensions.get('window');
const responsiveHeight = height * 0.55;

const SocialMedia = () => {

    const [arrayDetail, setArrayDetail] = useState([]);

    const [refresh, setRefresh] = useState(true);
  
    useEffect(() => {
      const getPhoto = async () => {
        try {
          if(refresh){
            const { arrayDetail: fetchedArrayDetail } = await readFeed();
            setArrayDetail(fetchedArrayDetail);
            setRefresh(false);
          }
          
        } catch (error) {
          console.error(error);
        }
      };
  
      getPhoto();

    }, [refresh]);

    const handleRefresh = () => {
        setRefresh(true);
    };

    return (
        <>
            <FeedHeader loading = {handleRefresh}/>
            <ScrollView>
                <View style={styles.mainContainer}>
                    {arrayDetail
                    .sort((a, b) => new Date(b.creation) - new Date(a.creation))
                    .map((photo, index) => (
                        <View style={styles.container} key={index}>
                            <View style={styles.firstMiniContainer}>
                                <View style={styles.firstMiniContainer1}>
                                    <Image style={styles.profilePicture} source={require('../images/visa.png')}/>
                                    <Text style={styles.username}>{photo.name}</Text>
                                </View>
                                <View style={styles.firstMiniContainer2}>
                                    <Icon name="ellipsis-v" size={25} color="#000" />
                                </View>
                            </View>
                            <View style={styles.secondMiniContainer}>
                                <Image style={styles.picture} source={{ uri: photo.photoName }}/>
                            </View>
                            <View style={styles.thirdMiniContainer}>
                                <View style={styles.thirdMiniContainer1}>
                                    <Rating style={styles.rating} imageSize={25} startingValue={1} showRating={false} isDisabled fractions={1} jumpValue={0.5} tintColor={"#CCCCCC"}/>
                                    <Icon name="send" size={25} color="#CCCCCC" />
                                </View>
                                <View style={styles.thirdMiniContainer2}>
                                    <Text style={styles.text}>Your photo will be visible to all users. Users can rate your photo to show their support and encouragement for your activities.</Text>
                                </View>
                            </View>
                        </View> 
                    ))}
                </View>
            </ScrollView>
        </>
        
    );
}

export default SocialMedia;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    container: {
        marginBottom: 5,
        backgroundColor:'white',
    },
    firstMiniContainer: {
        flexDirection: 'row',
        marginHorizontal: 10,
        padding: 5,
        justifyContent:'space-between',
    },
    firstMiniContainer1: {
        flexDirection: 'row',
    },
    firstMiniContainer2: {
        flexDirection: 'row',
        alignSelf:'center',
    },
    profilePicture: {
        width: 45,
        height: 45,
        borderRadius: 50,
        resizeMode: 'contain',
    },
    username: {
        textAlignVertical:'center',
        marginHorizontal: 10,
    },
    secondMiniContainer: {
        width: '100%',
        height: responsiveHeight,
    },
    picture: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
    },
    thirdMiniContainer: {
        flexDirection: 'column',
        padding: 10,
    },
    thirdMiniContainer1: {
        flexDirection: 'row',
        justifyContent:'space-between',
    },
    rating: {
        
    },
    thirdMiniContainer2: {
        paddingTop: 10,
    },
    text: {
        fontSize: 12,
        textAlign:'justify',
    },
})