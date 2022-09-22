import {Image, StyleSheet} from 'react-native';
import React from 'react';

const ProfileImage = () => {
  return (
    <Image
      source={require('../../../assets/avatar.jpg')}
      style={styles.image}
    />
  );
};

export default ProfileImage;

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
