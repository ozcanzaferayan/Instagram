import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Text from '../../../components/Text';

const PostComments = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>25 yorumun tümünü gör</Text>
    </TouchableOpacity>
  );
};

export default PostComments;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  text: {
    opacity: 0.8,
  },
});
