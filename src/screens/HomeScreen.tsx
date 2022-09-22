import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import PostHeader from './Post/PostHeader';
import ProfileImage from './Post/ProfileImage';

const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <PostHeader />
        <ProfileImage />
        <ProfileImage />
        <ProfileImage />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
