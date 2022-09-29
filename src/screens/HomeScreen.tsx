import React from 'react';

import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {PostType} from './Post/models/PostType';
import Post from './Post/Post';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import axios from '../config/axios';
import {useQuery} from '@tanstack/react-query';
import Text from '../components/Text';
import usePosts from '../hooks/usePosts';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const {isLoading, error, data} = usePosts();

  if (isLoading) {
    return <ActivityIndicator />;
  }
  if (error) {
    console.log(error);
    return <Text>Bir hata oluştu</Text>;
  }

  const handleRenderItem = (post: PostType) => {
    return <Post post={post} />;
  };

  return (
    <SafeAreaView
      style={isDarkMode ? styles.darkContainer : styles.lightContainer}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <FlatList
        data={data}
        renderItem={({item}) => handleRenderItem(item)}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  darkContainer: {
    backgroundColor: '#000',
  },
  lightContainer: {
    backgroundColor: '#fff',
  },
});

export default HomeScreen;
