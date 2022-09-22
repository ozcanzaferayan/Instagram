import {StyleSheet, View} from 'react-native';
import React from 'react';
import Text from '../../../components/Text';

const PostTime = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.time}>9 saat önce</Text>
      <Text style={styles.seperator}> · </Text>
      <Text style={styles.lookTranslation}>Cevirisine bak</Text>
    </View>
  );
};

export default PostTime;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
  },
  time: {
    opacity: 0.8,
  },
  seperator: {
    opacity: 0.8,
  },
  lookTranslation: {},
});
