import {StyleSheet, View} from 'react-native';
import React from 'react';
import Text from '../../../components/Text';

const PostLikes = () => {
  return <Text style={styles.text}>7.6723 beğenme</Text>;
};

export default PostLikes;

const styles = StyleSheet.create({
  text: {
    marginTop: 10,
    fontWeight: 'bold',
  },
});
