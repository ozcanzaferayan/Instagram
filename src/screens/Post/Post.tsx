import {StyleSheet, View} from 'react-native';
import React from 'react';
import PostHeader from './components/PostHeader';
import PostImage from './components/PostImage';
import PostActions from './components/PostActions';
import PostLikes from './components/PostLikes';
import PostDescription from './components/PostDescription';
import PostComments from './components/PostComments';
import PostTime from './components/PostTime';

const Post = () => {
  return (
    <View style={styles.container}>
      <PostHeader />
      <PostImage />
      <PostActions />
      <PostLikes />
      <PostDescription />
      <PostComments />
      <PostTime />
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
});
