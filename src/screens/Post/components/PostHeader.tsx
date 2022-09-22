import {StyleSheet, View} from 'react-native';
import React from 'react';
import ProfileImage from './ProfileImage';
import ProfileNameAndLocation from './ProfileNameAndLocation';
import ProfileActions from './ProfileActions';

const PostHeader = () => {
  return (
    <View style={styles.container}>
      <ProfileImage />
      <ProfileNameAndLocation />
      <ProfileActions />
    </View>
  );
};

export default PostHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    margin: 5,
  },
});
