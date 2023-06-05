import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import AdminHeader from "../components/Header/AdminHeader";
import { countUser } from '../database/Read';
import { countMembership } from '../database/Read';
import React, { useEffect, useState } from 'react';
import { deleteUserDocument } from '../database/Delete';
import Toast from 'react-native-toast-message';

const { height } = Dimensions.get('window');
const responsiveHeight = height * 0.1;

const AdminHome = () => {
  const [countValue, setCountValue] = useState(0);
  const [countMembershipValue, setCountMembership] = useState(0);
  const [arrayDetail, setArrayDetail] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    const getCount = async () => {
      try {
        if(refresh){
          const {count, arrayDetail } = await countUser();
          setCountValue(count);
          setArrayDetail(arrayDetail);
          setRefresh(false);
        }
        
      } catch (error) {
        console.error(error);
      }
    };

    const getCountMembership = async () => {
      try {
        const count = await countMembership();
        setCountMembership(count);
      } catch (error) {
        console.error(error);
      }
    };

    getCount();
    getCountMembership();

    
  }, [refresh]);

  const handleUserSelect = (userId) => {
    setSelectedUserId(userId);
  };

  const handleDeleteUser = () => {
    console.log(selectedUserId);
    if(selectedUserId !== null) {
      deleteUserDocument(selectedUserId);
      
      Toast.show({
        type: 'success',
        text1: 'Delete Done!',
        text2: 'Your deletion has been successfully completed.',
      });
      setRefresh(true);
    };
    setSelectedUserId(null);
  };

  return (
    <View style={styles.mainContainer}>
        <AdminHeader />
        <ScrollView>
          <Text style={styles.dashBoardText}>User DashBoard</Text>
          <View style={styles.boxContainer}>
            <View style={styles.boxRed}>
              <Text style={styles.text}>User</Text>
              <Text style={styles.textNum}>{countValue}</Text>
            </View>
            <View style={styles.boxGreen}>
              <Text style={styles.text}>Membership</Text>
              <Text style={styles.textNum}>{countMembershipValue}</Text>
            </View>
          </View>
          <View style={styles.idcontainer}>
            <Text style={styles.id}>Userid: {selectedUserId}</Text>
            <TouchableOpacity style={styles.deleteBtn} onPress={() => handleDeleteUser()}>
              <Text style={styles.deleteBtnText}>Delete</Text>
            </TouchableOpacity>
          </View>
          {arrayDetail.map((user, index) => (
            <TouchableOpacity style={[
              styles.record,
              selectedUserId === user.id ? styles.selectedRecord : null
            ]} key={user.id}
            onPress={() => handleUserSelect(user.id)}>
              <Text style={styles.text}>User {index + 1}: {user.name}</Text>
              <Text style={styles.text}>{selectedUserId === user.id ? 'Selected' : 'Unselected'}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
    </View>
  )
}

export default AdminHome;

const styles = StyleSheet.create({
  mainContainer:{
    flex: 1,
  },
  dashBoardText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
    color:"#ff0000",
    marginTop: 10,
  },
  boxContainer: {
    flexDirection:'row',
    marginTop: 10,
    alignSelf:'center',
    marginBottom: 15,
  },
  boxRed: {
    height:responsiveHeight,
    width: '37%',
    backgroundColor:'#ff0000',
    margin: 10,
    borderRadius: 12,
    padding:5,
    justifyContent:'center',
  },
  boxGreen: {
    width: '37%',
    backgroundColor:'green',
    margin: 10,
    borderRadius: 12,
    padding:5,
    justifyContent:'center',
  },
  text: {
    textAlign:'center',
    color:'white',
  },
  textNum: {
    textAlign:'center',
    color:'white',
    marginBottom: 5,
    fontSize: 25,
  },
  idcontainer: {
    width:'80%',
    borderRadius: 12,
    backgroundColor: 'green',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    paddingHorizontal:15,
    marginBottom: 10,
    paddingVertical:10,
  },
  id: {
    textAlign:'center',
    color:'white',
  },
  deleteBtn: {
    backgroundColor: 'red',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  deleteBtnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  record: {
    height:50,
    width:'80%',
    borderRadius: 12,
    backgroundColor: '#ff0000',
    justifyContent:'space-between',
    alignItems:'center',
    alignSelf:'center',
    flexDirection: 'row',
    paddingHorizontal:15,
    marginBottom: 10,
  },
});