import { View, Text, StyleSheet, ScrollView } from 'react-native';
import MembershipCard from '../components/Membership/MembershipCard';

const Membership = () => {

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.heading}>Choose a Membership</Text>
                <MembershipCard membershipTitle = 'Monthly' membershipPrice='Rs1200/month' membershipDiscount=''/>
                <MembershipCard membershipTitle = 'Yearly' membershipPrice='Rs13000/year' membershipDiscount='10% discount on yearly membership'/>
            </View>
        </ScrollView>
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