import {StyleSheet, View} from 'react-native';
import React from 'react';
import Text from '../../components/Text';

const PostDescription = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.username}>500px</Text>
      <Text style={styles.description}>
        Lorem ipsum, dolor sit amet consectetur
      </Text>
    </View>
  );
};

export default PostDescription;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
  },
  username: {
    fontWeight: 'bold',
  },
  description: {
    marginLeft: 5,
    opacity: 0.8,
  },
});
