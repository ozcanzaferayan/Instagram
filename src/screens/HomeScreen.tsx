import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  Button,
} from 'react-native';
import PostHeader from './Post/PostHeader';
import ProfileImage from './Post/ProfileImage';
import {useSelector, useDispatch} from 'react-redux';
import Text from '../components/Text';
import {RootState} from '../store/store';
import {decrement, increment} from '../slices/counterSlice';

const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const count = useSelector((state: RootState) => state.value);
  const dispatch = useDispatch();

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text>{count}</Text>
        <Button title={'INCREMENT'} onPress={() => dispatch(increment())} />
        <Button title={'DECREMENT'} onPress={() => dispatch(decrement())} />
        <PostHeader />
        <ProfileImage />
        <ProfileImage />
        <ProfileImage />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
