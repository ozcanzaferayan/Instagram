import {StyleSheet, View} from 'react-native';
import React from 'react';
import Text from '../../../components/Text';

const ProfileNameAndLocation = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.accountName}>zaferayan</Text>
      <Text>Istanbul</Text>
    </View>
  );
};

export default ProfileNameAndLocation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginStart: 5,
  },
  accountName: {
    fontWeight: 'bold',
  },
});
