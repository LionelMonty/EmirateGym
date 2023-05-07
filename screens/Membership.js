import { View, Text, StyleSheet } from 'react-native';
import MembershipCard from '../components/Membership/MembershipCard';

const Membership = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Choose a Membership</Text>
            <MembershipCard membershipTitle = 'Monthly' membershipPrice='Rs1200/month' membershipDiscount=''/>
            <MembershipCard membershipTitle = 'Yearly' membershipPrice='Rs13000/year' membershipDiscount='10% discount on yearly membership'/>
        </View>
    );
}

export default Membership;


const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      heading: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 20,
        color:'red',
      },
  });