import { StyleSheet, Text, Dimensions } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { AddMembership } from '../../database/Adding';
import {  useNavigation } from '@react-navigation/native';
import { membershipDetail } from '../../screens/Payment';

const { width } = Dimensions.get('window');
const responsiveWidth = width * 0.9; // 90% of the screen width




const MembershipCard = props => {

  const navigation = useNavigation();

  const test = () => {
    const membership = { title: props.membershipTitle, price: props.membershipPrice }
    membershipDetail(membership);
    //AddMembership(props.membershipTitle);
    navigation.navigate('Payment'); 
  }

  return (
    <Card containerStyle={styles.cardContainer}>
        <Card.Title>{props.membershipTitle}</Card.Title>
        <Card.Divider />
        <Text style={styles.price}>{props.membershipPrice}</Text>
        <Text style={styles.featureText}>{props.membershipDiscount}</Text>
        <Button title="Select" buttonStyle={styles.button} onPress={() => {test()}}/>
    </Card>
  )
}

export default MembershipCard;

const styles = StyleSheet.create({
      cardContainer: {
        width: responsiveWidth,
        borderRadius: 10,
        marginBottom: 20,
      },
      price: {
        fontSize: 20,
        marginBottom: 10,
      },
      featureText: {
        fontSize: 14,
        color: '#555',
        marginBottom: 5,
      },
      button: {
        backgroundColor: 'red',
      },
  });