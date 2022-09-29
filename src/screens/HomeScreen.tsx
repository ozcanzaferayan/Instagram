import React, {useEffect, useState} from 'react';

import {
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

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [posts, setPosts] = useState([] as PostType[]);

  useEffect(() => {
    axios.get('/posts').then(res => setPosts(res.data));
  }, []);

  const handleRenderItem = (post: PostType) => {
    return <Post post={post} />;
  };

  return (
    <SafeAreaView
      style={isDarkMode ? styles.darkContainer : styles.lightContainer}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <FlatList
        data={posts}
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
