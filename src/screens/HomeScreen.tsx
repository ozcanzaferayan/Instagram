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
import {decrement, increment} from '../reducers/counterReducer';
import Text from '../components/Text';

const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const count = useSelector((state: any) => state.value);
  const dispatch = useDispatch();
  console.log(count);

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
