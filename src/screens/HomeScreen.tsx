import React from 'react';

import {FlatList, SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {PostType} from './Post/models/PostType';
import Post from './Post/Post';

const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const items: PostType[] = [
    {
      id: 1,
      username: 'zaferayan',
      postImage: 'https://picsum.photos/id/598/600/400',
    },
    {
      id: 2,
      username: 'hasansun',
      postImage: 'https://picsum.photos/id/1076/600/400',
    },
    {
      id: 3,
      username: 'yusufakgul',
      postImage: 'https://picsum.photos/id/1060/600/400',
    },
  ];

  const handleRenderItem = (post: PostType) => {
    console.log(post);
    return <Post post={post} />;
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <FlatList
        data={items}
        renderItem={({item}) => handleRenderItem(item)}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
