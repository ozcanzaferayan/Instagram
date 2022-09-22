import {StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const PostActions = () => {
  return (
    <Icon.Button
      name="facebook"
      backgroundColor="#3b5998"
      onPress={console.log}>
      Login with Facebook
    </Icon.Button>
  );
};

export default PostActions;

const styles = StyleSheet.create({});
