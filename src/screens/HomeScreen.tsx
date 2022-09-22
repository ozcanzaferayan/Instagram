import React from 'react';

import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import Text from '../components/Text';
import PostActions from './Post/PostActions';
import PostComments from './Post/PostComments';
import PostDescription from './Post/PostDescription';
import PostHeader from './Post/PostHeader';
import PostImage from './Post/PostImage';
import PostLikes from './Post/PostLikes';
import PostTime from './Post/PostTime';

const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <PostHeader />
        <PostImage />
        <PostActions />
        <PostLikes />
        <PostDescription />
        <PostComments />
        <PostTime />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
