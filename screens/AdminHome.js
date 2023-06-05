import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native'
import AdminHeader from "../components/Header/AdminHeader";
import { countUser } from '../database/Read';
import { countMembership } from '../database/Read';
import React, { useEffect, useState } from 'react';

const AdminHome = () => {
  const [countValue, setCountValue] = useState(0);
  const [countMembershipValue, setCountMembership] = useState(0);
  const [arrayDetail, setArrayDetail] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    const getCount = async () => {
      try {
        const {count, arrayDetail } = await countUser();
        setCountValue(count);
        setArrayDetail(arrayDetail);
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
  }, []);

  const handleUserSelect = (userId) => {
    setSelectedUserId(userId);
  };

  const handleDeleteUser = () => {
    console.log(selectedUserId);
  };

  return (
    <View style={styles.mainContainer}>
        <AdminHeader />
        <ScrollView>
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
  boxContainer: {
    flexDirection:'row',
    margin: 20,
    alignSelf:'center',
  },
  boxRed: {
    height: 75,
    width: '35%',
    backgroundColor:'#ff0000',
    margin: 20,
    borderRadius: 12,
    padding:5,
  },
  boxGreen: {
    height: 75,
    width: '35%',
    backgroundColor:'green',
    margin: 20,
    borderRadius: 12,
    padding:5
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