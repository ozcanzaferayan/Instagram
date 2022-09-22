import {StyleSheet, View} from 'react-native';
import React from 'react';
import PostHeader from './components/PostHeader';
import PostImage from './components/PostImage';
import PostActions from './components/PostActions';
import PostLikes from './components/PostLikes';
import PostDescription from './components/PostDescription';
import PostComments from './components/PostComments';
import PostTime from './components/PostTime';
import {PostType} from './models/PostType';

type Props = {
  post: PostType;
};
const Post = (props: Props) => {
  return (
    <View style={styles.container}>
      <PostHeader username={props.post.username} />
      <PostImage imageSrc={props.post.postImage} />
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
