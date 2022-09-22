import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import PostActions from './Post/PostActions';
import PostHeader from './Post/PostHeader';
import PostImage from './Post/PostImage';

const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <PostHeader />
        <PostImage />
        <PostActions />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
