import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import Post from './Post/Post';

const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Post />
        <Post />
        <Post />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
