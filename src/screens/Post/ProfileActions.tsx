import {Alert, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Text from '../../components/Text';

const ProfileActions = () => {
  const handlePress = () => {
    Alert.alert('pressed');
  };
  return (
    <TouchableOpacity onPress={() => handlePress()}>
      <Text style={styles.icon}>...</Text>
    </TouchableOpacity>
  );
};

export default ProfileActions;

const styles = StyleSheet.create({
  icon: {
    fontSize: 30,
  },
});
