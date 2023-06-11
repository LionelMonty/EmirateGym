import {Text, View, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import { Card } from 'react-native-elements';
import { readUserProfileGallery } from '../database/Read';
import React, { useEffect, useState } from 'react';
import FeedHeader from '../components/Header/FeedHeader';
import * as ImagePicker from 'expo-image-picker';
import { updatePhotoToFirestore } from '../database/Update';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Toast from 'react-native-toast-message';
import { firebaseStorage } from "../config/firebase";
import { readUserProfilePhoto } from '../database/Read';

const ScreenWidth = Dimensions.get('window').width;
let userID = "";

export const currentUserIDProfile = (id) => {
  userID = id;
  return userID;
};

const Profile = () => {
    const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
    const [arrayDetail, setArrayDetail] = useState([]);
    const [refresh, setRefresh] = useState(true);
    const [photoName, setPhotoName] = useState('');
    const [name, setname] = useState('');

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

    useEffect(() => {
        (async () => {
          const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync()
          setHasGalleryPermission(galleryStatus.status === 'granted');
        })();
    }, []);

    useEffect(() => {
        const fetchUserProfilePhoto = async () => {
          try {
            const name = await readUserProfilePhoto();
            setPhotoName(name.photoName);
            setname(name.username)
            setRefresh(false);
          } catch (error) {
            console.error('Error fetching user profile photo:', error);
          }
        };
    
        fetchUserProfilePhoto();
    }, [refresh]);

    const renderProfilePic = () => {
        if (photoName === '') {
          return (
            <Image source={require('../images/user.jpg')} style={styles.profilePic} />
          );
        } 
        else {
          return (
            <Image source={{ uri: photoName }} style={styles.profilePic} />
          );
        }
    };
    
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

    const pickImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          console.log('Permission denied');
          return;
        }
    
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1,1],
          quality: 1,
        });
    
        if (!result.canceled) {
          // Handle the selected image here
          console.log(result.assets[0].uri);
          uploadImage(result.assets[0].uri);
        }
      };

      const uploadImage = async (photo) => {
        // Upload file and metadata to the object 'images/file.name'
        const filename = photo.split('/').pop();
        const response = await fetch(photo);
        const blob = await response.blob();
        const storageRef = ref(firebaseStorage, 'profiles/' + filename);
        
        const metadata = {
          contentType: 'image/jpeg',
        };
    
        const uploadTask = uploadBytesResumable(storageRef, blob , metadata);
    
        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
            }
          },
          (error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
              case "storage/unauthorized":
                // User doesn't have permission to access the object
                break;
              case "storage/canceled":
                // User canceled the upload
                break;
    
              // ...
    
              case "storage/unknown":
                // Unknown error occurred, inspect error.serverResponse
                break;
            }
          },
          () => {
            // Upload completed successfully, now we can get the download URL
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              console.log("File available at", downloadURL);
              Toast.show({
                type: 'success',
                text1: 'Profile Uploaded!',
                text2: 'Your profile has been successfully uploaded.',
              });
    
              updatePhotoToFirestore(userID,downloadURL);
            });
          }
        );
      };


    return (
        <>
            <FeedHeader loading = {handleRefresh} title = "Profile"/>
            <View style={styles.mainContainer}>
                <View style={styles.photo_username}>
                    <TouchableOpacity style={styles.button} onPress={pickImage}>
                        {renderProfilePic()}
                    </TouchableOpacity>
                    <Text style={styles.text}>{name}</Text>
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